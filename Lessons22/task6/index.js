const buttonElem = document.querySelector('.single-use-btn');

const click = () => {
  console.log('clicked');
  buttonElem.removeEventListener('click', click);
}

buttonElem.addEventListener('click', click);