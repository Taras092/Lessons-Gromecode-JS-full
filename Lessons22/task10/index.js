const buttonElements = document.querySelectorAll(".pagination__page");
const arr = Array.from(buttonElements);

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

arr.map((el) => el.addEventListener("click", handleClick));
