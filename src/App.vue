<template>
  <div>
    <Loading :is-loading="isLoading" :progress="progress" />
    <div v-if="!isLoading">
      <NavBar />
      <router-view />
      <Footer />
      <LineIcon />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import LineIcon from './components/LineIcon.vue';
import Loading from './components/Loading.vue';

import aboutBannerImage from "./assets/about2.jpg";
import servicesBannerImage from "./assets/DSC_9668.jpg";
import projectBannerImage from "./assets/about3.jpg";
import contactBannerImage from "./assets/about4.jpg";

const isLoading = ref(true);
const progress = ref(0);

function preloadImages() {
  const images = [aboutBannerImage, servicesBannerImage, projectBannerImage, contactBannerImage];
  let loaded = 0;

  images.forEach((src) => {
    const img = new Image();
    img.onload = img.onerror = () => {
      loaded++;
      progress.value = Math.floor((loaded / images.length) * 100);
      
      if (loaded === images.length) {
        setTimeout(() => {
          isLoading.value = false;
        }, 1500);
      }
    };
    img.src = src;
  });
}

onMounted(preloadImages);
</script>
