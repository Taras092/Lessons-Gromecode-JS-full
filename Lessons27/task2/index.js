const counterElem = document.querySelector(".counter");
const counterValueElem = document.querySelector(".counter__value");

const onCounterChange = (event) => {
  const isButton = event.target.classList.contains(".counter__button");

  if (!isButton) {
    return;
  }

  const actions = event.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);

  const newValue =  actions === "decrease" ? oldValue - 1 : oldValue + 1;
  
  localStorage.setItem('counterValue', newValue)

  counterValueElem.textContent = newValue;
};

console.log(counterElem.addEventListener("click", onCounterChange));

const onStorageChange = event => {
  console.log(event);
  counterValueElem.textContent = event.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
