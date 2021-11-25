export function setTitle(text) {
  const newTitle = document.querySelector('.title');
  newTitle.textContent = text;
}

console.log(setTitle('Taras'));