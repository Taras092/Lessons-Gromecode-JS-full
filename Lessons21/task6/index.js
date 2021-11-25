
export function setButton(buttonText) {
  const body = document.querySelector("body");
  const buttonHTML = `<button>${buttonText}</button>`;
  body.innerHTML = buttonHTML;
}




