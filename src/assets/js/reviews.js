import $ from 'jquery';
import 'slick-carousel';

$('.reviews__slick-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  infinite: true,
  arrows: false,
  dots: false,
  variableWidth: true,
  centerMode: true,
  asNavFor: '.reviews__slick-slider-nav',
});
$('.reviews__slick-slider-nav').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.reviews__slick-slider',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
});
