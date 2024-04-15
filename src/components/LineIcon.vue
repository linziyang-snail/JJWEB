<template>
    <a
        class="nav-link d-flex align-items-center px-3"
        href="https://line.me/R/ti/p/@639xmqad"
        target="_blank"
    >
        <iconify-icon
            icon="ri:line-fill"
            color="#00c300"
            class="social-icon line-icon"
            style="font-size: 20px;"
        >
        </iconify-icon>
    </a>
  </template>
  
  <style>
  .line-icon {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 70px;
    height: 70px; 
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .nav-link:hover .line-icon {
  transform: scale(1.2);
}
  

  @media (max-width: 768px) {
    .line-icon {
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      font-size: 24px;
    }
  }
  </style>
  
  