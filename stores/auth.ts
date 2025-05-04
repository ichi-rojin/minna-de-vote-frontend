import apiClient from "@/providers/apiClient";
import { ApiUrls } from "@/consts/ApiUrls";
export default function authStore() {
  return {
    async login() {
      // Firebase Functions に FID を送信
      await apiClient.post(ApiUrls.POST_AUTH);
    },
  };
}

export type AuthStore = ReturnType<typeof authStore>;
