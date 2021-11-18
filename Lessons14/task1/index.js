'use strict';

let message = 'Just learn it';

// const sendMessage = (name) => {
//   const sender = 'Gromecode';
//   console.log(`${name}, ${message}. You ${sender}`);
// }

// sendMessage('Tom');

export function sendMessage(name) {
  const sender = 'Gromecode';

  console.log(`${name}, ${message}! You ${sender}`);
}

export function setMessage(text) {
  message = text;
}



