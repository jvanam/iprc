import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import prismic from "./prismic";
import router from "./router/index";

createApp(App).use(router).use(prismic).mount("#app");
