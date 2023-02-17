(() => {
  const openMenuBtn = document.querySelector('[data-menu-btn]');
  const mobileMenu = document.querySelector('[data-menu]');
  const btnMenuClose = document.querySelector('[data-menu-close-btn]');
  const body = document.querySelector('body');
  const menuLink = document.querySelectorAll('.mobile-menu .nav-link');
  const backdropMenu = document.querySelector('[data-modal-menu]');
  openMenuBtn.addEventListener('click', () => {
    toggleMenu();
    // adds a listener to close btn
    btnMenuClose.addEventListener('click', toggleMenu);
  });

  menuLink.forEach(function (link) {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  function toggleMenu() {
    openMenuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('scroll-hidden');
    backdropMenu.classList.toggle('is-hidden-menu');
    // removes a listener to close btn
    btnMenuClose.removeEventListener('click', toggleMenu);
  }

  function handleCloseMenu(e) {
    if (e.target === e.currentTarget) {
      toggleMenu();
    }
    return;
  }

  function handleKeyMenu(e) {
    if (!backdropMenu.classList.contains('is-hidden-menu')) {
      if (e.key === 'Escape') {
        toggleMenu();
      }
    }
    return;
  }
  document.addEventListener('keydown', handleKeyMenu);
  backdropMenu.addEventListener('mousedown', handleCloseMenu);
})();
