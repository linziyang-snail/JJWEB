<template>
  <section id="project" class="py-5" :style="{ backgroundImage: 'url(' + bannerImage + ')' }">
    <div class="container position-relative d-sm-flex py-5 mt-5 mb-2">
      <div>
        <p class="header-top mb-3">jiejiang</p>
        <h2 class="text-white display-4">施工實照</h2>
      </div>
    </div>

    <div class="container-fluid">
      <Carousel 
        :wrap-around="true" 
        :autoplay=3000
        :breakpoints="{
          640: { itemsToShow: 1 },
          768: { itemsToShow: 2 },
          1000: { itemsToShow: 3 },
          1500: { itemsToShow: 4 },
          2500: { itemsToShow: 5},
          3000: { itemsToShow: 6},
        }"
      >
        <Slide v-for="item in carouselItems" :key="item.id">
          <div class="item mx-1">
            <!-- <a :href="item.imgSrc" :title="item.title" class="image-link"> -->
              <img class="portfolio-img img-fluid" :src="item.imgSrc" :alt="item.description">
            <!-- </a> -->
            <div class="description position-absolute top-50 start-50 translate-middle text-center p-3">
              <h3 class="text-white">{{ item.description }}</h3>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <div class="text-center pb-5 mb-5">
      <router-link class="btn btn-primary mt-3 " to="/project">
            查看更多
            <iconify-icon
                icon="tabler:arrow-right" class="arrow-icon">
            </iconify-icon>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import bannerImage from '../../assets/about5.jpg';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

const carouselItems = [
  {
    id: 1,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'BMW Car - External Hand Wash',
  },
  {
    id: 2,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'Audi Car - Detailed Vacuum',
  },
  {
    id: 3,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'BMW Car - External Hand Wash',
  },
  {
    id: 4,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'Audi Car - Detailed Vacuum',
  },
  {
    id: 5,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'BMW Car - External Hand Wash',
  },
  {
    id: 6,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'Audi Car - Detailed Vacuum',
  },
  {
    id: 7,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'BMW Car - External Hand Wash',
  },
  {
    id: 8,
    imgSrc: project3,
    title: 'Car Wash',
    description: 'Audi Car - Detailed Vacuum',
  },
];
</script>