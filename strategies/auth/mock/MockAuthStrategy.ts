import { IAuthStrategy } from "../IAuthStrategy";

export class MockAuthStrategy implements IAuthStrategy {
  async getIdToken(): Promise<string> {
    return "mock-token";
  }
}
