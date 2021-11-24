// const vehicle = {
//   isMoving: false,
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log('stopped');
//   }
// };

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorup() {
//     console.log('lifting anchor up');
//   },
// }

// Object.setPrototypeOf(ship, vehicle);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// };

// console.log(Object.keys(ship));

/// /////       ///////////////////

const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

user.fullName = 'Tom Hardy';

console.log(user.fullName);

user.setfullName('Taras Luchynets');

console.log(user.fullName);