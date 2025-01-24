import router from ".";
import { Plugin } from "vue";

const routerEnforcer: Plugin = {
  install: () => {
    initialize();
  },
};

const initialize = () => {
  router.afterEach(() => {
    const container = document.querySelectorAll("body:not(.isDelegated)")?.[0];
    if (!container) return;

    container.addEventListener("click", (event) => {
      const et = event?.target as HTMLInputElement;
      let isLink = false;
      let href = "";
      if (et.matches("a")) {
        isLink = true;
        href = et?.getAttribute("href") as string;
      }
      if (et.matches("img") && et?.parentElement?.matches("a")) {
        isLink = true;
        href = et?.parentElement?.getAttribute("href") as string;
      }
      if (!isLink) return;
      if (!href) return;

      const regex = /^(?:(?:https?:)?\/\/|#)/;
      // 外部リンク or アンカー
      const isExcepted = regex.test(href);
      if (isExcepted) return;

      event.preventDefault();
      router.push(href);
    });
    document.body.classList.add("isDelegated");
  });
};

export default routerEnforcer;
