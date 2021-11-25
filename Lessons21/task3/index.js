export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

export function getItemsArray() {
  const elementsArray = document.querySelectorAll('.tool');
  const arr = Array.from(elementsArray)
  console.dir(arr);
  return arr;
}

// console.log(getItemsList());
// console.log(getItemsArray());