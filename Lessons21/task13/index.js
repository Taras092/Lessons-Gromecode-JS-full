function getSection(num) {
  const span = document.querySelectorAll('span');
  const arr = Array.from(span);
  const elem = arr.find(el => {
    const numb = el.dataset.number;
if (numb ===  num) {
  return el.parentElement;
}
  });
  console.log(elem)
}

console.log(getSection('1'));