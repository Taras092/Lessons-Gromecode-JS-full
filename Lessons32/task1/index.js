// const p = new Promise();

// const resolvedPromise = Promise.resolved(17);

// const resolvedPromise2 =new Promise(resolved => resolved(17));

// const rejectPromise = Promise.reject(new Error('error'));

// const rejectPromise2 = new Promise((_, reject) => reject(new Error('error')));

const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(4, 2000);
const asyncNum3 = getValueWithDelay(10, 2000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

// const asyncSum = (...asyncNumbers) =>
//   Promise.all(asyncNumbers)
//   .then((numbers) => getSum(numbers))
//   .catch(() => Promise.reject(new Error(`Can't calculate`)));

const asyncSum = (...asyncNumbers) =>
  Promise.allSettled(asyncNumbers)
  .then((numbers) => console.log(numbers));


asyncSum(asyncNum1, Promise.reject(new Error('error')), asyncNum3)
  .then((result) => console.log(result));
