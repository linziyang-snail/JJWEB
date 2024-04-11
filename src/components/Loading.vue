<template>
    <div class="loading-overlay bg-black" v-if="isLoading">
      <div class="loading-content">
        <img src="../assets/JIEJIANG_Logo.png" alt="Brand Logo" class="logo">
        <div class="progress">
          <div 
            class="progress-bar" 
            role="progressbar" 
            :style="{ width: progress + '%' }"
            :aria-valuenow="progress"
            aria-valuemin="0" 
            aria-valuemax="100"
          >
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 20; 
    } else {
      isLoading.value = false;
      clearInterval(interval);
    }
  }, 500);
});



</script>
  
<style>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-content .logo {
    width: 200px;
    margin-bottom: 20px;
}

.progress {
    width: 100%;
}

.progress-bar {
    background-color: #F6452D !important;
}
</style>
  