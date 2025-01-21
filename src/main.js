import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App.vue";
import router from "./router";
import { loadMessage } from "./lang";
import "boxicons/css/boxicons.min.css";

const app = createApp(App);
loadMessage().then((messages) => {
  const i18n = createI18n({
    locale: "en",
    fallbackLocale: "kh",
    messages,
    warnHtmlMessage: false,
    legacy: false,
  });
  app.use(createPinia());
  app.use(router);
  app.use(i18n);
  app.mount("#app");
});

app.use(createPinia());
app.use(router);
app.mount("#app");
