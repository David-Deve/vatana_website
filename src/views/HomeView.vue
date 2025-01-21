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

  <div class="section sec-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-6">
          <h2 class="heading">Projects</h2>
        </div>
        <div class="col-lg-4">
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
                src="/src/assets/images/img_8.jpg"
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
                src="/src/assets/images/img_3.jpg"
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
                src="/src/assets/images/img_4.jpg"
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
                src="/src/assets/images/img_5.jpg"
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
                src="/src/assets/images/img_6.jpg"
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

        <div class="col-md-12 text-center mt-5">
          <p><a href="#" class="btn btn-primary me-4">See all projects</a></p>
        </div>
      </div>
    </div>
  </div>

  <div class="sec-4 section bg-light">
    <div class="text-center mb-5">
      <h2 class="heading mb-5 text-center">FOUNDER</h2>
    </div>

    <div class="horizontal-card container">
      <div class="card-header">
        <img
          src="/src//assets/images/img_2.jpg"
          alt="Profile Picture"
          class="profile-img"
        />
      </div>
      <div class="card-body">
        <h2>Gabriella Moreira</h2>
        <h4>Lead Developer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit omnis
          tenetur eveniet soluta numquam deleniti sequi dolore nostrum sit.
        </p>
      </div>
      <div class="card-footer">
        <button class="contact-btn">
          <i class="bx bxl-telegram"> Telegram</i>
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
</script>
<style scoped>
/* General Styles */

/* Card Container */
.horizontal-card.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 100px;
  text-align: center;
}

/* Circular Image */
.card-header {
  position: relative;
  margin-top: -50px; /* Floating effect */
}

.profile-img {
  width: 50%;
  height: 50%;
  border-radius: 5%;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #e9ecef;
}

/* Card Body */
.card-body {
  padding: 20px 0;
}

.card-body h2 {
  font-size: 1.5rem;
  margin: 10px 0 5px;
  color: #333;
}

.card-body h4 {
  font-size: 1rem;
  margin: 5px 0 15px;
  color: #555;
}

.card-body p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

/* Footer with Button */
.card-footer {
  margin-top: 20px;
}

.contact-btn {
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-btn:hover {
  background-color: #0056b3;
}
</style>
