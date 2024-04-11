<template>
        <section id="footer">
                <div style="overflow: hidden;">
                        <div class="container" data-aos="zoom-out">
                                <div class="d-flex flex-wrap">
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center border-end-md">
                                        <img class="img-fluid" src="../assets/Logo-1.png" alt="logo" style="max-width: 100%; height: auto; width: 18rem;">
                                </div>
                                <div class="col-12 col-md-4 text-center padding-medium border-end-md">
                                        <p class="header-top mb-4">{{ operationHours.title }}</p>
                                        <p class="mb-2" v-for="time in operationHours.times" :key="time">{{ time }}</p>
                                </div>
                                <div class="col-12 col-md-4 text-center padding-medium mb-4 mb-md-0">
                                        <p class="header-top mb-4">{{ contactInfo.title }}</p>
                                        <p class="mb-2">{{ contactInfo.address }}</p>
                                        <div>
                                        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank">
                                                <iconify-icon :icon="social.icon" class="social-icon m-2" style="font-size: 24px"></iconify-icon>
                                        </a>
                                        </div>
                                </div>
                                </div>
                        </div>
                </div>
                <footer class="d-flex flex-wrap justify-content-between align-items-center border-top"></footer>
                <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 pt-4">
                        <div class="col-md-6 d-flex align-items-center">
                        <p>© 2024 JieJiang, Carwash | All Rights Reserved</p>
                        </div>
                        <div class="col-md-6 d-flex align-items-center justify-content-end">
                        <p>© 2024 <a target="_blank" href="http://www.mobanwang.com/" title="Snail" class="website-link text-decoration-none">Snail</a></p>
                        </div>
                </footer>
                </div>
        </section>
</template>
    
<script setup>
        import { ref } from 'vue';

        const operationHours = ref({
        title: '營業時間',
        times: [
                '星期一 公休',
                '週二至週日 11 am - 7 pm'
        ]
        });

        const contactInfo = ref({
        title: '聯絡資訊',
        address: '新北市淡水區學府路113號B1'
        });

        const socialLinks = ref([
        { name: 'Facebook', url: 'https://www.facebook.com/Jiejiang2015', icon: 'ri:facebook-fill' },
        { name: 'Instagram', url: 'https://www.instagram.com/jiejiang_autodetailing/', icon: 'ri:instagram-line' },
        { name: 'YouTube', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA', icon: 'ri:youtube-fill' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc', icon: 'ri:tiktok-fill' },
        { name: 'Line', url: 'https://line.me/R/ti/p/@639xmqad', icon: 'ri:line-fill' }
        ]);
</script>
    