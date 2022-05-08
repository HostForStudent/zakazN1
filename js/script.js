new Swiper('.swiper-slide-big', {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   simulateTouch: true,
   grabCursor: true,

   keyboard: {
      enable: true,
      onlyInViewport: true,
   },
   loop: true,
   speed: 1000,
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
})
new Swiper('.swiper-slide-small', {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   grabCursor: true,
   loop: true,
   speed: 1000,
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
})
new Swiper('.cards-swiper-slide', {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
   
   grabCursor: true,
   keyboard: {
      enable: true,
      onlyInViewport: true,
   },
   slidesPerView: 4,
   watchOverflow: true,
   slidesPerGroup: 1,
   centeredSlides: false,
   speed: 800,
   loop: true,
   spaceBetween: 20,
   breakpoints:{
      310:{
         slidesPerView:1,
      },
      640:{
         slidesPerView:2,
      },
      1100:{
         slidesPerView:3,
      },
      1400:{
         slidesPerView:4,
      }
   }, 
})


new Swiper('.clients-swiper-slide', {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
   grabCursor: true,
   loop: true,
   slidesPerView: 4,
   watchOverflow: true,
   slidesPerGroup: 1,
   speed: 800,
   spaceBetween: 20,
   breakpoints:{
      310:{
         slidesPerView:1,
      },
      640:{
         slidesPerView:2,
      },
      1100:{
         slidesPerView:4,
         allowSlideNext:false,
         allowSlidePrev:false,
      },
   }, 
})

const menuOpen = document.querySelectorAll('.menu__open');
const menu = document.querySelector('.menu');
if (menuOpen.length > 0) {
   for (let index = 0; index < menuOpen.length; index++) {
      const btn = menuOpen[index];
      btn.addEventListener("click", function (e) {
         menu.classList.add('_open');
      })
   }
}
const menuClose = document.querySelectorAll('.menu__close');
for (let index = 0; index < menuClose.length; index++) {
   const btn = menuClose[index];
   btn.addEventListener("click", function (e) {
      if (menu.classList.contains('_open')) {
         menu.classList.remove('_open');
      }
   })
}


