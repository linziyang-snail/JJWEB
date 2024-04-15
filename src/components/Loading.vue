<template>
  <div class="loading-overlay" v-if="isLoading">
    <div class="loading-content">
      <img src="../assets/JIEJIANG_Logo.png" alt="Brand Logo" class="logo">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isLoading: Boolean,
  progress: Number
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
  background-color: black;
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
  height: 20px;
}
</style>
