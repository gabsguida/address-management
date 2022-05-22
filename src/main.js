import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// global style
import "./assets/style/main.css";

// tailwind
import "./assets/style/tailwind.css";

createApp(App).use(router).mount("#app");
