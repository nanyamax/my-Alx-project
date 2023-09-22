import { ALL_PAGES } from '../../../constants/constants.js';
import { addNavToPage, addFooterToPage } from '../../../utils/utils.js';
import renderComponent from '../../../utils/renderComponent.js';

const onAuthPageLoad = () => {
  const currentPage = window.location.hash.replace('#', '');
  let page = ALL_PAGES.Login;
  if (currentPage === ALL_PAGES.Signup) {
    page = ALL_PAGES.Signup;
  }
  renderComponent(`./components/${page}.html`, '#render-form', page);
};

document.addEventListener('DOMContentLoaded', () => {
  addNavToPage(ALL_PAGES.Home);
  addFooterToPage();
  onAuthPageLoad();
});

window.addEventListener('hashchange', () => {
  onAuthPageLoad();
});
