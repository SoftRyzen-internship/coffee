import $ from 'jquery';
import 'slick-carousel';

$('.blog__slick-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  infinite: true,
  arrows: false,
  dots: false,
  variableWidth: true,
  asNavFor: '.blog__slick-slider-nav',
  responsive: [
    {
      breakpoint: 374,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});
$('.blog__slick-slider-nav').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.blog__slick-slider',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
});
