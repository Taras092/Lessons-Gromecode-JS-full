const buttonElem = document.querySelector(".search__btn");

buttonElem.addEventListener("click", () => {
  const inputElem = document.querySelector(".search__input");
  console.log(inputElem.value);
});
