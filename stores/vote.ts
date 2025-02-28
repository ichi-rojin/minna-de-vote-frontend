import { reactive } from "vue";
import axios from "axios";
import { ApiUrls } from "@/consts/ApiUrls";

interface History {
  id: string;
  vote: string;
}
interface IPostResponse {
  timestamp: number;
  errorcode: number;
  results: Array<History>;
}

export default function voteStore() {
  const history: IPostResponse = reactive({
    timestamp: 0,
    errorcode: 0,
    results: [],
  });

  return {
    get history() {
      return history;
    },

    async get() {
      const res = await axios.get<IPostResponse>(ApiUrls.GET_VOTE);
      history.timestamp = res.data.timestamp;
      history.results = res.data.results;
    },

    async post(id: string, vote: string) {
      const res = await axios.post<IPostResponse>(ApiUrls.POST_VOTE, {
        id,
        vote,
      });
      history.timestamp = res.data.timestamp;
      history.errorcode = res.data.errorcode;
      history.results = res.data.results;
    },
  };
}

export type VoteStore = ReturnType<typeof voteStore>;
