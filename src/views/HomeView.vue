<script setup>
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.fromTo(
    "#hero-body h2",
    {
      opacity: 0,
      x: "-10%",
    },
    {
      duration: 1.5,
      opacity: 1,
      x: 0,
      onComplete: () => {
        gsap.fromTo(
          "#hero-body h1",
          {
            opacity: 0,
            x: "-10%",
          },
          {
            duration: 1.5,
            opacity: 1,
            x: 0,
          }
        );
      },
    }
  );
});
</script>

<template>
  <section class="hero">
    <div class="container lines">
      <div id="hero-body" class="hero-body">
        <h2>I am proud of <br />the work I have done.</h2>
        <h1>I'm Lucas <br />Web Developer <br />& Graphic Designer</h1>
        <button>
          <a href="/">Contact Me</a>
          <img src="../assets/Right.svg" alt="right-arrow" />
        </button>
      </div>
    </div>
  </section>

  <section class="services">
    <div class="container lines">
      <div class="services-body">
        <div class="services-content">
          <h2>Services</h2>
          <h1>
            A well-organized person, a problem solver, a freelancer with a high
            sense of detail and does not know the phrase "It's impossible"
          </h1>
          <div class="items">
            <div class="item">
              <h2>Web development</h2>
              <h3>Brand Strategy & Art Direction</h3>
              <p>
                Creating a higher spacing and how people move through a unique
                and impactful campaign.
              </p>
            </div>
          </div>
        </div>
        <div class="services-img">
          <img src="../assets/services.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  -webkit-animation: hue 5s ease-in-out forwards infinite;
  animation: hue 5s ease-in-out forwards infinite;
  background-color: rgb(155, 0, 142);
}
</style>
