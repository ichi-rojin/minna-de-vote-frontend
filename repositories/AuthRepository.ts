export interface AuthRepository {
  getIdToken(): Promise<string>;
}
