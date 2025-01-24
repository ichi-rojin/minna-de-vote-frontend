import { InjectionKey } from "vue";
import { ElectionStore } from "@/stores/election";

const ElectionKey: InjectionKey<ElectionStore> = Symbol("ElectionStore");
export default ElectionKey;
