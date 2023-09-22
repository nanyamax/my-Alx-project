import { addNavToPage, addFooterToPage } from '../../utils/utils.js';
import { ALL_PAGES } from '../../constants/constants.js';

const pageLoaded = () => {
  addNavToPage(ALL_PAGES.Home);
  cardText();
  addFooterToPage();
};

const shortenLongText = ({ text, textMax, wordMax, showDots }) => {
  if (!text && !text.length) {
    return text;
  } else if (textMax && typeof textMax === 'number' && text.length > textMax) {
    const truncatedText = text.slice(0, textMax);
    return `${truncatedText.trim()} ${showDots ? '...' : ''}`;
  } else if (
    wordMax &&
    typeof wordMax === 'number' &&
    text.split(' ').length > wordMax
  ) {
    return text.slice(wordMax) + showDots ? '...' : '';
  } else {
    return text;
  }
};

const cardText = () => {
  const text = document.querySelectorAll('.card-body .card-text');

  const textArray = [];
  text.forEach((eachText) => textArray.push(eachText.textContent));
};

const getStory = (storyId) => {
  const allStories = [...ALL_STORIES_DB];
  if (!storyId) return allStories;
};

document.addEventListener('DOMContentLoaded', () => pageLoaded());
