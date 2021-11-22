// defer(func, ms) => Function
//  Переадресация вызова
function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this,...arguments), ms);
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const sayHi = () => {
  console.log("Hi");
};

// sayHi();

const deferredSayHi = defer(sayHi, 1000);

deferredSayHi();

const sum = (a, b) => {
  console.log(a + b);
};

const deferredSum = defer(sum, 1000);

deferredSum(2, 5);

///       ////////////

const user = {
  name: 'Taras',
  sayHi1() {
    console.log(`Hi, I am ${this.name}!`)
  }
};

const deferredSayHi1 = defer(user.sayHi1, 1000);

deferredSayHi1.call({ name:'Bob' });
