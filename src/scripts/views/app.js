import routes from '../routes/route';
import UrlParser from '../routes/url-parser';
import HamburgerInit from '../utils/hamburger-init';
import WindowScrolling from '../utils/window-scrolling';

class App {
  constructor({appBar, button, menu, content}) {
    this._appBar= appBar;
    this._button = button;
    this._menu = menu;
    this._content = content;

    this._initializeApp();
  }

  _initializeApp() {
    HamburgerInit.init({
      button: this._button,
      menu: this._menu,
      content: this._content,
    });
  }

  appBarScrolls() {
    WindowScrolling.init(this._appBar);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
