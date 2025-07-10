import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ErrorStoreInstance } from "@/services/Error";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/DetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_PATH),
  routes,
});

router.beforeEach((to, from, next) => {
  ErrorStoreInstance.reset();
  next();
});

export default router;
