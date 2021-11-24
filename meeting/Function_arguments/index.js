const array = [1, 4, 6, 3];
console.log(array);

// input: arr, func
// output: arr

// callback
// input: el, index, arr,
// output: boolean

// algo
// 1. iterator arr
// 2. apply callback for every el
// 3. if callback true - add to the new arr
const filterArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const el = arr[i];
    if (callback(el, i, arr)) {
      result.push(el);
    }
  }
  return result;
};

const arr = [1, 4, 6, 3, 10, 25];

const filterFunc = (el) => el % 2 === 0;

console.log(filterArrayElements(arr, filterFunc));

// 2
console.log(filterArrayElements(arr, (el, index) => {
  if (index <= 2) {
    return true;
  }
  return false;
}));

