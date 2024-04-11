<template>
    <section id="gallery">
        <div class="container my-5 py-5">
            <p class="header-top text-center mb-3">捷匠專業汽車美容</p>
            <h2 class="display-4 text-center">施工實照</h2>
            <div class="py-4 my-4">

                <div class="mb-4 text-center">
                        <button class="filter-button px-4 py-1 me-2 mb-2" 
                                :class="{'active': currentFilter === '*'}" 
                                @click="setFilter('*')">全部</button>
                        <button v-for="filter in filters" :key="filter.value" 
                                class="filter-button px-4 py-1 me-2 mb-2" 
                                :class="{'active': currentFilter === filter.value}" 
                                @click="setFilter(filter.value)">
                            {{ filter.name }}
                        </button>
                </div>

                <div class="row">
                    <div v-for="item in filteredItems" :key="item.id" 
                         class="item position-relative overflow-hidden col-lg-4 col-md-6 col-12" :class="item.class">
                        <a :href="item.href" :title="item.title" class="image-link">
                            <img class="portfolio-img img-fluid p-3" :src="item.src" :alt="item.alt">
                            <div class="description position-absolute top-50 start-50 translate-middle text-center p-3">
                                <p class="text-white">{{ item.description }}</p>
                                <h3 class="text-white">{{ item.title }}</h3>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

import project1Image from "../assets/project1.jpg";
import blog1Image from "../assets/blog1.jpg";
import blog4Image from "../assets/blog4.jpg";
import blog5Image from "../assets/blog5.jpg";
import blog2Image from "../assets/blog2.jpg";
import blog3Image from "../assets/blog3.jpg";
import blog6Image from "../assets/blog6.jpg";
import project3Image from "../assets/project3.jpg";

const currentFilter = ref('*');
const filters = ref([
    { name: '鍍膜', value: '.wash' },
    { name: '包膜', value: '.express' },
    { name: '輪圈清洗', value: '.polish' },
    { name: '內裝清洗', value: '.tire' },
    { name: '引擎清洗', value: '.engine' }
]);

const items = ref([
    {
        id: 1,
        class: 'polish',
        href: project1Image,
        src: project1Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 2,
        class: 'engine',
        href: blog1Image,
        src: blog1Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 3,
        class: 'express',
        href: blog4Image,
        src: blog4Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 4,
        class: 'polish',
        href: blog5Image,
        src: blog5Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 5,
        class: 'tire',
        href: blog2Image,
        src: blog2Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 6,
        class: 'wash',
        href: blog3Image,
        src: blog3Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 7,
        class: 'express',
        href: blog1Image,
        src: blog1Image,
        alt: 'BMW Car External Hand Wash Again',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 8,
        class: 'wash',
        href: blog6Image,
        src: blog6Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 9,
        class: 'tire',
        href: blog3Image,
        src: blog3Image,
        alt: 'BMW Car External Hand Wash Second Time',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
    {
        id: 10,
        class: 'engine',
        href: project3Image,
        src: project3Image,
        alt: 'BMW Car External Hand Wash',
        description: 'BMW Car',
        title: 'External Hand Wash',
    },
]);

const setFilter = (filter) => {
    currentFilter.value = filter;
};

const filteredItems = computed(() => {
    if (currentFilter.value === '*') {
        return items.value;
    } else {
        return items.value.filter(item => item.class.includes(currentFilter.value.substring(1)));
    }
});
</script>





