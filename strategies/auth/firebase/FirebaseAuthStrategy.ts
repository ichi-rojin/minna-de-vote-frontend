import { IAuthStrategy } from "../IAuthStrategy";
import {
  getAuth,
  connectAuthEmulator,
  signInWithCustomToken,
} from "firebase/auth";
import { getInstallations, getId } from "firebase/installations";
import { initializeApp } from "firebase/app";
import { ApiUrls } from "@/consts/ApiUrls";
import axios from "axios";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (process.env.VUE_APP_FIREBASE_AUTH_EMU_URL) {
  connectAuthEmulator(auth, process.env.VUE_APP_FIREBASE_AUTH_EMU_URL);
}

let tokenPromise: Promise<string> | null = null;

export class FirebaseAuthStrategy implements IAuthStrategy {
  async getIdToken(): Promise<string> {
    if (auth.currentUser) {
      return await auth.currentUser.getIdToken();
    }

    if (!tokenPromise) {
      tokenPromise = (async () => {
        const fid = await getId(getInstallations(app));
        const res = await axios.post(
          ApiUrls.POST_AUTH,
          {},
          {
            headers: { "X-Firebase-Installations-ID": fid },
          }
        );
        const { token } = res.data;
        const userCred = await signInWithCustomToken(auth, token);
        return await userCred.user.getIdToken();
      })();
    }

    return tokenPromise;
  }
}
