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


