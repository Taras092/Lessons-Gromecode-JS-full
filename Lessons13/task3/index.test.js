import { getMinSquaredNumbers } from "./getMinSquaredNumber.js";

it ('should find the most smallest number', () => {
  const result = getMinSquaredNumbers([2, -5, 6, 9, 33, -4, 10]);

  expect(result).toEqual(16);
});

it ('should isArray', () => {
  const result = getMinSquaredNumbers('taras');

  expect(result).toEqual(null);
});

it ('should fixed arr has element', () => {
  const result = getMinSquaredNumbers([]);

  expect(result).toEqual(null);
});