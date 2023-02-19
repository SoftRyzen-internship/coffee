import $ from 'jquery';

$(window).scroll(function () {
  let scrolled = $(window).scrollTop();
  console.log(scrolled);
  if (scrolled > 300) {
    $('#back-to-top').addClass('active');
  } else {
    $('#back-to-top').removeClass('active');
  }
});

$('#back-to-top').click(function () {
  $('body, html').animate({ scrollTop: 0 }, 1000);
});
