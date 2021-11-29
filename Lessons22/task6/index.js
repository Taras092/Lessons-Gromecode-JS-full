const buttonElem = document.querySelector('.single-use-btn');

buttonElem.addEventListener('click', event => {
  console.log('clicked');
  event.stopPropagation();
});