document.addEventListener('DOMContentLoaded', function() {
   let menuMobileBtn = document.querySelector('.menu-mobile img');
   if(menuMobileBtn){
        menuMobileBtn.addEventListener('click', function() {
             let menu = document.querySelector('.header_nav');
             menu.classList.toggle('mostrar');
        });
   }
});