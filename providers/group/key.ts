import { InjectionKey } from "vue";
import { GroupStore } from "@/stores/group";

const GroupKey: InjectionKey<GroupStore> = Symbol("GroupStore");
export default GroupKey;
