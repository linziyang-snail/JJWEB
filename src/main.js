import { createApp } from 'vue'
import { Icon } from '@iconify/vue';
import { BootstrapVue3 } from 'bootstrap-vue-3'

import router from './router'
import App from './App.vue'
import vProgressiveImage from 'v-progressive-image';

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


createApp(App)
.use(vProgressiveImage, {
    removePreview: false, // 大图加载完成后是否删除较小的预览图(删除会进行DOM操作) 默认false
    animation: true, // 是否启用过渡动画 默认true
    scale: 1.2, // 过渡动画放大倍数 必须>=1 默认为1.2 (仅在animation不为false时生效，1.0.0及之后的版本支持)
    time: 0.5, // 过渡动画时间(单位:秒) 默认0.5 (仅在animation不为false时生效，1.1.0及之后的版本支持)
    blur: 20 // 模糊像素(单位:px) 默认20 (仅在animation不为false时生效，1.1.0及之后的版本支持)
})
.use(router)
.use(BootstrapVue3)
.component('IconifyIcon', Icon)
.mount('#app')
