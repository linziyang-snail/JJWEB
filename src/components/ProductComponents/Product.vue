<template>
    <section class="py-5 container">
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-xl-3 col-lg-4 col-sm-6">
          <div class="product text-center">
            <div class="position-relative mb-3">
              <div class="badge text-white bg-"></div>
              <a class="d-block" :href="product.link">
                <img class="img-fluid w-100" :src="product.image" :alt="product.name">
              </a>
              <div class="product-overlay">
                <ul class="mb-0 list-inline">
                  <li class="list-inline-item m-0 p-0">
                    <a class="btn btn-sm btn-towa-blue-product" href="#">前往購買</a>
                  </li>
                </ul>
              </div>
            </div>
            <h6><a class="reset-anchor" :href="product.link">{{ product.name }}</a></h6>
            <p class="small text-muted">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Import images
  import product5 from '../../assets/product/product-5.jpg';
  import product6 from '../../assets/product/product-6.jpg';
  import product7 from '../../assets/product/product-7.jpg';
  import product8 from '../../assets/product/product-8.jpg';
  
  const products = ref([
    { id: 1, name: 'Nike air max 95', price: 300, image: product5, link: '#' },
    { id: 2, name: 'Nike air max 95', price: 300, image: product6, link: '#' },
    { id: 3, name: 'Nike air max 95', price: 300, image: product7, link: '#' },
    { id: 4, name: 'Nike air max 95', price: 300, image: product8, link: '#' }
  ]);
  </script>
  

<style scoped>
/*
*
* ==========================================
* PRODUCT
* ==========================================
*
*/
.product img {
  filter: grayscale(40%);
  transition: all 0.3s;
}

.product-overlay {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem 0;
  opacity: 0;
  transition: all 0.3s;
}

.product-overlay ul li {
  transition: all 0.3s;
}

.product-overlay ul li:first-of-type {
  transform: translateX(-10px);
  opacity: 0;
}

.product-overlay ul li:last-of-type {
  transform: translateX(10px);
  opacity: 0;
}

.product:hover img {
  opacity: 0.3;
}

.product:hover .product-overlay {
  opacity: 1;
}

.product:hover .product-overlay li {
  opacity: 1;
  transform: none;
}

.product .badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
}

/*
*
* ==========================================
* PRODUCT MODAL
* ==========================================
*
*/
.product-view {
  min-height: 20rem;
}

.quantity {
  display: flex;
  align-items: center;
}

.quantity input {
  width: 2rem;
  text-align: center;
}

.quantity button {
  background: none;
  border: none;
  width: 1rem;
  outline: none;
}
</style>