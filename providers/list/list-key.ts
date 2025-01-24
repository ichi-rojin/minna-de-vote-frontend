import { InjectionKey } from "vue";
import { ListStore } from "@/stores/list";

const ListKey: InjectionKey<ListStore> = Symbol("ListStore");
export default ListKey;
