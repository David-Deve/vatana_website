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
    style="background-image: url('img_3.jpg')"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mx-auto">
          <h1 class="mb-5 text-center">
            <span>{{ $t("Project.ourproject") }}</span>
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
  <allproject />
  <!-- <div class="section sec-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-6 ms-auto">
          <p>
            Delectus voluptatum distinctio quos eius excepturi sunt pariatur,
            aut, doloribus officia ea molestias beatae laudantium, quam odio
            ipsum veritatis est maiores velit quasi blanditiis et natus
            accusamus itaque.
          </p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a href="project-single.html">
              <img
                src="/src/assets/images/img_2.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>Project One</h3>
                <div class="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a href="project-single.html">
              <img
                src="/src/assets/images/img_2.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>Project Two</h3>
                <div class="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a href="project-single.html">
              <img
                src="/src/assets/images/img_2.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>Project One</h3>
                <div class="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a href="project-single.html">
              <img
                src="/src/assets/images/img_2.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>Project One</h3>
                <div class="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a href="project-single.html">
              <img
                src="/src/assets/images/img_2.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>Project Two</h3>
                <div class="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a href="project-single.html">
              <img
                src="/src/assets/images/img_2.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>Project One</h3>
                <div class="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="section">
    <div class="container">
      <div class="row border-bottom mb-5 pb-5 justify-content-between">
        <div class="col-lg-4 align-self-center mb-5">
          <span class="d-block subheading mb-3">{{
            $t("Project.commit")
          }}</span>
          <h2 class="heading mb-4" style="line-height: 1.8">
            {{ $t("Project.quote") }}
          </h2>
          <p
            :style="{
              fontFamily: fontFamily,
              letterSpacing: ' 0.07em',
              lineHeight: '1.5',
            }"
          >
            {{ $t("Project.para") }}
          </p>
        </div>
        <div class="col-lg-7">
          <a href="" class="video-wrap glightbox">
            <img
              src="/src/assets/images/img_2.jpg"
              alt="Image"
              class="img-fluid"
            />
          </a>
        </div>
      </div>
      <!-- <div class="row g-5">
        <div class="col-lg-4">
          <div class="d-flex custom-card">
            <div class="img">
              <i class="flaticon-compass"></i>
            </div>
            <div class="text">
              <h3 class="h6 fw-bold text-black">We provide best services</h3>
              <p class="text-black-50">
                Delectus voluptatum distinctio quos eius excepturi sunt
                pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <p>
                <a href="#" class="more-2"
                  >Learn more <span class="icon-arrow_forward"></span
                ></a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex custom-card">
            <div class="img">
              <i class="flaticon-plan"></i>
            </div>
            <div class="text">
              <h3 class="h6 fw-bold text-black">We provide best services</h3>
              <p class="text-black-50">
                Delectus voluptatum distinctio quos eius excepturi sunt
                pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <p>
                <a href="#" class="more-2"
                  >Learn more <span class="icon-arrow_forward"></span
                ></a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex custom-card">
            <div class="img">
              <i class="flaticon-architect"></i>
            </div>
            <div class="text">
              <h3 class="h6 fw-bold text-black">We provide best services</h3>
              <p class="text-black-50">
                Delectus voluptatum distinctio quos eius excepturi sunt
                pariatur, aut, doloribus officia ea molestias beatae laudantium.
              </p>
              <p>
                <a href="#" class="more-2"
                  >Learn more <span class="icon-arrow_forward"></span
                ></a>
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <founder />
  <Footer />
</template>
<script setup>
import navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import founder from "@/components/founder.vue";
import allproject from "@/components/allproject.vue";
import { useFont } from "@/utils/usefont";
const fontFamily = useFont();
</script>
