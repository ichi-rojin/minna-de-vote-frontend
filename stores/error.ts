import { reactive } from "vue";

interface IError {
  code: number;
  message: Array<string>;
}

export default function errorStore() {
  const error: IError = reactive({
    code: 0,
    message: [],
  });

  return {
    get error() {
      return error;
    },
  };
}

export type ErrorStore = ReturnType<typeof errorStore>;
