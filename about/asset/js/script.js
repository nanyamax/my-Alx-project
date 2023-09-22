import { addFooterToPage, addNavToPage } from '../../../utils/utils.js';
import { ALL_PAGES } from '../../../constants/constants.js';

const pageLoaded = () => {
  addNavToPage(ALL_PAGES.About);
  addFooterToPage();
};

document.addEventListener('DOMContentLoaded', () => pageLoaded());
