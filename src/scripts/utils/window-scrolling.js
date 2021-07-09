const WindowScrolling = {
  init(appBar) {
    this._scrolls(appBar);
  },

  _scrolls(appBar) {
    appBar.classList.toggle('scrolling', window.scrollY > 0);
  },

};

export default WindowScrolling;
