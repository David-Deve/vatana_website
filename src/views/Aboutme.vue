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
  <div class="hero-2 overlay" style="background-image: url('img_3.jpg')">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mx-auto">
          <h1 class="mb-5 text-center">
            <span class="">{{ $t("Navbar.about") }}</span>
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
  <founder />
  <Footer />
</template>
<script setup>
import Footer from "@/components/footer.vue";
import founder from "@/components/founder.vue";
import Navbar from "@/components/navbar.vue";
</script>
