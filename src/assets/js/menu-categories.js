import $ from 'jquery';
import 'slick-carousel';

$('.category__slick-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  infinite: false,
  arrows: true,
  dots: false,
});
