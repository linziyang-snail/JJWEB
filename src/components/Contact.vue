<template>
    <section class="contact-us-wrap py-5 mt-5" >
      <div class="container">
        <div class="row text-start">
          <div class="contact-info col-md-6 ">
            <h2 class="fs-3 text-uppercase mb-4">聯絡資訊</h2>
            <!-- <p>Contact information</p> -->
            <div class="page-content">
              <div class="col-md-6" v-for="(office, index) in offices" :key="index">
                <div class="content-box my-5">
                  <h5 class="element-title text-uppercase fs-6 fw-bold">{{ office.title }}</h5>
                  <div class="contact-address">
                    <p>{{ office.address }}</p>
                  </div>
                  <div class="contact-number">
                    <a :href="`tel:${number}`" v-for="(number, index) in office.contactNumbers" :key="index">{{ number }}</a>
                  </div>
                  <div class="email-address">
                    <a :href="`mailto:${office.emailAddress}`">{{ office.emailAddress }}</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="content-box my-5">
                  <h5 class="element-title text-uppercase fs-6 fw-bold">關注捷匠</h5>
                  <div class="social-links">
                    <ul class="list-unstyled d-flex gap-3 mt3">
                      <li v-for="(link, index) in socialLinks" :key="index">
                        <a :href="link.url" class="text-secondary me-3 p-0" target="_blank">
                          <iconify-icon :icon="link.icon" class="social-icon"></iconify-icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inquiry-item col-md-6">
            <h2 class="fs-3 text-uppercase mb-4">如有任何服務需求，歡迎與我們聯繫！</h2>
            <p>請使用下面的表單與我們聯繫</p>
            <form id="form" class="form-group flex-wrap">
              <div class="form-input col-lg-12 d-flex mb-3">
                <input type="text" name="name" placeholder="您的姓名" class="form-control ps-3 me-3">
                <input type="text" name="phone" placeholder="您的電話" class="form-control ps-3">
              </div>
              <div class="col-lg-12 mb-3">
                <input type="email" name="email" placeholder="您的信箱" class="form-control ps-3">
              </div>
              <div class="col-lg-12 mb-3">
                <input type="text" name="subject" placeholder="您的需求" class="form-control ps-3">
              </div>
              <div class="col-lg-12 mb-3">
                <textarea name="message" placeholder="留言內容" class="form-control ps-3" rows="8"></textarea>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-lg text-uppercase btn-rounded-none">送出</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const offices = ref([
    {
      title: '捷匠汽車美容-淡水旗艦店',
      address: '新北市淡水區學府路113號B1(巷子口)',
      contactNumbers: ['02-2626-7621'],
      emailAddress: 'dlive0829@gmail.com',
    },
    {
      title: '捷匠汽車美容-DIY車庫',
      address: '新北市淡水區行忠路105號(佑昇高爾夫旁)',
      contactNumbers: ['02-2626-7621'],
      emailAddress: 'dlive0829@gmail.com',
    },
  ]);
  
  const socialLinks = ref([
    { name: 'Facebook', icon: 'ri:facebook-fill', url: 'https://www.facebook.com/Jiejiang2015' },
    { name: 'Instagram', icon: 'ri:instagram-line', url: 'https://www.instagram.com/jiejiang_autodetailing/' },
    { name: 'YouTube', icon: 'ri:youtube-fill', url: 'https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA' },
    { name: 'TikTok', icon: 'ri:tiktok-fill', url: 'https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc' },
    { name: 'Line', icon: 'ri:line-fill', url: 'https://line.me/R/ti/p/@639xmqad' },
  ]);
  </script>
  