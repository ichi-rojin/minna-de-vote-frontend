import axios from "axios";
import { IAuthStrategy } from "@/strategies/auth/IAuthStrategy";
import { createAuthStrategy } from "@/strategies/auth/AuthStrategyFactory";

const apiClient = axios.create();

let authRepositoryPromise: Promise<IAuthStrategy> | null = null;

function getAuthRepository(): Promise<IAuthStrategy> {
  if (!authRepositoryPromise) {
    authRepositoryPromise = createAuthStrategy();
  }
  return authRepositoryPromise;
}

apiClient.interceptors.request.use(async (config) => {
  const authRepository = await getAuthRepository();
  config.headers = config.headers ?? {};

  const idToken = await authRepository.getIdToken();
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
