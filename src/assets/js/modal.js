import $ from 'jquery';

$(document).ready(function () {
  const openModalBtn = document.querySelectorAll('[data-modal-btn]');
  const modal = document.querySelector('[data-modal]');
  const modalWindow = document.querySelector('.modal');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.backdrop');
  const popup = document.querySelector('.popup');

  const mobileMenu = document.querySelector('[data-menu]');

  const form = document.getElementById('form');
  const username = document.getElementById('name');
  const phone = document.getElementById('telephone');

  openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      //remove values in form
      form[0].value = '';
      form[1].value = '';
      //remove success and error classes
      username.parentElement.classList.remove('success');
      username.parentElement.classList.remove('error');
      phone.parentElement.classList.remove('success');
      phone.parentElement.classList.remove('error');

      toggleModal();
      body.classList.add('scroll-hidden');
    });
  });

  function setScrolHidden() {
    if (mobileMenu.classList.contains('is-open')) {
      body.classList.add('scroll-hidden');
    } else {
      body.classList.remove('scroll-hidden');
    }
  }

  function toggleModal() {
    modal.classList.toggle('is-hidden');
    modalWindow.classList.toggle('is-hidden');
  }

  function togglePopup() {
    popup.classList.toggle('is-hidden');
  }

  function handleKey(e) {
    if (
      !modal.classList.contains('is-hidden') &&
      !modalWindow.classList.contains('is-hidden') &&
      popup.classList.contains('is-hidden')
    ) {
      if (e.key === 'Escape') {
        toggleModal();
        body.classList.remove('scroll-hidden');
      }
    }

    if (
      !modal.classList.contains('is-hidden') &&
      modalWindow.classList.contains('is-hidden') &&
      !popup.classList.contains('is-hidden')
    ) {
      if (e.key === 'Escape') {
        modal.classList.add('is-hidden');
        togglePopup();

        body.classList.remove('scroll-hidden');
      }
    }
    return;
  }

  function handleClose(e) {
    if (e.target === e.currentTarget && popup.classList.contains('is-hidden')) {
      toggleModal();

      setScrolHidden();
    }

    if (e.target === e.currentTarget && !popup.classList.contains('is-hidden')) {
      modal.classList.add('is-hidden');
      togglePopup();

      setScrolHidden();
    }
    return;
  }

  function onClickButtonCloseModal() {
    toggleModal();

    setScrolHidden();
  }

  document.addEventListener('keydown', handleKey);
  backdrop.addEventListener('mousedown', handleClose);
  closeModalBtn.addEventListener('click', onClickButtonCloseModal);
});
