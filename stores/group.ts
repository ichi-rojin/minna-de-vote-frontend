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
interface IElectionGroup {
  id: string;
  timestamp: number;
  title: string;
  results: Array<IElection>;
}

export default function groupStore() {
  const groups: Array<IElectionGroup> = reactive([]);

  return {
    get groups() {
      return groups;
    },

    async fetch() {
      const res = await ApiClient.get<Array<IElectionGroup>>(ApiUrls.GET_GROUP);
      groups.splice(0, groups.length, ...res.data);
    },
  };
}

export type GroupStore = ReturnType<typeof groupStore>;
