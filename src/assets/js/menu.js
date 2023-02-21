const refs = {
  hiddenMenu: document.querySelectorAll('.menu__x'),
  btn: document.querySelector('.menu__btn'),
};

const handleClick = () => {
  const { hiddenMenu, btn } = refs;

  if (btn.textContent === 'View all menu') {
    for(let el of hiddenMenu) {
      el.style.display = 'block';
    }
    btn.textContent = 'Close menu';
  } else {

    if (window.matchMedia("(max-width: 1279px)").matches) {
      window.location.href='#menu';
    }

    for(let el of hiddenMenu) {
      el.style.display = 'none';
    }

    btn.textContent = 'View all menu';
  }
};

refs.btn.addEventListener('click', handleClick);