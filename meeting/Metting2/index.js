// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate numbers from 2 to num => i
// 2. iterate from 2 to i ===> number
// 3. если остаток от деления i на number равно 0 - то не простоеб
// 4. если на все числа деление сотстатком - то число простое,
// вивести в консоль

// chek 1 - 9
// 2 -> true
// 3 (3 / 2, 3 / 3) true
// 4 ( 4 / 2 (!), 4 / 3, 4 / 4) -> false

// input: num
// output: boolean

/// 111  /////
function isPrime (num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true;
}

function getPrimes (num) {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

getPrimes(15);


/// 222  /////////////////
// function getPrimes(num) {
//   for (let i = 2; i <= num; i += 1) {
//     // console.log('CHEKING NUMBER ' + i);
//     let isPrime = true;

//     for (let number = 2; number < i; number += 1) {
//       // console.log('INNER NUMBER ' + i);
//       if (i % number === 0) {
//         // console.log('NUMBER ' + i + ' IS NOT PRIME');
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// getPrimes(15);