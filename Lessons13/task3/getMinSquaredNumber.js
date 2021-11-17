export const getMinSquaredNumbers = arr => {
  
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length === 0) {
    return null;
  }
  let min = 0;

  for (let i = 0; i < arr.length; i++)
  if (arr[i] < arr[i + 1]) {
    min = arr[i];
  } 

  return min ** 2;
}

