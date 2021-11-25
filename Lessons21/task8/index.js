export function createButton(text) {
  const body = document.querySelector('body');
  const button = document.createElement('button');
  body.append(button);
  button.textContent = text;
}
