import router from ".";

const routerEnforcer: any = {
  install: () => {
    initialize();
  },
};

const initialize = () => {
  router.afterEach(() => {
    document.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) {
        return;
      }
      const regex = /^(?:https?:)?\/\//;
      // 外部リンク
      const isExternalLink = regex.test(href);
      if (isExternalLink) return;

      a.addEventListener("click", (event) => {
        event.preventDefault();
        router.push(href);
      });
    });
  });
};

export default routerEnforcer;
