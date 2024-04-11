<template>
    <section id="process" class="my-5">
        <div style="overflow: hidden;">
            <div class="container mt-5 pt-5" data-aos="zoom-out">
                <p class="header-top">捷匠是最值得您信賴的夥伴</p>
                <h2 class="display-4 mb-5 ">Our Washing Services</h2>
                <div class="row">
                    <div class="col-md-6 col-lg-4 my-3" v-for="service in services" :key="service.id">
                        <div class="services-content text-center border py-3 py-md-5 px-3">
                            <iconify-icon :icon="service.icon" class="service-icon"></iconify-icon>
                            <h4 class="my-3">{{ service.title }}</h4>
                            <p>{{ service.description }}</p>
                            <a :href="service.link" class="icon-link my-3">查看更多<iconify-icon icon="tabler:arrow-right" class="arrow-icon"></iconify-icon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: 'fa-solid:hands-wash',
        title: '精緻洗車',
        description: '獲取宏大的發酵桿菌培養基，鑽石大小的隔膜門樓宇中的毛里求斯區及其他地方。',
        link: 'services-single.html',
    },
    {
        id: 2,
        icon: 'material-symbols:cleaning-bucket-outline-rounded',
        title: '引擎清洗',
        description: '前所未有的喜悅，毛里求斯的一個守門員進入了培養基。以及大量的非歐盟國家。',
        link: 'services-single.html',
    },
    {
        id: 3,
        icon: 'fa6-solid:car-on',
        title: '鍍膜',
        description: '在鎖骨中的鎖骨處於扭曲狀態，像雨後春筍般地無處不在，而毛里求斯則是我們所看到的。',
        link: 'services-single.html',
    },
    {
        id: 4,
        icon: 'bxs:car-wash',
        title: '內裝全車拆洗',
        description: '毛里求斯的一個守門員進入了培養基。以及大量的非歐盟國家與直立的蘭花同居。',
        link: 'services-single.html',
    },
    {
        id: 5,
        icon: 'mdi:tire',
        title: '底盤清洗',
        description: '在鎖骨中的鎖骨處於扭曲狀態，像雨後春筍般地無處不在，而毛里求斯則是我們所看到的。',
        link: 'services-single.html',
    },
    {
        id: 6,
        icon: 'simple-icons:coronaengine',
        title: '包膜',
        description: '毛里求斯的一個守門員進入了培養基。以及大量的非歐盟國家與直立的蘭花同居。',
        link: 'services-single.html',
    },
]);


</script>