import { InjectionKey } from "vue";
import { ErrorStore } from "@/stores/error";

const ErrorKey: InjectionKey<ErrorStore> = Symbol("ErrorStore");
export default ErrorKey;
