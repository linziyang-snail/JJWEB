<template>
    <section id="price" class="my-5">
      <div style="overflow: hidden;">
        <div class="container py-5" data-aos="zoom-out">
          <p class="header-top">Auto Detailing</p>
          <h2 class="display-4 mb-5">JIEJIANG packages</h2>
          <ul class="nav nav-tabs my-3" id="myTab" role="tablist">
            <li class="nav-item" role="presentation" v-for="(pkg, index) in packages" :key="pkg.id">
                <button
                    class="nav-link me-4 px-4 py-1 mb-2"
                    :class="{ active: index === 0 }"
                    :id="`${pkg.id}-tab`"
                    data-bs-toggle="tab"
                    :data-bs-target="`#${pkg.id}`"
                    type="button"
                    role="tab"
                    :aria-controls="pkg.id"
                    :aria-selected="index === 0 ? 'true' : 'false'"
                    >
                    {{ pkg.name }}
                </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div 
                v-for="(pkg, index) in packages" 
                :key="pkg.id" 
                :class="['tab-pane fade', { 'show active': index === 0 }]" 
                :id="pkg.id"
                role="tabpanel" 
                :aria-labelledby="`${pkg.id}-tab`" 
                tabindex="0"
            >
                <div class="row py-4 d-flex">
                    <div class="col-lg-3 pb-4 flex" v-for="(plan, planIndex) in pkg.plans" :key="`${pkg.id}-${planIndex}`">
                    <div class="py-5 plan-post text-center h-100">
                        <p class="header-top">{{ plan.title }}</p>
                        <h2 class="mb-5 display text-wrap">
                            <span v-html="processPrice(plan.price)"></span>
                        </h2>
                        <div class="price-option">
                        <p 
                            v-for="(feature, featureIndex) in plan.features" 
                            :key="`${pkg.id}-${planIndex}-${featureIndex}`"
                        >
                            <span class="price-tick">✓</span> {{ feature }}
                        </p>
                        </div>
                        <a href="https://line.me/R/ti/p/@639xmqad" target="_blank" class="btn btn-primary mt-auto px-4 py-3 mx-2">立即預約<iconify-icon icon="tabler:arrow-right" class="arrow-icon"></iconify-icon></a>
                    </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  </template>


<script setup>
import { ref } from 'vue';

const packages = ref([
  {
    id: 'car-wash',
    name: 'car wash & maintenance',
    plans: [
      {
        title: '精緻洗車',
        price: '$1,000起',
        features: ['車身高壓沖洗', '輪框內外清潔', '輪拱清潔', '門邊門框清潔'],
        bookingLink: 'booking.html'
      },
      {
        title: '基礎漆面維護',
        price: '$1,600起',
        features: ['已包含精緻洗車項目', '車身高壓熱水沖洗', '內裝擦拭吸塵', '內裝細節清洗', '專用柏油清潔', '專用鐵粉清潔'],
        bookingLink: 'booking.html'
      },
      {
        title: '精緻漆面維護',
        price: '$3,100起',
        features: ['已包含基礎漆面維護項目', '內裝物品收納整理', '漆面深度清潔', '全車塑料保養'],
        bookingLink: 'booking.html'
      },
    ]
  },
  {
    id: 'paint-correction',
    name: 'paint correction & coating',
    plans: [
      {
        title: '漆面氧化處理',
        price: '$6,000起',
        features: ['全車高壓熱水沖洗', '車漆深層清潔', '車內擦拭吸塵', '車身塑料件維護'],
        bookingLink: 'booking.html'
      },
      {
        title: '兩年期鍍膜',
        price: '$2,5000起',
        features: ['已包含漆面氧化處理項目', '全車細節刷洗', '引擎室清潔', '漆面亮度調整', '漆面整平','車內細部清潔','保固24個月'],
        bookingLink: 'booking.html'
      },
      {
        title: '滲透型鍍膜60%自體修復',
        price: '$35,000起',
        features: ['已包含兩年期鍍膜項目', '漆面深度整平修復', '60%自體修復塗層', '保固36個月'],
        bookingLink: 'booking.html'
      },
      {
        title: '雙劑型漆面高光鍍膜',
        price: '$35,000起',
        features: ['已包含兩年期鍍膜項目', '漆面深度整平修復', '雙層鍍膜劑塗層', '保固36個月'],
        bookingLink: 'booking.html'
      },
    ]
  },
  {
    id: 'interior-care',
    name: 'interior care & other',
    plans: [
    {
        title: '內裝美容',
        price: '$4,500起',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '內裝全車拆洗',
        price: '$20,000起',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '前檔玻璃鍍膜',
        price: '$1,200',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '全車玻璃鍍膜',
        price: '$3,500',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '鋁圈鍍膜（拆卸/不拆）',
        price: '$8,000/$4,000',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '底盤深層清潔',
        price: '$20,000起',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
    ]
  },
  {
    id: 'car-wrap',
    name: 'car wrap',
    plans: [
    {
        title: '全車犀牛皮',
        price: '$100,000/150,000起',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '迎風面犀牛皮',
        price: '$45,000/70,000起',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '全車改色膜',
        price: '$70,000起',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
      {
        title: '局部犀牛皮',
        price: '現場報價',
        features: ['Quisque rhoncus', 'Lorem ipsum dolor', 'Vivamus velit mir', 'Velit mir', 'Elit mir ivamus'],
        bookingLink: 'booking.html'
      },
    ]
  },
]);


const processPrice = (price) => {
  return price.replace(/(起)/g, '<span class="h6">$1</span>');
};

</script>

<style>

</style>
