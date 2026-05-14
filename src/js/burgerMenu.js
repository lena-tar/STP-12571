(() => {
  const openBtnEl = document.querySelector('[data-action="open-menu"]');
  const closeBtnEl = document.querySelector('[data-action="close-menu"]');
  const burgerMenuEl = document.querySelector('[data-visible]');
  const menuLinks = document.querySelectorAll('[data-menu-links] a');

  function changeMenuState(state) {
    burgerMenuEl.dataset.visible = state;
    if (state === 'open') {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  openBtnEl.addEventListener('click', () => changeMenuState('open'));
  closeBtnEl.addEventListener('click', () => changeMenuState('close'));

  burgerMenuEl.addEventListener('click', event => {
    if (event.target === burgerMenuEl) {
      changeMenuState('close');
    }
  });
  menuLinks.forEach(link => {
    link.addEventListener('click', () => changeMenuState('close'));
  });
})();
