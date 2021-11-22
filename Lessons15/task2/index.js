const createCalculator = () => {
  let sum = 0;

  const calculator = {
    add: function () { 
      sum += num;
  },
  decrease: function () {
      sum = sum - num;
  },
  reset: function () {
      return sum = 0;
  },
  getMemo: function () {
      return sum;
  },
  }

  calculator.add(5);
  calculator.decrease(2);
  calculator.reset();
  calculator.getMemo();

  return calculator;
};


// const createCalculator = () => {
//   let sum = 0;
//   const calculator = {};

//   function add(num) {
//       sum += num;
//   }

//   function decrease(num) {
//       sum -= num;
//   }

//   function reset () {
//       sum = 0;
//   }

//   function getMemo () {
//       return sum;
//   }

//   calculator.add = add;
//   calculator.decrease = decrease;
//   calculator.reset = reset;
//   calculator.getMemo = getMemo;
//   calculator.add(5);
//   calculator.decrease(2);
//   calculator.reset();
//   calculator.getMemo();

//   return calculator;
// };

console.log(createCalculator());

