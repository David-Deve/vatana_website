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
    style="background-image: url('/src/assets/images/img_2.jpg')"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mx-auto">
          <h1 class="mb-5">
            <span>{{ $t("welove") }}</span>
            <span class="d-block">{{ $t("architecture") }}</span>
            <span class="d-block">{{ $t("interior_design") }}</span>
          </h1>

          <div class="play-vid">
            <a
              href="https://www.youtube.com/watch?v=mwtbEGNABWU"
              class="play glightbox"
            >
              <span class="icon-play"></span>
            </a>
          </div>

          <div class="intro-desc">
            <div class="line"></div>
            <p>
              Delectus voluptatum distinctio quos eius excepturi sunt pariatur,
              aut, doloribus officia ea molestias beatae laudantium, quam odio
              ipsum veritatis est maiores velit quasi blanditiis et natus
              accusamus itaque.
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
          <h2 class="heading">We create architectural designs</h2>
          <p>
            Delectus voluptatum distinctio quos eius excepturi sunt pariatur,
            aut, doloribus officia ea molestias beatae laudantium, quam odio
            ipsum veritatis est maiores velit quasi blanditiis et natus
            accusamus itaque. Veniam quidem debitis odio amet voluptas
            distinctio dicta placeat! Et pariatur doloremque ea veniam.
          </p>

          <p>
            <a href="#" class="more-2"
              >{{ $t("test") }} <span class="icon-arrow_forward"></span
            ></a>
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
          <h2 class="heading">Modern Architecture</h2>
          <p>
            Delectus voluptatum distinctio quos eius excepturi sunt pariatur,
            aut, doloribus officia ea molestias beatae laudantium, quam odio
            ipsum veritatis est maiores velit quasi blanditiis et natus
            accusamus itaque. Veniam quidem debitis odio amet voluptas
            distinctio dicta placeat! Et pariatur doloremque ea veniam.
          </p>
          <p>
            <a href="#" class="more-2"
              >Learn more <span class="icon-arrow_forward"></span
            ></a>
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
</script>
