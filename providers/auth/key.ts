import { InjectionKey } from "vue";
import { AuthStore } from "@/stores/auth";

const AuthKey: InjectionKey<AuthStore> = Symbol("AuthStore");
export default AuthKey;
