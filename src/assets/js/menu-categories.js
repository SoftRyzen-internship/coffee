import $ from 'jquery';
import 'slick-carousel';
import { smoothScroll } from './scroll';

$('.category__slick-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  mobileFirst: true,
  infinite: false,
  arrows: true,
  dots: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 374,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
      },
    },
  ],
});

const links = document.querySelectorAll('.category__list-item');
const menuBtn = document.querySelector('.menu__btn');

const handleClick = e => {
  if (!e.currentTarget.getAttribute('href')) {
    return;
  }
  const elemID = e.currentTarget.getAttribute('href').substr(1);
  if (menuBtn.textContent === 'View all menu') {
    menuBtn.click();
    smoothScroll(elemID);
  } else {
    smoothScroll(elemID);
  }
};

links.forEach(link => {
  link.addEventListener('click', handleClick);
});
