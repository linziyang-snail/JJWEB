<template>
  <div
    id="reviewCarousel"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="5000"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(chunk, i) in reviewChunks"
        :class="{ active: i === 0 }"
        :key="i"
      >
        <div class="container">
          <div class="row">
            <div
              class="col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch"
              v-for="review in chunk"
              :key="review.id"
            >
              <div class="review-card card text-center">
                <div class="card-body">
                  <div class="review-stars mb-2">
                    <i
                      class="bi bi-star-fill"
                      v-for="star in review.stars"
                      :key="star"
                    ></i>
                    <i
                      class="bi bi-star"
                      v-for="star in 5 - review.stars"
                      :key="5 + star"
                    ></i>
                  </div>
                  <h5 class="card-title">{{ review.author }}</h5>
                  <p class="card-text">{{ review.content }}</p>
                  <footer class="blockquote-footer">{{ review.date }}</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#reviewCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#reviewCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import { computed, ref, onMounted } from "vue";

const reviews = ref([
  {
    id: 1,
    author: "John Doe",
    content: "非常棒的服務！",
    date: "2023-03-15",
    stars: 5,
  },
  {
    id: 2,
    author: "Jane Smith",
    content: "我很喜歡這裡的汽車美容服務。",
    date: "2023-03-16",
    stars: 3,
  },
  {
    id: 3,
    author: "Steve Brown",
    content: "工作人員友好，服務一流。",
    date: "2023-03-17",
    stars: 4,
  },
  {
    id: 4,
    author: "Steve Brown",
    content: "工作人員友好，服務一流。",
    date: "2023-03-17",
    stars: 2,
  },
  {
    id: 5,
    author: "Steve Brown",
    content: "工作人員友好，服務一流。",
    date: "2023-03-17",
    stars: 1,
  },
  {
    id: 6,
    author: "Steve Brown",
    content: "工作人員友好，服務一流。",
    date: "2023-03-17",
    stars: 3,
  },
  {
    id: 7,
    author: "Steve Brown",
    content: "工作人員友好，服務一流。",
    date: "2023-03-17",
    stars: 2,
  },
  {
    id: 8,
    author: "Steve Brown",
    content: "工作人員友好，服務一流。",
    date: "2023-03-17",
    stars: 4,
  },
]);

const reviewChunks = computed(() => {
  const perChunk = window.innerWidth > 768 ? 4 : 1; // 根据屏幕宽度选择每块的评论数
  return reviews.value.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
});
</script>

<style>
.review-card {
  margin: 20px 0;
  background-color: #f8f9fa; /* 轻灰色背景 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加一点阴影 */
  width: 100%;
}

.review-stars .bi-star-fill {
  color: #ffc107; /* 实心星星颜色 */
}

.review-stars .bi-star {
  color: #e4e5e9; /* 空心星星颜色 */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #000; /* 让箭头更明显 */
}

/* 确保在手机版上一次只显示一条评论 */
.carousel-item {
  display: flex;
  justify-content: center;
  width: 100%; /* 在手机版上，设置为全屏宽度 */
}



@media (max-width: 768px) {
  .carousel-inner {
    display: block; /* 在手机版上，改为块级元素 */
  }
  .carousel-item {
    width: 100%; /* 在手机版上，设置为全屏宽度 */
  }
  .review-card {
    margin: 0 auto 20px; /* 在手机版上，水平居中显示 */
  }
}
</style>
