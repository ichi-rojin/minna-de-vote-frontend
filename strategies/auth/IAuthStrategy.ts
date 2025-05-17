export interface IAuthStrategy {
  getIdToken(): Promise<string>;
}
