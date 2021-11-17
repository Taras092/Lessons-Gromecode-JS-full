export function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
     return null;
  }
  return numbers.slice().reverse();
}

reverseArray([1, 2, 4, 6, 9, 3, 15]);


'use strict';

export const withdraw = (clients, balances, client, amount) => {

  const index = clients.indexOf(client);
  const balance = balances[index];
  if (balance > amount || balance === amount) {
    const rest = balance - amount;
    balances[index] = rest;
    return rest;
  } 
  return -1;
}


//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 87)

//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

//output
//-1
//и массив balances должен быть [1400, 87, -6]




export const getAdults = obj => {

  const newObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }