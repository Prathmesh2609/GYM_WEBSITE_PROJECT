$(document).ready(function () {
  $(".owl-carousel1").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-carousel2").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$(document).ready(function () {
  $("#nav-icon2").click(function () {
    $(this).toggleClass("open");
    $(".nav_v2_side").toggleClass("open");
  });
});
  