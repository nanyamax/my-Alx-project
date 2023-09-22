import renderComponent from './renderComponent.js';

export const getThisYear = () => {
  document.querySelector('.thisYear').textContent = '2023';
};

export const addNavToPage = (activePage) =>
  renderComponent('/components/nav.html', '#header', activePage);

export const addFooterToPage = () =>
  renderComponent('/components/footer.html', '#section-footer');
