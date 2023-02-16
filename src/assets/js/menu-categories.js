import $ from 'jquery';
import 'slick-carousel';

$('.category__slick-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  infinite: false,
  arrows: true,
  dots: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
      },
    },
  ],
});
