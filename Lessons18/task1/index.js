'use strict';

// const obj = {
//   name: 'Taras',
//   sayhi() {
//     console.log(this);
//   }
// };

// obj.sayhi();

// const func = obj.sayhi;

// func();
///         /////////////////////
// console.log(this);

// function func() {
//   console.log(this);
// }

// func();

/// //////////////////////////

// const user = {
//   name: 'Taras',
//   sayhi() {
//     console.log(this);
//   }
// };

// const func1 = user.sayhi;
// func1(); 

// setTimeout(user.sayhi.bind(user), 100) 

// setTimeout(() => user.sayhi(), 100)

///   ///////////////

const event = {
  guests: [
    { name: 'Taras', email: 'taras@gamil.com', age: 18 },
    { name: 'Tom', email: 'tom@gamil.com', age: 17 },
  ],
  message: 'Welcome to the party',
  getInvitations() {
    return this.guests
    .filter(({ age }) => age >= 18)
    .map(({ name, email }) => ({ 
      text: `Hi ${name}. ${this.message}`, email
    }));
  },
}

console.log(event.getInvitations());
