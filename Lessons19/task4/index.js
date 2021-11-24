const ship = {
  name: 'Aurora',
  hasWheels: false,
  liftAnchorDown() {
    console.log('lifting anchor down');
  },
  liftAnchorup() {
    console.log('lifting anchor up');
  },
};

function getOwnProps(obj) {
  const arr = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
  }
  }
  return arr.filter(prop => typeof obj[prop] !== 'function');
};

console.log(getOwnProps(ship));

console.log(ship);

console.log(Object.values(ship));

// typeof obj[prop] !== 'function'