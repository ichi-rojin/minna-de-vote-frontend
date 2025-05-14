import axios from "axios";
import { AuthRepository } from "@/repositories/AuthRepository";
import { createAuthRepository } from "@/repositories/AuthRepositoryFactory";

const apiClient = axios.create();

let authRepositoryPromise: Promise<AuthRepository> | null = null;

function getAuthRepository(): Promise<AuthRepository> {
  if (!authRepositoryPromise) {
    authRepositoryPromise = createAuthRepository();
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
