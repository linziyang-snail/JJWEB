<template>
  <section id="project" class="carousel-section bg-black text-white py-5 ">
    <!-- <div class="text-center py-2">
      <div>
        <p class="header-top mb-3">jiejiang</p>
        <h2 class="text-white display-4">施工實照</h2>
      </div>
    </div> -->

    <div class="container">
      <Carousel 
        :items-to-show="1"
        :wrap-around="true"
        v-model="currentSlide"
        :autoplay="3000"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :loop="true"
      >
        <Slide v-for="item in carouselItems" :key="item.id">
          <div class="slide-item">
            <img class="d-block w-100" :src="item.imgSrc" :alt="item.description">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-white">{{ item.description }}</h5>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>



<script setup>
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import project1 from '../../assets/banner1-img.jpg';
import project2 from '../../assets/banner2-img.jpg';
import project3 from '../../assets/banner3-img.jpg';

const carouselItems = ref([
  { id: 1, imgSrc: project1, description: '描述1' },
  { id: 2, imgSrc: project2, description: '描述2' },
  { id: 3, imgSrc: project3, description: '描述3' },
]);

const currentSlide = ref(0);
</script>

<style scoped>
.carousel-section {
  background-image: url('../../assets/Logo-2.png'); /* 確保這是正確的路徑 */
  background-repeat: repeat; /* 讓logo重複 */
  background-size: 200px 300px; /* 背景大小 */
  /* background-blend-mode: multiply; */
}

.slide-item {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .carousel-section {
    background-size: 100px 133px; /* 縮小背景圖案尺寸以適應小屏幕 */
  }
}

@media (max-width: 480px) {
  .carousel-section {
    background-size: 70px 93px; /* 對於非常小的屏幕進一步縮小 */
  }
}
</style>
