<template>
  <section id="hero" :style="{ backgroundImage: 'url(' + bannerImage + ')' }">
    <div class="container py-5">
      <div class="row py-5">
        <div
          class="d-flex flex-wrap flex-column justify-content-center align-items-center my-5 py-5 text-white"
        >
          <h2 class="page-title display-3 mt-5 text-white">{{ title }}</h2>
          <nav class="breadcrumb">
            <router-link
              class="breadcrumb-item text-white"
              v-for="(item, index) in breadcrumbItems"
              :key="index"
              :to="item.path"
              >{{ item.text }}</router-link
            >
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import aboutBannerImage from "../assets/about2.jpg";
import servicesBannerImage from "../assets/DSC_9668.jpg";
import projectBannerImage from "../assets/about3.jpg";
import contactBannerImage from "../assets/about4.jpg";

const route = useRoute();

const title = computed(() => {
  switch (route.path) {
    case "/about":
      return "關於捷匠";
    case "/services":
      return "服務項目";
    case "/project":
      return "施工實照";
    case "/contact":
      return "聯繫我們";
    default:
      return "404";
  }
});

const bannerImage = computed(() => {
  switch (route.path) {
    case "/about":
      return aboutBannerImage;
    case "/services":
      return servicesBannerImage;
    case "/project":
      return projectBannerImage;
    case "/contact":
      return contactBannerImage;
    default:
      return "";
  }
});

const breadcrumbItems = computed(() => {
  switch (route.path) {
    case "/about":
      return [
        { text: "首頁", path: "/" },
        { text: "關於捷匠", path: "/about" },
      ];
    case "/services":
      return [
        { text: "首頁", path: "/" },
        { text: "服務項目", path: "/services" },
      ];
    case "/project":
      return [
        { text: "首頁", path: "/" },
        { text: "施工實照", path: "/project" },
      ];
    case "/contact":
      return [
        { text: "首頁", path: "/" },
        { text: "聯繫我們", path: "/contact" },
      ];
    default:
      return [];
  }
});
</script>


<style scoped>
#hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    position: relative;
    background-size: cover;
    background-position: center center;
}

#hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); 
}

.container {
    position: relative;
    z-index: 1;
    text-align: center; 
}


.col-md-6.offset-md-3 {
    margin: 0;
    flex: 0 0 100%;
    max-width: 100%;
}


</style>