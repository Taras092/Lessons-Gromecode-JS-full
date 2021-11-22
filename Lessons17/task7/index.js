// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName() {
//     return this.getFullName.call({
//       firstName: this.firstName,
//       lastName: this.lastName,
//     });
//   },
// };

// console.log(user.getFullName());
// console.log(user.setFullName());



const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    const str = `${this.firstName} ${this.lastName}`;
    return str;
  },
  setFullName() {
    const str =  this.getFullName.call({ firstName: 'Taras', lastName: 'Luchynets'});
    const arr = str.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};

console.log(user);
console.log(user.getFullName());
console.log(user.setFullName());
console.log(user);

/// ////////////////////////

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     const str = `${this.firstName} ${this.lastName}`;
//     return str;
//   },
//   setFullName(string) {
//     const str = string.split('')
//     this.firstName = str[0];
//     this.lastName = str[1];
//   },
// };
