export function squaredNumbers() {
  const elem = document.querySelectorAll(".number");
  const arr = Array.from(elem);
  const squaredEl = arr.map((el) => {
    const sqr = el.dataset.number ** 2;
    console.log(sqr);
    return el.setAttribute("data-squared-number", sqr);
  });
  return squaredEl;
}
squaredNumbers();

//  function squaredNumbers1() {
//   const elem = document.querySelector('.number');
//   const elements = elem.map(el => 
//     el.setAttribute('data-squared-number',  el.dataset.number**2));
//     return elements;
// }

// console.log(squaredNumbers1());
// const squaredArr = arr
  // .map(elm => elm.setAttribute('data-squared-number', squaredEl.map(el => el)));
  // console.log(squaredArr);
