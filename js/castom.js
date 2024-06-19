$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      576: {},
    },
  });
});

//   toggle
("use strict");

document.querySelector(".toggle").addEventListener("click", function () {
  this.classList.toggle("activate");
});

// wow js
new WOW().init();

