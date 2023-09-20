const pageLoaded = () => {
  cardText();
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

  console.log(
    shortenLongText({ text: textArray[0], textMax: 45, showDots: true })
  );
};

const getStory = (storyId) => {
  const allStories = [...ALL_STORIES_DB];
  if (!storyId) return allStories;
};
