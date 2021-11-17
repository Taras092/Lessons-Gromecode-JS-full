import { calc } from "./calculator.js";

it ('should find the most smallest number', () => {
  const result = calc([1,'+', 4]);

  expect(result).toEqual(null);
});

it ('should add numbers', () => {
  const result = calc('2 + 3');

  expect(result).toEqual('2 + 3 = 5');
});

it ('should multiplay numbers', () => {
  const result = calc('2 * 3');

  expect(result).toEqual('2 * 3 = 6');
});

it ('should subtract number', () => {
  const result = calc('3 - 1');

  expect(result).toEqual('3 - 1 = 2');
});

it ('should division numbers', () => {
  const result = calc('4 / 2');

  expect(result).toEqual('4 / 2 = 2');
});