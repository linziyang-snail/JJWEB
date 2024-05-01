<template>
  <div> 
    <div data-aos="fade-up">
      <Hero />
    </div>
    <div data-aos="fade-up" data-aos-delay="100">
      <About />
    </div>
    <div data-aos="fade-up" data-aos-delay="200">
      <Process />
    </div>
    <div data-aos="fade-up" data-aos-delay="300">
      <Project />
    </div>
    <div data-aos="fade-up" data-aos-delay="400">
      <Price />
    </div>
    <div data-aos="fade-up" data-aos-delay="500">
      <PriceTableCarousel />
    </div>
    <!-- <div data-aos="fade-up" data-aos-delay="600">
      <GoogleMap />
    </div> -->
  </div>
</template>

<script setup>
import Hero from '../components/HomeComponents/Hero.vue';
import About from '../components/HomeComponents/About.vue';
import Process from '../components/Process.vue';
import Project from '../components/HomeComponents/Project.vue';
import Price from '../components/Price.vue';
import PriceTableCarousel from '../components/PriceTableCarousel.vue';
import GoogleMap from '../components/GoogleMap.vue';
</script>
