<script lang="ts" setup>
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";

// Firebase の設定
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

// 初回アプリ起動時に自動ログイン
signInAnonymously(auth)
  .then(() => {
    console.log("✅ 匿名ログイン成功");
  })
  .catch((error) => {
    console.error("⚠️ 匿名ログイン失敗:", error);
  });

// 認証状態が変わったときにユーザー情報を取得
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("🎯 ユーザー UID:", user.uid);
  }
});

import AuthKey from "./key";
import injector from "@/providers/injector";

const { login } = injector(AuthKey);
login();
</script>
