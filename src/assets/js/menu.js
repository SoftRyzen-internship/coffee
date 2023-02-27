const refs = {
  hiddenMenu: document.querySelectorAll('.menu__x'),
  btn: document.querySelector('.menu__btn'),
};

const handleClick = () => {
  const { hiddenMenu, btn } = refs;

  if (btn.innerHTML === 'View&nbsp;all&nbsp;menu') {
    for (let el of hiddenMenu) {
      el.style.display = 'block';
    }
    btn.innerHTML = `Close&nbsp;menu`;
  } else {
    window.location.href = '#menu';

    for (let el of hiddenMenu) {
      el.style.display = 'none';
    }

    btn.innerHTML = 'View&nbsp;all&nbsp;menu';
  }
};

refs.btn.addEventListener('click', handleClick);
