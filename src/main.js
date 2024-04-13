import { createApp } from 'vue'
import { Icon } from '@iconify/vue';
import { BootstrapVue3 } from 'bootstrap-vue-3'

import router from './router'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'vue3-carousel/dist/carousel.css'

import 'iconify-icon';
import './style.css'

import '../src/js/script.js'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also import AOS styles here

AOS.init();


createApp(App).use(router).use(BootstrapVue3).component('IconifyIcon', Icon).mount('#app')
