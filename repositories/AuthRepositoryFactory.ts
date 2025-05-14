import { AuthRepository } from "./AuthRepository";

export async function createAuthRepository(): Promise<AuthRepository> {
  if (process.env.VUE_APP_FIREBASE_API_KEY) {
    const module = await import("./firebase/FirebaseAuthRepository");
    return new module.FirebaseAuthRepository();
  }

  if (process.env.VUE_APP_AWS_API_KEY) {
    // AWS版想定
  }

  const module = await import("./mock/MockAuthRepository");
  return new module.MockAuthRepository();
}
