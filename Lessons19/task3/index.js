// User  function costructor; Name cunstructor function ChartAt lowercase

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// this.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.sayHi = function() {
//   console.log(`Hi, I am ${this.name}`);
// };

// const user1 = new User("Taras", 17);

// console.log(user1);

// user1.sayHi();

// const user2 = new User("Ivan", 21);

// user2.sayHi();


function User(name, age) {
  this.name = name;
  this.age = age;
};

User.prototype.sayHi = function() {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function() {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function(age) {
  this.age = age;
  if (this.age >= 25) {
  console.log(`New photo request was sent for ${this.name}`);
  } else if (this.age >= 0) {
    return age;
  } else if (this.age < 0){
    return false;
  }
};

const user1 = new User("Taras", 17);

console.log(user1);

user1.sayHi();

const user2 = new User("Ivan", -1);

console.log(user2.setAge(5));

const user3 = new User("Petro", 22);

user3.requestNewPhoto();

const user4 = new User("Taras", 5);

console.log(user4.setAge());