import { reactive } from "vue";

interface IError {
  code: number;
  messages: Array<string>;
}

export default function errorStore() {
  const error: IError = reactive({
    code: 0,
    messages: [],
  });

  return {
    get error() {
      return error;
    },
  };
}

export type ErrorStore = ReturnType<typeof errorStore>;
