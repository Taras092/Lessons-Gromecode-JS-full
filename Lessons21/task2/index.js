function getTitleElement() {
  const titleElem = document.querySelector(".title");
  console.dir(titleElem);
  return titleElem;
}

function getInputElement() {
  const inputElem = document.querySelector("input");
  inputElem.getAttribute('type', 'text');
  console.dir(inputElem);
  return inputElem;
}

console.log(getTitleElement());
console.log(getInputElement());
