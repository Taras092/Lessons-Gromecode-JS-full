/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = (value) => {
  const promise = new Promise(resolve => {
    resolve(value);
  });

  return promise;
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});