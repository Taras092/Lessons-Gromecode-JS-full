let sum = 0;

const add = num => {
  sum += num;
} 

const decrease = num => {
  sum = sum - num;
}

const reset = () => {
  sum = 0;
}

const getMemo = () => {
  return sum;
}


