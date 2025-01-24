import { InjectionKey } from "vue";
import { VoteStore } from "@/stores/vote";

const VoteKey: InjectionKey<VoteStore> = Symbol("VoteStore");
export default VoteKey;
