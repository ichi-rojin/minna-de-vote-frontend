import axios from "axios";
import { IAuthStrategy } from "@/strategies/auth/IAuthStrategy";
import { createAuthStrategy } from "@/strategies/auth/AuthStrategyFactory";

import { ErrorStoreInstance } from "@/services/Error";

const ApiClient = axios.create();

let authStrategyPromise: Promise<IAuthStrategy> | null = null;

function getAuthStrategy(): Promise<IAuthStrategy> {
  if (!authStrategyPromise) {
    authStrategyPromise = createAuthStrategy();
  }
  return authStrategyPromise;
}

ApiClient.interceptors.request.use(async (config) => {
  const authStrategy = await getAuthStrategy();
  config.headers = config.headers ?? {};

  const idToken = await authStrategy.getIdToken();
  config.headers["Authorization"] = `Bearer ${idToken}`;

  if (config.method?.toUpperCase() !== "GET") {
    const csrfToken =
      document
        .querySelector("meta[name=csrf-token]")
        ?.getAttribute("content") ?? "";
    config.headers["X-CSRF-Token"] = csrfToken;
    config.headers["X-Requested-With"] = "XMLHttpRequest";
  }

  return config;
});

ApiClient.interceptors.response.use(
  // 正常時
  (response) => response,
  // 異常時
  (error) => {
    const { response } = error;
    if (response) {
      const errData = response.data;
      ErrorStoreInstance.error.code = errData.code ?? response.status;
      ErrorStoreInstance.error.messages = Array.isArray(errData.messages)
        ? errData.messages
        : [errData.message || "unknown error"];
    } else {
      // サーバから応答なし（ネットワークエラー等）
      ErrorStoreInstance.error.code = 0;
      ErrorStoreInstance.error.messages = ["Network error or no response"];
    }

    console.log("errorStoreInstance", ErrorStoreInstance.error);

    return Promise.reject(error);
  }
);

export default ApiClient;
