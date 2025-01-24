import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: import("../views/HomeView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: import("../views/ListView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

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

export default router;
