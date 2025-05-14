import { AuthRepository } from "../AuthRepository";

export class MockAuthRepository implements AuthRepository {
  async getIdToken(): Promise<string> {
    return "mock-token";
  }
}
