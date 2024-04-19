<template>
    <section 
        id="hero" 
        :style="{ 
            backgroundImage: 'url(' + bannerImage + ')',
        }"
    >
        <div class="container padding-large">
            <div class="row">
                <div class="col-md-6 offset-md-3 text-center">
                    <p class="header-top text-white mb-4">𝐀𝐋𝐖𝐀𝐘𝐒 𝐆𝐎𝐓 𝐘𝐎𝐔𝐑 𝐁𝐀𝐂𝐊</p>
                    <h2 class="display-1 text-white mb-5">
                            JieJiang <br>
                         Auto Detailing</h2>
                    <button type="button" class="btn btn-outline-primary align-items-center ">
                            查看更多
                        <iconify-icon icon="tabler:arrow-right" class="arrow-icon"></iconify-icon>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
––
<script setup>
// import bannerImage from '../../assets/home1.webp';
import bannerImage from '../../assets/home1.jpg';

</script>

<link rel="preload" href="../../assets/home1.jpg" as="image"></link>

<style>
#hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    position: relative;
    background-size: cover;
    background-position: center center;
}

#hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); 
}

.container {
    position: relative;
    z-index: 1;
    text-align: center; 
}


.col-md-6.offset-md-3 {
    margin: 0;
    flex: 0 0 100%;
    max-width: 100%;
}

</style>
