import axios from "axios";
import { ApiUrls } from "@/consts/ApiUrls";

export default function authStore() {
  return {
    async login() {
      await axios.post(ApiUrls.POST_AUTH);
    },
  };
}

export type AuthStore = ReturnType<typeof authStore>;
