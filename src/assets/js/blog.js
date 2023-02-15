import $ from 'jquery';
import 'slick-carousel';

$('.blog__slick-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  dots: true,
  fade: true,
});
