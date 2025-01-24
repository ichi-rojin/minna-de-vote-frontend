import { reactive } from "vue";
import axios from "axios";
import { ApiUrls } from "@/consts/ApiUrls";

interface IDetail {
  id: number;
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

export default function detailStore() {
  const detail: IGetResponse = reactive({
    timestamp: 0,
    title: "",
    results: [],
  });

  return {
    get detail() {
      return detail;
    },

    async fetch(id: number) {
      const res = await axios.get<IGetResponse>(ApiUrls.GET_Detail + `/${id}`);
      detail.timestamp = res.data.timestamp;
      detail.title = res.data.title;
      detail.results = res.data.results;
    },
  };
}

export type DetailStore = ReturnType<typeof detailStore>;
