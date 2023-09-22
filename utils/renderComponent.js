/**
 *@description this function renders a HTML file to a parent element
 * @param htmlFile the link to the html file
 * @param parentElement the parent element to insert the rendered component
 * @param activePage the current active page
 */
const renderComponent = (htmlFile, parentElement, activePage) => {
  fetch(htmlFile)
    .then((res) => res.text())
    .then((text) => {
      let oldelem = document.querySelector(parentElement);
      oldelem.innerHTML = text;
    })
    .then(() => activePage && getActivePage(activePage));
};

/**
 * @description this functions adds an "is-active" class to the nav-links to indicate the current page
 * @param activePage the page to show as active by adding a class
 * @returns null.
 */
const getActivePage = (activePage) => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    //Remove class from each element
    link.classList.remove('is-active');
  });
  document.getElementById(activePage).classList.add('is-active');
};

export default renderComponent;
