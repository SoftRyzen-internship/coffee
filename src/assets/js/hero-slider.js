import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
  console.log('hello');
  $('.hero__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    speed: 500,
  });
});
