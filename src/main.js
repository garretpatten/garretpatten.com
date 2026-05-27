import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { initLinkSpaceActivation } from "./utils/keyboard";
import "vue3-carousel/dist/carousel.css";
import "./assets/css/main.css";

initLinkSpaceActivation();

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
