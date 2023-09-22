const Forms = {
  Signup: 'signup',
  Login: 'login',
};

const onAuthPageLoad = () => {
  const currentPage = window.location.hash.replace('#', '');
  if (currentPage === Forms.Signup) {
    renderForm(Forms.Signup);
  } else {
    renderForm(Forms.Login);
  }
};

const renderForm = (form) => {
  const page = `./components/${form}.html`;
  fetch(page)
    .then((res) => res.text())
    .then((text) => {
      let oldelem = document.querySelector('#render-form');
      oldelem.innerHTML = text;
    });
};

window.addEventListener('hashchange', () => {
  onAuthPageLoad();
});
