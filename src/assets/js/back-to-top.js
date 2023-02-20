import $ from 'jquery';

$(document).ready(function () {
  let backToTop = $('#back-to-top');

  if (backToTop.length) {
    $(window).scroll(function () {
      let scrolled = $(window).scrollTop();
      // console.log(scrolled);

      if (scrolled > 300) {
        backToTop.addClass('active');
      } else {
        backToTop.removeClass('active');
      }
    });

    backToTop.click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1000);
    });
  }
});
