window.onload = function(){
    'use strict';
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');


menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
    menuOverlay.classList.toggle('open');
});


  if( window.innerWidth > 600 ) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 17,
    loop: false,
    freemode: true,
    direction: 'horizontal',
    slidesOffsetAfter: 1
  });
  }
  }
