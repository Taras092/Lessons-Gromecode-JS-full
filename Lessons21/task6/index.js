

export function setButton(buttonText) {
  const button = document.querySelector("body");
  const buttontex = document.createElement("button");
  buttontex.innerHTML = buttonText;
  return buttontex;
}

console.log(setButton("Button text"));
