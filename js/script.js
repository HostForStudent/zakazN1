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
