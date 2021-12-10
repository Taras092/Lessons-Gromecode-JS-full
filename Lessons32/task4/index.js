const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

const getSum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const resultPromise = Promise.all([promiseNumber1, promiseNumber2, promiseNumber3]);

  resultPromise
  .then((numbers) => getSum(numbers))
  .then(result => {
    console.log(result); // 98
  });
