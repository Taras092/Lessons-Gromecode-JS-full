"use strict";

// input:arr
// otput: obj

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// algo
// 1. create empty object
// 2. iterate arrays & put key/values to the obj

function buildObject(keysList, valuesList) {
  const obj = {};

  for (let i = 0; i < keysList.length; i += 1) {
    obj[keysList[i]] = valuesList[i];
  }

  return obj;
}

function buildObject1(keysList, valuesList) {
  return keysList.reduce(
    (acc, key, index) => ({ ...acc, [key]: valuesList[index] }),
    {}
  );
}

// examples
const keys = ["name", "city", "id"];
const values = ["Taras", "Lviv", 8];
console.log(buildObject(keys, values));
console.log(buildObject1(keys, values));
