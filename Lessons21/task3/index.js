export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

export function getItemsArray() {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(Array.from(elementsArray).map);
  return Array.from(elementsArray).map;
}

// console.log(getItemsList());
// console.log(getItemsArray());