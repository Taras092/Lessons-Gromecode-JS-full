export function squaredNumbers() {
  const elem = document.querySelector('.number');
  const objLi = elem.dataset.number**2;
  elem.setAttribute('data-squared-number', objLi);
}


