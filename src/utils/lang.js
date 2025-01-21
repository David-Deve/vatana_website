// src/utils/language.js
import VueCookies from "vue-cookies";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// Function to set the language and update font
const setLanguage = (selectedLanguage) => {
  // Update I18n locale
  locale.value = selectedLanguage;

  // Store the language in a cookie
  VueCookies.set("selectedLanguage", selectedLanguage, {
    path: "/",
    maxAge: 3600 * 24 * 7,
  });

  // Update the class on the body tag
  document.body.className = lang === "kh" ? "kh" : "";
};

// Initialize language from cookie on app load
const initLanguage = () => {
  const savedLang = VueCookies.get("selectedLanguage") || "en"; // Default to English if no cookie is found
  setLanguage(savedLang);
};

export { setLanguage, initLanguage };
