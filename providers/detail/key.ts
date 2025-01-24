import { InjectionKey } from "vue";
import { DetailStore } from "@/stores/detail";

const DetailKey: InjectionKey<DetailStore> = Symbol("DetailStore");
export default DetailKey;
