function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: "Andrey",
  age: 111,
  tempFunc: "some secret data",
};

// input: obj, arg(optional)
// output: func

// option1
const bindedFunc = printMessage.bind(user);
bindedFunc("Ukraine", "Odessa");

// option2
const bindedFunc2 = printMessage.bind(user, "UK");
bindedFunc2("London");

// option3
const bindedFunc3 = printMessage.bind(user, "UK", "Liverpool");
bindedFunc3();

// input: fun obj, arg
// output: func
const myBind = (func, context, ...args) => {
  return function (...funcArgs) {
    // input: obj, array
    // output: result of func
    func.apply(context, [...args, ...funcArgs]);
  };
};

// test data
// option1
const myBindFunc1 = myBind(printMessage, user);
myBindFunc1("Ukraine", "Odessa");

// opyion2
const myBindFunc2 = myBind(printMessage, user, 'UK');
myBindFunc2("London");

// option3
const myBindFunc3 = myBind(printMessage, user, "UK", "Liverpool");
myBindFunc3();

// BONUS
