import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/pseudo.css';
import '../styles/animation.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  appBar: document.getElementById('appBar'),
  button: document.getElementById('hamburgerButton'),
  menu: document.getElementById('navigationBar'),
  content: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', () => {
  app.appBarScrolls();
});
