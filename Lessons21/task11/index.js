export function manageClasses() {
  const elemOne = document.querySelector(".one");
  elemOne.classList.add("selected");

  const elemTwo = document.querySelector(".two");
  elemTwo.classList.remove("selected");

  const elemThree = document.querySelector(".three");
  elemThree.classList.toggle("three_done");

  const elemFour = document.querySelector(".four");
  if (elemFour.classList.contains("some-class")) {
    elemFour.classList.add("another-class");
  }
}
