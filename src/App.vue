<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else>
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
import Loading from './components/Loading.vue'; // 引入Loading組件

const isLoading = ref(true); // 初始化時設置isLoading為true

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // 3到5秒後將isLoading設置為false
  }, 3000); // 這裡設置為3000毫秒，即3秒
});
</script>
