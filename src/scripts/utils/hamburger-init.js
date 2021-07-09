const HamburgerInit = {
  init({button, menu, content}) {
    button.addEventListener('click', (event) => {
      this._hamburgerToggler(event, menu, button);
    }),

    content.addEventListener('click', (event) => {
      this._hamburgerClose(event, menu);
    });
  },

  _hamburgerToggler(event, menu, button) {
    event.stopPropagation();
    menu.classList.toggle('open');

    if (button.children[0].className === 'fas fa-bars') {
      button.children[0].className = 'far fa-window-close';
    } else {
      button.children[0].className = 'fas fa-bars';
    }
  },

  _hamburgerClose(event, menu) {
    event.stopPropagation();
    menu.classList.remove('open');
  },
};

export default HamburgerInit;
