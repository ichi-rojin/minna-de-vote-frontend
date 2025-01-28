import axios from "axios";
import { ApiUrls } from "@/consts/ApiUrls";

interface Elector {
  name: string;
  img: string;
}
interface IPostResponse {
  timestamp: number;
  electors: Array<Elector>;
}

export default function electionStore() {
  return {
    async post(title: string, description: string, electors: Array<Elector>) {
      const res = await axios.post<IPostResponse>(ApiUrls.POST_ELECTION, {
        title,
        description,
        electors,
      });
    },
  };
}

export type ElectionStore = ReturnType<typeof electionStore>;
