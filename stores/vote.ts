import { reactive } from "vue";
import ApiClient from "@/services/ApiClient";
import { ApiUrls } from "@/consts/ApiUrls";

interface History {
  id: string;
  vote: string;
}
interface IResponse {
  timestamp: number;
  results: Array<History>;
}

export default function voteStore() {
  const history: IResponse = reactive({
    timestamp: 0,
    results: [],
  });

  return {
    get history() {
      return history;
    },

    async get() {
      const res = await ApiClient.get<IResponse>(ApiUrls.GET_VOTE);
      history.timestamp = res.data.timestamp;
      history.results = res.data.results;
    },

    async post(id: string, vote: string) {
      const res = await ApiClient.post<IResponse>(ApiUrls.POST_VOTE, {
        id,
        vote,
      });
      history.timestamp = res.data.timestamp;
      history.results = res.data.results;
    },
  };
}

export type VoteStore = ReturnType<typeof voteStore>;
