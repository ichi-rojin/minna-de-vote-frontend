import ApiClient from "@/services/ApiClient";
import { ApiUrls } from "@/consts/ApiUrls";

export interface IElector {
  name: string;
  img: string;
  nameMsg: string;
  imgMsg: string;
}
interface IErrorMap {
  code: number;
  message: string;
}
export interface IElectionError {
  title: IErrorMap;
  description: IErrorMap;
  electors: IErrorMap;
}
export interface IErrorStack {
  title: boolean;
  description: boolean;
  electors: boolean;
}
interface IPostResponse {
  timestamp: number;
  electors: Array<IElector>;
  errors: object;
}

export default function electionStore() {
  return {
    async post(title: string, description: string, electors: Array<IElector>) {
      return await ApiClient.post<IPostResponse>(ApiUrls.POST_ELECTION, {
        title,
        description,
        electors,
      });
    },
  };
}

export type ElectionStore = ReturnType<typeof electionStore>;
