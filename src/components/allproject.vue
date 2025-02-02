<template>
  <div class="section sec-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-6">
          <h2 class="heading">
            {{ $t("Project.allproject") }}
          </h2>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a @click="Project(1)">
              <img
                style="width: 100%; height: 350px"
                src="/src/assets/images/Project/1-1.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>{{ $t("Project.project1") }}</h3>
                <div class="cat">Work Shop Apartment Project</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a @click="Project(2)">
              <img
                style="width: 100%; height: 350px"
                src="/src/assets/images/Project/2-1.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>{{ $t("Project.project2") }}</h3>
                <div class="cat">WorkShop Residental House</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a @click="Project(3)">
              <img
                style="width: 100%; height: 350px"
                src="/src/assets/images/Project/3-1.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>{{ $t("Project.project3") }}</h3>
                <div class="cat">Khmer Colonial House</div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a @click="Project(4)">
              <img
                style="width: 100%; height: 350px"
                src="/src/assets/images/Project/4-2.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>{{ $t("Project.project4") }}</h3>
                <div class="cat">Community Library And Youth Center</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a @click="Project(5)">
              <img
                style="width: 100%; height: 350px"
                src="/src/assets/images/Project/5-1.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>{{ $t("Project.project5") }}</h3>
                <div class="cat">Pavilion Romdoul Pavilion</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div class="single-portfolio">
            <a @click="Project(6)">
              <img
                style="width: 100%; height: 350px"
                src="/src/assets/images/Project/6-1.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="contents">
                <h3>{{ $t("Project.project6") }}</h3>
                <div class="cat">Classic Villa Koh Pich</div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-md-12 text-center mt-5">
          <p
            :style="{
              fontFamily: fontFamily,
              letterSpacing: ' 0.07em',
              lineHeight: '1.5',
            }"
          >
            <a href="/project" class="btn btn-primary me-4">{{
              $t("Project.seeallprojects")
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";
import { useFont } from "@/utils/usefont";
function Project(param) {
  console.log("test function called");
  router.push({ name: "project" + param }).then(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
const fontFamily = useFont();
</script>
