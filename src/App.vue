<template>
  <div id="app" :class="['app', { 'khmer-font': currentLanguage === 'kh' }]">
    <router-view />
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { computed, watch } from "vue";
import VueCookies from "vue-cookies";

const { locale } = useI18n();

const currentLanguage = computed(() => locale.value);

const selectedLanguage = VueCookies.get("selectedLanguage");

if (selectedLanguage) {
  locale.value = selectedLanguage;
} else {
  locale.value = "en";
}

watch(currentLanguage, (newLang) => {
  VueCookies.set("selectedLanguage", newLang);
});
</script>
<style scoped>
.app {
  font-family: "Inter", serif;
}

.khmer-font {
  font-family: "Angkor", serif;
}
.dark-theme {
  background-color: #121212;
  color: white;
}
.light-theme {
  background-color: white;
  color: black;
}
</style>
