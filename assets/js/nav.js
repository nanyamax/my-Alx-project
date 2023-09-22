fetch('../components/nav.html')
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector('#header');
    let newelem = document.createElement('div');
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  });
