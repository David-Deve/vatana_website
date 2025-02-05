import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App.vue";
import router from "./router";
import { loadMessage } from "./lang";
import "boxicons/css/boxicons.min.css";
// import "../src/assets/js/aos";
// import "../src/assets/js/counter";
// import "../src/assets/js/custom";
// import "../src/assets/js/tiny-slider";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
loadMessage().then((messages) => {
  const i18n = createI18n({
    locale: "en",
    fallbackLocale: "kh",
    messages,
    warnHtmlMessage: false,
    legacy: false,
  });
  app.use(router);
  app.use(i18n);
  app.mount("#app");
  app.use(ElementPlus);
});

