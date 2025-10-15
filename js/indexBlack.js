window.onload = function(){
  'use strict';

const menuButtonBlack = document.querySelector('.menu-buttonBlack');
const menuOverlayBlack = document.querySelector('.menu-overlayBlack');

// cursor

menuButtonBlack.addEventListener('click', function() {
  menuButtonBlack.classList.toggle('active');
  menuOverlayBlack.classList.toggle('open');
});
if( window.innerWidth > 600 ) {

  let mouseCursor = document.querySelector('.cursor');

  window.addEventListener('mousemove',cursor);

  function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';

  }

  $(function () {
  $("#testarea").mousemove(function (e) {
    $(".cursor").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor").hide();
  });
});
$(function () {
  $("#testarea2").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
$(function () {
  $("#testarea2").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
$(function () {
  $("#testarea3").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
$(function () {
  $("#testarea4").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
$(function () {
  $("#testarea6").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
$(function () {
  $("#testarea5").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
$(function () {
  $("#testarea8").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
$(function () {
  $("#testarea7").mousemove(function (e) {
    $(".cursor2").show().css({
      "left": e.clientX,
      "top": e.clientY
    });
  }).mouseout(function () {
    $(".cursor2").hide();
  });
});
};


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
