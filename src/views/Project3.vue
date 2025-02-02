<template>
  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close">
        <span class="icofont-close js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>
  <navbar />
  <div
    class="hero-2 overlay"
    style="background-image: url('/src/assets/images/img_2.jpg')"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mx-auto">
          <h1 class="mb-5 text-center">
            <span>{{ $t("Project.project3") }}</span>
          </h1>

          <div class="intro-desc text-left">
            <div class="line"></div>
            <p>
              {{ $t("title") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section sec-3">
    <div class="container">
      <div class="row mb-5 justify-content-between">
        <div class="col-lg-6 mb-lg-0 mb-4">
          <img
            style="height: 500px"
            src="/src/assets/images/Project/3-2.png"
            alt="Image"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-5">
          <div class="heading">{{ $t("Project.dec") }}</div>
          <div
            :style="{
              fontFamily: fontFamily,
              letterSpacing: ' 0.07em',
              lineHeight: '2',
            }"
          >
            <p>
              {{ $t("Project.decription3_1") }}
            </p>
            <p>
              {{ $t("Project.decription3_2") }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3 border-left">
          <span class="text-black-50 d-block">Work year:</span> 2020
        </div>
        <div class="col-sm-3 border-left">
          <span class="text-black-50 d-block">Client:</span> XYZ Inc.
        </div>
        <div class="col-sm-3 border-left">
          <span class="text-black-50 d-block">Started:</span> 25 Jan 2020
        </div>
        <div class="col-sm-3 border-left">
          <span class="text-black-50 d-block">Finished:</span> 02 Dec 2020
        </div>
      </div>
    </div>
  </div>

  <allproject />
  <founder />
  <Footer />
</template>
<script setup>
import navbar from "@/components/navbar.vue";
import allproject from "@/components/allproject.vue";
import founder from "@/components/founder.vue";
import Footer from "@/components/footer.vue";
import { useFont } from "@/utils/usefont";
const fontFamily = useFont();
</script>
