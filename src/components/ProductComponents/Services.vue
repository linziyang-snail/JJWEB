<template>
    <div class="container text-center py-5" data-aos="zoom-out">
      <div class="row g-4" >
        <div class="col-12 col-md-6 col-lg-3" v-for="feature in features" :key="feature.title" >
          <div class="feature-item" >
            <iconify-icon :icon="feature.icon" class="feature-icon"></iconify-icon>
            <h5 class="mt-2">{{ feature.title }}</h5>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';

  const features = [
    {
      title: 'Free Shipping',
      description: 'Enjoy fast and free shipping*',
      icon: 'mdi-truck-fast-outline', // replace with the actual icon name
    },
    {
      title: 'Hassle-Free Payments',
      description: 'Pay now or spread the cost',
      icon: 'mdi-credit-card-outline', // replace with the actual icon name
    },
    {
      title: '1st Class Support',
      description: 'Expert advise and support',
      icon: 'mdi-account-tie-voice', // replace with the actual icon name
    },
    {
      title: 'Rated Excellent',
      description: '20,000+ 5-star ratings',
      icon: 'mdi-star-circle-outline', // replace with the actual icon name
    },
  ];
  
  defineProps({
    isLoading: Boolean,
    progress: Number,
  });
  </script>
  
  <style scoped>
  .feature-item {
    padding: 1rem;
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .feature-icon {
    font-size: 2rem;
    color: var(--bs-dark);
  }
  </style>
  