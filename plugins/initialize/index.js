import router from "../../router";

export default {
  install: () => {
    initialize();
  },
};

const initialize = () => {
  router.beforeResolve((to, from, next) => {
    next();
  });
};
