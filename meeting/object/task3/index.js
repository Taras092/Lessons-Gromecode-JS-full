// input: obj, obj
// output: boolean

// algo
// 1. iterate obj1 keys
// 2. compare if(value1 !== value2) =? false

function compareObjects(obj1, obj2) {
  if (obj1.length !== obj2.length) {
    return false;
  }

// if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//   return false;
// }

  for (const elem in obj2) {
    if (obj1[elem] !== obj2[elem]) {
      return false;
    }
  }
  return true;
}

// examples
const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
