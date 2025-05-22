import axios from "axios";
import { IAuthStrategy } from "@/strategies/auth/IAuthStrategy";
import { createAuthStrategy } from "@/strategies/auth/AuthStrategyFactory";

const apiClient = axios.create();

let authStrategyPromise: Promise<IAuthStrategy> | null = null;

function getAuthStrategy(): Promise<IAuthStrategy> {
  if (!authStrategyPromise) {
    authStrategyPromise = createAuthStrategy();
  }
  return authStrategyPromise;
}

apiClient.interceptors.request.use(async (config) => {
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

export default apiClient;
