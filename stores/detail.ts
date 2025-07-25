import { reactive } from "vue";
import ApiClient from "@/services/ApiClient";
import { ApiUrls } from "@/consts/ApiUrls";

interface IDetail {
  id: string;
  name: string;
  party: string;
  img: string;
  votes: number;
}
interface IGetResponse {
  timestamp: number;
  title: string;
  results: Array<IDetail>;
}
interface IPostResponse {
  timestamp: number;
  elections: Array<[]>;
}

export default function detailStore() {
  const detail: IGetResponse = reactive({
    timestamp: 0,
    title: "",
    results: [],
  });

  const history: IPostResponse = reactive({
    timestamp: 0,
    elections: [],
  });

  return {
    get detail() {
      return detail;
    },

    get history() {
      return history;
    },

    async fetch(id: string) {
      const res = await ApiClient.get<IGetResponse>(
        ApiUrls.GET_DETAIL + `/${id}`
      );
      detail.timestamp = res.data.timestamp;
      detail.title = res.data.title;
      detail.results = res.data.results;
    },

    async post(id: string, vote: number) {
      const res = await ApiClient.post<IPostResponse>(ApiUrls.POST_VOTE, {
        id,
        vote,
      });
      history.timestamp = res.data.timestamp;
      history.elections = res.data.elections;
    },
  };
}

export type DetailStore = ReturnType<typeof detailStore>;
