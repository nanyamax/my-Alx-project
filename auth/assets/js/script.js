const Forms = {
  Signup: 'signup',
  Login: 'login',
};

const onAuthPageLoad = () => {
  const currentPage = window.location.hash;
  if (currentPage === Forms.Signup) {
    renderForm(Forms.Signup);
  } else {
    renderForm(Forms.Login);
  }

  console.log('Testee currentPage : ', currentPage);
};

const renderForm = (form) => {
  const page = `./components/${form}.html`;
  fetch(page)
    .then((res) => res.text())
    .then((text) => {
      let oldelem = document.querySelector('#render-form');
      let newelem = document.createElement('div');
      newelem.innerHTML = text;
      oldelem.parentNode.replaceChild(newelem, oldelem);
    });
};
