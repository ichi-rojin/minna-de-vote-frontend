import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import routerEnforcer from "./router/routerEnforcer";
import axiosCsrfEnforcer from "./plugins/axiosCsrfEnforcer";

import "./assets/css/main.css";

const app = createApp(App);
app.use(router);
app.use(routerEnforcer);
app.use(axiosCsrfEnforcer);

app.mount("#app");
