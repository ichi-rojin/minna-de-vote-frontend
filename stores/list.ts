import { reactive } from "vue";
import apiClient from "@/services/apiClient";
import { ApiUrls } from "@/consts/ApiUrls";

interface IList {
  id: number;
  createdAt: string;
  updatedAt: string;
  date: string;
  copy: string;
  title: string;
  img: string;
}
interface IGetResponse {
  timestamp: number;
  title: string;
  results: Array<IList>;
}

export default function listStore() {
  const list: IGetResponse = reactive({
    timestamp: 0,
    title: "",
    results: [],
  });

  return {
    get list() {
      return list;
    },

    async fetch() {
      const res = await apiClient.get<IGetResponse>(ApiUrls.GET_LIST);
      list.timestamp = res.data.timestamp;
      list.title = res.data.title;
      list.results = res.data.results;
    },
  };
}

export type ListStore = ReturnType<typeof listStore>;
