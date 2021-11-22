// const getFinitNumbers = arr => {
//   let array = [];
//   arr.map(el => {
//     if (Number.isFinite(el)) {
//       array.push(el);
//     }
//   });
//   return array;
// }

// const getFinitNumbersV2 = arr => {
//   let array = [];
//   arr.map(el => {
//     if (isFinite(el)) {
//       array.push(el);
//     }
//   });
//   return array;
// }

// const getNan = arr => {
//   let array = [];
//   arr.map(el => {
//     if (Number.isNaN(el)) {
//       array.push(el);
//     }
//   });
//   return array;
// }

// const getNanV2 = arr => {
//   let array = [];
//   arr.map(el => {
//     if (isNaN(el)) {
//       array.push(el);
//     }
//   });
//   return array;
// }

// const getIntegers = arr => {
//   let arara = [];
//   arr.map(el => {
//     if (Number.isInteger(el)) {
//       arara.push(el);
//     }
//   });
//   return arara;
// }

// const result = (getFinitNumbers === getFinitNumbersV2);
// const result2 = (getNan === getNanV2);
// console.log(result);
// console.log(result2);
// console.log(getFinitNumbers([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));
// console.log(getFinitNumbersV2([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));
// console.log(getNan([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));
// console.log(getNanV2([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));
// console.log(getIntegers([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));

//

/// put your code here

// const getParseIntegers = arr => {
//   let array =[];
//   arr.forEach(el => array.push(Number.parseInt(el)));
//   return array;
// }

// const getParseIntegersV2 = arr => {
//   let array= [];
//   arr.forEach(el => array.push(parseInt(el)));
//   return array;
// }

// const getParsedFloats = arr => {
//   let array = [];
//   arr.forEach(el => array.push(Number.parseFloat(el)));
//   return array;
// }

// const getParsedFloatsV2 = arr => {
//   let array = [];
//   arr.forEach(el => array.push(parseFloat(el)));
//   return array;
// }
// const result = (getParseIntegers === getParseIntegersV2);
// const result2 = (getParsedFloats === getParsedFloatsV2);
// console.log(result);
// console.log(result2);
// console.log(getParseIntegers([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));
// console.log(getParseIntegersV2([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));
// console.log(getParsedFloats([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));
// console.log(getParsedFloatsV2([2, '42tbf', 23.23, '23', 'text', NaN, undefined, Infinity]));

///

///  Roading number ////////////////////////////////

// const multiRound = num => [
//   Math.floor(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.round(num * 100) / 100,
//   parseFloat(num.toFixed(2))
// ]

// // examples
// console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

///

//   находження максимального   /////////////////////////
// 1111
// const getMaxAbsoluteNumber = arr => {
//   let max = -Infinity;
//   arr.forEach(el => {
//     if (Math.abs(el) > max) {
//       max = Math.abs(el);
//     }
//   })
//   return max;
// };
/// 2222
// const getMaxAbsoluteNumber = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   if (arr.length <= 0) {
//     return null;
//   }

//   const absolutetnum = arr
//     .map(el => Math.abs(el));
//   const max = Math.max(...absolutetnum);
//   return max;
// };

// console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
// console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
// console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
// console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
///
///

// const getaTotalPrice = arr => {
//   const result = arr
//   .reduce((acc, el) => {
//     return acc + el;
//   }, 0)
//   // const remaind = parseFloat(result.toFixed(2));
//     // return '$' + remaind;
//   const remainder = Math.floor(result * 100) / 100;
//   return '$' + remainder;
// }

// console.log(getaTotalPrice([12.324, 34.355, 25.045, 5.002]));

///

///

// const getRandomNumbers = (length, from, to) => {
//   let arr = [];
//   for (let i = 0; i <= length; i++) {
//     if (to- from < 1) {
//       return null;
//     }
//     if (arr.length <= length -1) {
//       arr.push(Math.ceil(Math.random() * (to - from) + from));
//     }
//   }
//   return arr;
// };

// // examples
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
///

///  Rounding numbers with precision //////////////////////

// const superRound = (num, prec) => [
//   Math.floor(num *(10 ** prec)) / 10 ** prec,
//   Math.trunc(num *(10 ** prec)) / 10 ** prec,
//   Math.ceil(num *(10 ** prec)) / 10 ** prec,
//   Math.round(num *(10 ** prec)) / 10 ** prec,
//   parseFloat(num.toFixed(prec))
// ]


// console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
// console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
///

///  