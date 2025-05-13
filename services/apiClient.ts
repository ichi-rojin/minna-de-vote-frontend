// /frontend/src/providers/apiClient.ts
import axios from "axios";
import { getInstallations, getId } from "firebase/installations";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithCustomToken,
} from "firebase/auth";
import { ApiUrls } from "@/consts/ApiUrls";

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

const apiClient = axios.create();
let tokenPromise: Promise<string> | null = null;

async function fetchIdToken(): Promise<string> {
  if (auth.currentUser) {
    return await auth.currentUser.getIdToken();
  }

  if (!tokenPromise) {
    // 最初の1回だけ走る
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

apiClient.interceptors.request.use(async (config) => {
  config.headers = config.headers ?? {};
  const idToken = await fetchIdToken();
  config.headers["Authorization"] = `Bearer ${idToken}`;

  // CSRFトークン
  if (config.method?.toUpperCase() !== "GET") {
    const csrf_token =
      document
        .querySelector("meta[name=csrf-token]")
        ?.getAttribute("content") ?? "";
    config.headers["X-CSRF-Token"] = csrf_token;
    config.headers["X-Requested-With"] = "XMLHttpRequest";
  }

  return config;
});

export default apiClient;
