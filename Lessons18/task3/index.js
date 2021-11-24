

// function argSum() {
//   return [...arguments].reduce((acc, elem) => {
//     return acc += elem;
//   }, 0);
// }

console.log(argSum(1,2,3,4));

function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
      return acc += elem ** 2;
  }, 0);
}

console.log(sumOfSquares(1,2,3,4));