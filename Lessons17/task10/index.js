function calculator(a, b) {
  switch (this.operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

// put your code here

// function multiplier(a, b) {
//   if (this.operation) {
//     return a * b;
//   }
// };
// const multipcalc = multiplier.bind({ operation: "*" }, 3, 5);
// console.log(multipcalc());

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

// put your code here

// function summator(a, b) {
//   if (this.operation) {
//     return a + b;
//   }
// };

// const func = summator.bind({ operation: "+" }, 3, 5);
// console.log(func());

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

// put your code here

// function twice(num) {
//   if (this.operation) {
//     return num * 2;
//   }
// }

// const calcTwice = twice.bind({ operation: "*" }, 5);

// console.log(calcTwice());

/// /////////////////////////////////////

function multiplier(a, b) {
  switch (this.operation) {
    case "*":
      return a * b;
    default:
      return NaN;
  }
}

const multipcalc = multiplier.bind({ operation: "*" }, 4, 3);

console.log(multipcalc());


function summator(a, b) {
  switch (this.operation) {
    case "+":
      return a + b;
    default:
      return NaN;
  }
}

const summatorCalc = summator.bind({ operation: "+" }, 3, 3);

console.log(summatorCalc());


function twice(a) {
  switch (this.operation) {
    case "*":
      return a * 2;
    default:
      return NaN;
  }
}

const twiceCalc = twice.bind({ operation: "*" }, 5);

console.log(twiceCalc());



/// ////////////////////////////////////////////////////
// const multiplier = calculator.bind({ operation: "*" }, 2, 3);
// multiplier();

// const summator = calculator.bind({ operation: "+" }, 2, 3);
// summator();

// const twice = calculator.bind({ operation: "*" }, 4, 2);

// twice();
///     /////////////////////////////////////////////