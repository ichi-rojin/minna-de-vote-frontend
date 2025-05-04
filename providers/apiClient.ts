// src/providers/apiClient.ts
import axios from "axios";
import { getInstallations, getId } from "firebase/installations";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

// Firebase アプリを初期化
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
if (process.env.VUE_APP_FIREBASE_AUTH_EMU_URL !== undefined) {
  connectAuthEmulator(auth, process.env.VUE_APP_FIREBASE_AUTH_EMU_URL); // エミュレーターを使用
}

const apiClient = axios.create();

apiClient.interceptors.request.use(
  async (config) => {
    if (config.method === "post") {
      const installations = getInstallations(app);
      const fid = await getId(installations);
      config.headers = config.headers ?? {};
      config.headers["X-Firebase-Installations-ID"] = fid;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
