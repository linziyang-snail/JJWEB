const initScrollNav = function() {
  const scroll = window.scrollY || document.documentElement.scrollTop;

  if (scroll >= 200) {
    document.querySelectorAll('.navbar.fixed-top').forEach(navbar => navbar.classList.add('bg-black'));
  } else {
    document.querySelectorAll('.navbar.fixed-top').forEach(navbar => navbar.classList.remove('bg-black'));
  }
};

window.addEventListener('scroll', function() {
  initScrollNav();
});

const initChocolat = function() {
  new Chocolat(document.querySelectorAll('.image-link'), {
    imageSize: 'contain',
    loop: true,
  });
};

// document.addEventListener('DOMContentLoaded', (event) => {
//   var myCarousel = document.querySelector('#carouselExampleAutoplaying')
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 5000,
//     ride: 'carousel'
//   });
// });

window.addEventListener('load', () => {
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      const container = document.querySelector('.isotope-container');
      
    });
  });
});



