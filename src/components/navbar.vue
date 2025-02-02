<template>
  <nav class="site-nav">
    <div class="container">
      <div class="site-navigation">
        <a href="/" class="logo m-0 float-start" style="text-decoration: none; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
          >TITH VATANA<span class="text-primary">.</span>
        </a>
        
        <!-- Desktop Menu -->
        <ul class="js-clone-nav d-none d-lg-flex site-menu" :style="{ fontFamily: fontFamily }">
          <li><a href="/">{{ $t("Navbar.home") }}</a></li>
          <li><a href="/project">{{ $t("Navbar.project") }}</a></li>
          <li><a href="/services">{{ $t("Navbar.service") }}</a></li>
          <li><a href="about.html">{{ $t("Navbar.about") }}</a></li>
          <li><a href="contact.html">{{ $t("Navbar.contact") }}</a></li>

        </ul>
        <button class="btn ms-0" @click="changeLanguage">
          <img v-if="checkLang" src="../assets/svg/km.svg" width="25" />
          <img v-else src="../assets/svg/en.svg" width="25" />
        </button>
        <!-- Mobile Menu Button -->
        

        <!-- Language Button -->
        

        <button class="burger d-lg-none" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Sidebar (Mobile Menu) -->
        <div class="sidebar" :class="{ open: isMenuOpen }">
          <button class="close-btn" @click="toggleMenu">✕</button>
          <ul class="mobile-menu">
            <li @click="toggleMenu"><a href="/">{{ $t("Navbar.home") }}</a></li>
            <li @click="toggleMenu"><a href="/project">{{ $t("Navbar.project") }}</a></li>
            <li @click="toggleMenu"><a href="/services">{{ $t("Navbar.service") }}</a></li>
            <li @click="toggleMenu"><a href="about.html">{{ $t("Navbar.about") }}</a></li>
            <li @click="toggleMenu"><a href="contact.html">{{ $t("Navbar.contact") }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useFont } from "@/utils/usefont";
const { locale } = useI18n();
const fontFamily = useFont();
const checkLang = computed(() => locale.value === "en");
const isMenuOpen = ref(false);

function changeLanguage() {
  locale.value = checkLang.value ? "kh" : "en";
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
/* Navbar Styles */
.site-nav {
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.site-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Desktop Menu */
.site-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.site-menu li {
  margin: 0 15px;
}
.site-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.burger {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}
.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: 0.3s;
}

/* Sidebar (Mobile Menu) */
.sidebar {
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.sidebar.open {
  right: 0;
}
.close-btn {
  align-self: flex-end;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
}
.mobile-menu {
  list-style: none;
  padding: 0;
  width: 100%;
}
.mobile-menu li {
  padding: 10px 0;
  width: 100%;
}
.mobile-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  width: 100%;
  display: block;
}
</style>
