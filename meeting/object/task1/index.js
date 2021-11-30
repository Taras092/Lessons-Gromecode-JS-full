/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// input: obj
// otput: obj

// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }


// function addPropertyV2(obj, key, value) {
//   const sourceObj = { [key]: value };
//   Object.assign(obj, sourceObj);
//   return obj;
// }
// function addPropertyV2(obj, key, value) {
//   return Object.assign(obj, { [key]: value });
// }

// function addPropertyV3(obj, key, value) {
//   const objct = Object.assign({}, obj, { [key]: value });
//   return objct;
//   // return Object.assign(objct, { [key]: value });
// }
function addPropertyV3(obj, key, value) {
  const objNew = Object.assign({ [key]: value }, obj);
  return objNew;
}

function addPropertyV4(obj, key, value) {
  return {...obj, [key]: value};
}

// const addPropertyV4 = (obj, key, value) => ( {...obj, [key]: value});

// test data
const transaction = {
  value: 170,
};
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);
console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);