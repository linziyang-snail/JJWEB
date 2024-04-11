<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg container-fluid p-4">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            src="../assets/JIEJIANG_Logo.png"
            alt="logo"
            style="height: 3.5rem"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <iconify-icon
            icon="system-uicons:menu-hamburger"
            class="hamburger-menu text-white"
          ></iconify-icon>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div class="offcanvas-body">
            <ul
              class="navbar-nav align-items-center justify-content-end justify-content-xxl-center flex-grow-1 pe-3"
            >
              <li class="nav-item" v-for="link in navLinks" :key="link.name">
                <router-link
                  class="nav-link text-white text-uppercase mx-2 px-3 mb-2 mb-lg-0"
                  :to="link.path"
                  active-class="active" 
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>

            <div
              class="d-flex mt-5 mt-lg-0 ps-lg-5 align-items-center justify-content-end"
            >
              <ul
                class="navbar-nav social-div justify-content-end align-items-center"
              >
                <li
                  class="nav-item"
                  v-for="social in socialLinks"
                  :key="social.icon"
                >
                  <a
                    class="nav-link d-flex align-items-center px-3"
                    :href="social.url"
                    target="_blank"
                  >
                    <iconify-icon
                      :icon="social.icon"
                      class="social-icon text-white"
                      style="font-size: 20px;"
                    ></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const navLinks = [
  { name: "首頁", path: "/" },
  { name: "關於捷匠", path: "/about" },
  { name: "施工實照", path: "/project" },
  { name: "服務項目", path: "/services" },
  { name: "聯繫我們", path: "/contact" },
];

const socialLinks = [
  { 
    icon: "ri:facebook-fill",
    url: "https://www.facebook.com/Jiejiang2015" 
  },
  {
    icon: "ri:instagram-line",
    url: "https://www.instagram.com/jiejiang_autodetailing/",
  },
  {
    icon: "ri:youtube-fill",
    url: "https://www.youtube.com/channel/UCLtbyLH6keH75R3UthNE9oA",
  },
  {
    icon: "ri:tiktok-fill",
    url: "https://www.tiktok.com/@jiejiang_tw?is_from_webapp=1&sender_device=pc",
  },
  { 
    icon: "ri:line-fill", 
    url: "https://line.me/R/ti/p/@639xmqad" 
  },
];

</script>
