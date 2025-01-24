import { reactive } from "vue";
import axios from "axios";
import { ApiUrls } from "@/consts/ApiUrls";

interface IPostResponse {
  timestamp: number;
  elections: Array<[]>;
}

export default function voteStore() {
  const history: IPostResponse = reactive({
    timestamp: 0,
    elections: [],
  });

  return {
    get history() {
      return history;
    },

    async post(id: number, vote: number | undefined) {
      const res = await axios.post<IPostResponse>(ApiUrls.POST_VOTE, {
        id,
        vote,
      });
      history.timestamp = res.data.timestamp;
      history.elections = res.data.elections;
    },
  };
}

export type VoteStore = ReturnType<typeof voteStore>;
