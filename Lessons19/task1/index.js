const vehicle = {
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log('stopped');
  }
};

const ship = {
  name: 'Aurora',
  hasWheels: false,
  liftAnchorDown() {
    console.log('lifting anchor down');
  },
  liftAnchorup() {
    console.log('lifting anchor up');
  },
}

Object.setPrototypeOf(ship, vehicle);

ship.move();
console.log(ship);