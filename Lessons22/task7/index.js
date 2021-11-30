const btnElements = document.querySelectorAll(".btn");
const arr = Array.from(btnElements);

const handleClick = (event) => {
  console.log(event.target.textContent);
};

arr.map((el) => el.addEventListener("click", handleClick));
