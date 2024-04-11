import { createApp } from 'vue'
import { Icon } from '@iconify/vue';
import { BootstrapVue3 } from 'bootstrap-vue-3'

import router from './router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'vue3-carousel/dist/carousel.css'

import 'iconify-icon';
import './style.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also import AOS styles here

AOS.init();


createApp(App).use(router).use(BootstrapVue3).component('IconifyIcon', Icon).mount('#app')
