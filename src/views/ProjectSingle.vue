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
          <h1 class="mb-5 text-center"><span>Project One</span></h1>

          <div class="intro-desc text-left">
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

  <div class="section sec-3">
    <div class="container">
      <div class="row mb-5 justify-content-between">
        <div class="col-lg-6 mb-lg-0 mb-4">
          <img
            src="/src/assets/images/img_2.jpg"
            alt="Image"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-5">
          <div class="heading">Description</div>
          <p>
            Delectus voluptatum distinctio quos eius excepturi sunt pariatur,
            aut, doloribus officia ea molestias beatae laudantium, quam odio
            ipsum veritatis est maiores velit quasi blanditiis et natus
            accusamus itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            placeat, unde sequi quas ipsum illo? Commodi accusantium, sit
            eveniet? Maiores tempora corporis ea nostrum magnam similique optio
            autem, dolor incidunt?
          </p>
          <p>
            Recusandae quam dicta repellat consequatur, facilis magnam minus
            unde, asperiores voluptatibus temporibus obcaecati, nihil libero.
            Maxime consectetur asperiores excepturi quidem deleniti, autem
            incidunt? Error nisi, eius fugiat expedita quia cupiditate!
          </p>
          <p><a href="#" class="btn btn-primary">Visit Website</a></p>
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
</script>
