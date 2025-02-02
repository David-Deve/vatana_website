<template>
  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close">
        <span class="icofont-close js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>
  <Navbar />
  <div
    class="hero-2 overlay"
    style="background-image: url('img_2.jpg')"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mx-auto">
          <h1 class="mb-5">
            <span>{{ $t("HomePage.welove") }}</span>
            <span class="d-block">{{ $t("HomePage.architecture") }}</span>
            <span class="d-block">{{ $t("HomePage.interior_design") }}</span>
          </h1>

          <div class="intro-desc">
            <div class="line"></div>
            <p
              :style="({ fontFamily: fontFamily }, { letterSpacing: '0.05em' })"
            >
              {{ $t("title") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section sec-1">
    <div class="container">
      <div class="row g-0">
        <div class="col-lg-3">
          <h2 class="heading">{{ $t("HomePage.whyweneedarc") }}</h2>
          <p
            :style="{
              fontFamily: fontFamily,
              letterSpacing: ' 0.07em',
              lineHeight: '1.5',
            }"
          >
            {{ $t("HomePage.answer") }}
          </p>
        </div>
        <div class="col-lg-7 ms-auto">
          <img
            src="/src/assets/images/img_8.jpg"
            alt="Image"
            class="img-fluid img-r"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="section sec-2">
    <div class="container">
      <div class="row g-0">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/src/assets/images/img_2.jpg"
            alt="IMage"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-3 ms-auto">
          <h2 class="heading">{{ $t("HomePage.modernarc") }}</h2>
          <p
            :style="{
              fontFamily: fontFamily,
              letterSpacing: ' 0.07em',
              lineHeight: '1.5',
            }"
          >
            {{ $t("HomePage.para") }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <allproject />
  <founder />
  <Footer />
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import founder from "@/components/founder.vue";
import allproject from "@/components/allproject.vue";
import { useFont } from "@/utils/usefont";
const fontFamily = useFont();
</script>
