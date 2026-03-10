import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import revealDirective from "./directives/reveal";
import "./assets/css/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.directive("reveal", revealDirective);

app.mount("#app");
