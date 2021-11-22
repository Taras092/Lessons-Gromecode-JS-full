// const user = {
//   name: "Name",
//   age: 17,
//   sayHi() {
//     console.log(`Hi, I am ${this.name}.`);
//   }
// sayHi : function () {
//   console.log(`Hi, I am ${this.name}.`);
// },
// };

// user.walk = function walk() {
//   console.log("I'm walking");
// };

// user.sayHi = function () {
//   console.log(`Hi, I am ${this.name}.`);
// };

// user.sayHi();

///  //////////

const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

user.getFullName();

const func = user.getFullName;
func();

// .bind(); --фіксує контекс

const user1 = {
  name: "Doe",
  getFullName1() {
    console.log(`${this.name}`);
  },
};

const func1 = user1.getFullName1.bind(user1);
const func2 = user1.getFullName1.bind({ name: 'Tom' });

func1();
func2();

/// call();

const user2 = {
  name: "Doe",
  getFullName2() {
    console.log(`${this.name}`);
  },
};

const func3 = user2.getFullName2;

func3.call({ name: 'Tom' });
/// ///////////////

const user3 = {
  name: "Doe",
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age} years old.`);
  },
};

const func4 = user3.sayHi;

const anotherUther = {
  name: 'Taras'
};

func4.call(user3, 17, 'Hello');

func4.apply({ name: 'Tom' }, [17, 'Hello']);
