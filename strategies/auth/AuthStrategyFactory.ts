import { IAuthStrategy } from "./IAuthStrategy";

export async function createAuthStrategy(): Promise<IAuthStrategy> {
  if (process.env.VUE_APP_FIREBASE_API_KEY) {
    const module = await import("./firebase/FirebaseAuthStrategy");
    return new module.FirebaseAuthStrategy();
  }

  if (process.env.VUE_APP_AWS_API_KEY) {
    // AWS版想定
  }

  const module = await import("./mock/MockAuthStrategy");
  return new module.MockAuthStrategy();
}
