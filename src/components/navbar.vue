<template>
  <nav class="site-nav">
    <div class="container">
      <div class="site-navigation">
        <a href="/" class="logo m-0 float-start" style="text-decoration: none"
          >TITH VATANA<span class="text-primary">.</span>
        </a>
        <ul
          class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start"
          :style="{ fontFamily: fontFamily }"
        >
          <li>
            <a href="/">{{ $t("Navbar.home") }}</a>
          </li>
          <li>
            <a href="/project">{{ $t("Navbar.project") }}</a>
          </li>
          <li>
            <a href="/services">{{ $t("Navbar.service") }}</a>
          </li>
          <li>
            <a href="about.html">{{ $t("Navbar.about") }}</a>
          </li>
          <li>
            <a href="contact.html">{{ $t("Navbar.contact") }}</a>
          </li>
        </ul>

        <a
          href="#"
          class="burger ml-auto float-end site-menu-toggle light js-menu-toggle d-inline-block d-lg-none"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span></span>
        </a>
        <ul class="site-menu float-end d-none d-md-block">
          <li>
            <a href="#" class="d-flex align-items-center text-white h2 fw-bold"
              ><span class="icon-phone me-2"></span>
              <span>+ 2 292 4392 327</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <button class="btn ms-0" @click="changeLanguage">
        <div v-if="checkLang">
          <img src="../assets/svg/km.svg" width="25" />
        </div>
        <div v-else>
          <img src="../assets/svg/en.svg" width="25" />
        </div>
      </button>
    </div>
  </nav>
</template>
<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useFont } from "@/utils/usefont";
const { locale } = useI18n();
const checkLang = computed(() => locale.value === "en");
function changeLanguage() {
  locale.value = checkLang.value ? "kh" : "en";
}

const fontFamily = useFont();
</script>
<style scoped>
.logo {
  font-family: "Montserrat", sans-serif;
}
.a {
  text-decoration: none;
}
</style>
