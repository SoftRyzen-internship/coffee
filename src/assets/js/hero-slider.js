import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
  $('.hero__slider')
    .on('init', function () {
      $(this).css('visibility', 'visible');
    })
    .slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
    });
});
