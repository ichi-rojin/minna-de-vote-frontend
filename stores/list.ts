import { reactive } from "vue";
import axios from "axios";
import { ApiUrls } from "@/consts/ApiUrls";

interface IList {
  id: number;
  createdAt: string;
  updatedAt: string;
  data: string;
}
interface IGetResponse {
  timestamp: number;
  results: Array<IList>;
}

export default function listStore() {
  const list: IGetResponse = reactive({
    timestamp: 0,
    results: [],
  });

  return {
    get list() {
      return list;
    },

    async fetch() {
      const res = await axios.get<IGetResponse>(ApiUrls.GET_LIST);
      list.timestamp = res.data.timestamp;
      list.results = res.data.results;
    },
  };
}

export type ListStore = ReturnType<typeof listStore>;
