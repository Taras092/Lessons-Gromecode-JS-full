const buttonElements = document.querySelectorAll(".pagination__page");
const arr = Array.from(buttonElements);

const handleClick = (event) => {
  console.log(event.target.dataset);
};

arr.forEach((el) => el.addEventListener("click", handleClick));
