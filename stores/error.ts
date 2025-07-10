import { reactive } from "vue";

interface IError {
  code: number;
  message: Array<string>;
}

const initialState: IError = {
  code: 0,
  message: [],
};

export default function errorStore() {
  const error: IError = reactive({ ...initialState });

  const reset = () => {
    Object.assign(error, initialState);
  };

  return {
    get error() {
      return error;
    },

    reset,
  };
}

export type ErrorStore = ReturnType<typeof errorStore>;
