import $ from 'jquery';

$(document).ready(function () {
  const openPopupBtn = document.querySelectorAll('.send__btn');
  const popup = document.querySelector('.popup');
  const closePopupBtn = document.querySelector('[data-popup-close]');
  const body = document.querySelector('body');
  const modal = document.querySelector('[data-modal]');
  const modalWindow = document.querySelector('.modal');

  const mobileMenu = document.querySelector('[data-menu]');

  openPopupBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      modalWindow.classList.toggle('is-hidden');
      body.classList.add('scroll-hidden');

      togglePopup();
    });
  });

  function setScrolHidden() {
    if (mobileMenu.classList.contains('is-open')) {
      body.classList.add('scroll-hidden');
    } else {
      body.classList.remove('scroll-hidden');
    }
  }

  function togglePopup() {
    popup.classList.toggle('is-hidden');
  }

  function closePopup() {
    togglePopup();
    modal.classList.add('is-hidden');
  }

  function onClickButtonClosePopup() {
    closePopup();

    setScrolHidden();
  }

  closePopupBtn.addEventListener('click', onClickButtonClosePopup);
});
