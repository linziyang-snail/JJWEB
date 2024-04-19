<template>
    <section 
        id="product-hero" 
        :style="{ backgroundImage: 'url(' + aboutImage + ')', minHeight: '70vh' }"
        class="hero-section d-flex align-items-center text-white text-center"
    >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="hero-heading display-3 mb-4 text-white">NEW IN FOR 2024</h1>
                    <p class="text-shadow mb-5">Check Out What's Just Dropped</p>
                    <a class="btn btn-lg btn-towa-blue" href="#">OUT NOW</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import aboutImage from '../../assets/about3.jpg';
</script>

<style scoped>
.hero-section {
    background-size: cover; /* 確保背景圖片覆蓋整個區塊 */
    background-position: center; /* 背景圖片置中 */
    text-align: center; /* 文本置中 */
    padding: 6rem 1rem; /* 更大的上下邊距 */
}

.text-shadow {
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7); /* 文本陰影效果 */
}

.hero-heading {
    font-size: 4rem; /* 大號標題字體 */
    letter-spacing: -2px; /* 字母間距 */
    font-weight: bold; /* 字體加粗 */
}


</style>
