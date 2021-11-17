import { reverseArray, withdraw, getAdults } from "./index.js";

it ('should chek revers', () => {
  const result = reverseArray([1, 2, 4, 6, 9, 3, 15]);

  expect(result).toEqual([15, 3, 9, 6, 4, 2, 1]);
});

it ('should chek revers', () => {
  const result = reverseArray([-1, 2, -4, 6, -9]);

  expect(result).toEqual([-9, 6, -4, 2, -1]);
});

it ('should chek isArray', () => {
  const result = reverseArray('taras');

  expect(result).toEqual(null);
});


it ('should chek the work functon ', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it ('should chek the work functon ', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

it ('should chek the work functon ', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 87);

  expect(result).toEqual(0);
});



it ('should chek the work object ', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it ('should chek the work object ', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it ('should chek parameter ', () => {
  const result = getAdults([ 'Ann: 56', 'Andrey: 7' ]);

  expect(result).toEqual({});
});