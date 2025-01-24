import { Plugin } from "vue";
import axios from "axios";

const axiosCsrfEnforcer: Plugin = {
  install: () => {
    initialize();
  },
};

const initialize = () => {
  const csrf_token = document
    ?.querySelector("meta[name=csrf-token]")
    ?.getAttribute("content");
  axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-Token": csrf_token ?? "",
  };
};

export default axiosCsrfEnforcer;
