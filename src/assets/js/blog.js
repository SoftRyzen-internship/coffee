import $ from 'jquery';
import 'slick-carousel';

$('.blog__slick-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  mobileFirst: true,
  infinite: true,
  arrows: false,
  dots: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
