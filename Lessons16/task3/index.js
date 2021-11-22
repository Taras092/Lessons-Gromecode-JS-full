const createArrayOfFunctions = (num = 0) => {

  if (typeof(num) !== "number") {
    return null;
  }

  if (num === 0) {
    return [];
  }

  var arr = [];
  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return  arr ;
}