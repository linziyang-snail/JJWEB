<template>
    <div 
        id="carouselExampleAutoplaying" 
        class="carousel slide mb-5 border-bottom" 
        data-bs-ride="carousel" 
        data-bs-interval="5000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="table-wrapper">
                <PriceCarWashTable />
            </div>
          
        </div>
        <div class="carousel-item">
            <div class="table-wrapper">
            <PriceCoatingTable />
            </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <iconify-icon 
            class="prev-icon" 
            aria-hidden="true"  
            icon="ooui:previous-ltr"  
            style="color: black"
        ></iconify-icon>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <iconify-icon 
            class="next-icon" 
            aria-hidden="true"  
            icon="ooui:previous-rtl"  
            style="color: black"
        ></iconify-icon>
        <span class="visually-hidden">Next</span>
      </button>

    </div>
  </template>
  
  <script setup>
  import PriceCarWashTable from './PriceCarWashTable.vue';
  import PriceCoatingTable from './PriceCoatingTable.vue';
  </script>
  
  <style scoped>
  .carousel{
    overflow-x: hidden;
    max-width: 100%;
  }

  .carousel-control-prev {
    left: -4rem;
  }
  
  .carousel-control-next {
    right: -4rem;
  }

  .table-wrapper {
    min-height: 42rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: 991px) {
    .carousel-control-prev,
    .carousel-control-next {
      top: 50%;
      transform: translateY(-50%);
    }
    
    .carousel-control-prev {
      left: 10px;
    }
    
    .carousel-control-next {
      right: 10px;
    }

    .prev-icon,
    .next-icon {
        display: none;
    }
  }
  </style>
  
  