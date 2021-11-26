export function getSection(num) {
  const span = document.querySelectorAll("span");
  const arr = Array.from(span);
  const elem = arr.find((el) => num === el.dataset.number);
  if (elem) {
    return elem.parentElement.dataset.section;
  }
}

// .closest('.box').dataset.section;

// document.querySelector('.box > span[data-number="4"]')
// .parentElement.dataset.section
