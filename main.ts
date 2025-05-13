import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import routerEnforcer from "./router/routerEnforcer";

import "./assets/css/main.css";

const app = createApp(App);
app.use(router);
app.use(routerEnforcer);

app.mount("#app");
