const numbersList1 = [1, 2, 3, 4, 5];

const res = numbersList1.push(222);
numbersList1[numbersList1.length] = 222;
console.log(res);

const numbersList4 = [1, 2, 3, 4, 5];

/// input:none
/// output: num
const newarr = numbersList4.shift();
console.log(newarr);




/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */
/// input:number, number, func
/// underfined

/// callback
/// input:number
/// output: underfined

function sum(from, to, printer) {
  let result = 0;
  for (let i = from; i <= to; i +=1) {
    result += i;
  }
  printer(result);
}

const num1 = 5;
const num2 = 10;

function printResult(res) {
  // console.log('Result is ' + res)
  alert(res)
}

sum(num1, num2, printResult)

///   ///////

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input:func
// otput:arr

// callback
// input:elem
// otput:bool

// const filterRes = anotherNumbersList.filter(function (num) {
//   if (num > 5) {
//     return true;
//   } else {
//     return false;
//   }
// });

const filterRes = anotherNumbersList.filter((num) => {
  return num > 5 
});

console.log(filterRes);