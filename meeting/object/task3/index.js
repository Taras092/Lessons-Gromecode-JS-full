// input: obj, obj
// output: boolean

// algo
// 1. iterate obj1 keys
// 2. compare if(value1 !== value2) =? false

function compareObjects(obj1, obj4) {
  for (const elem in obj1) {
    if (obj1[elem] !== obj4[elem]) {
      return false;
    }
  }
  for (const elem in obj4) {
    if (obj1[elem] !== obj4[elem]) {
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
