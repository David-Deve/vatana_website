<template>
  <div class="sec-4 section bg-light">
    <div class="text-center mb-5">
      <h2 class="heading mb-5 text-center">{{ $t("Founder.founder") }}</h2>
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
        <h2>{{ $t("Founder.name") }}</h2>
        <h4>{{ $t("Founder.position") }}</h4>
      </div>
      <!-- <div class="card-footer">
        <button class="contact-btn">
          <i class="bx bxl-telegram"> Telegram</i>
        </button>
      </div> -->
      <div class="col text-center">
        <p
          :style="{
            fontFamily: fontFamily,
            letterSpacing: ' 0.07em',
            lineHeight: '1.5',
          }"
        >
          <a href="#" class="btn btn-primary"
            >{{ $t("Founder.contact") }}<br /><i class="bx bxl-telegram"></i
          ></a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useFont } from "@/utils/usefont";
const fontFamily = useFont();
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
