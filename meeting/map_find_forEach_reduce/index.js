const numbersList = [5, 0, 8, 10, -4, 50, 220];

console.log(numbersList.map(el => el));

// const mapRes = numbersList.map(el => {
//   const res = el * el;
//   return res;
// })

// forEach
// input: func, this (optinal)
// output: arr

numbersList.forEach(el => {
  if (el > 100) {
    console.log(el);
  }

  return el;
})


// find 

// input: func, this (optinal)
// output: elem

// callback
// input: el, index, array(optinal)
// otput: boolean

// Bad
// const findRes = numbersList.find(el => {
//   if (el % 2 === 0 ) {
//     return true;
//   }

//   return false;
// });

// console.log(findRes);

// Good

console.log(numbersList.find(el => el % 2 === 0 ));


// reduce

// input: func, this (optinal)
// output: number

// callback
// input: acc, elem
// outbut: num

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

console.log(transactions.reduce((acc, elem) => acc + elem));