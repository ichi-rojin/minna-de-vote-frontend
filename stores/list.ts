import { reactive } from "vue";
import ApiClient from "@/services/ApiClient";
import { ApiUrls } from "@/consts/ApiUrls";

interface IElection {
  id: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  copy: string;
  title: string;
  img: string;
}

export default function listStore() {
  const list: Array<IElection> = reactive([]);

  return {
    get list() {
      return list;
    },

    async fetch() {
      const res = await ApiClient.get<Array<IElection>>(ApiUrls.GET_LIST);
      list.splice(0, list.length, ...res.data);
    },
  };
}

export type ListStore = ReturnType<typeof listStore>;
