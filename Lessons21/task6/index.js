
export function setButton(buttonText) {
  const button = document.querySelector("body");
  const buttontex = document.createElement("button");
  buttontex.innerHTML = buttonText;
}

console.log(setButton("button text"));
