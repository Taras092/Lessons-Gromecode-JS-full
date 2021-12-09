const delay = time => new Promise(resolve => {
  setTimeout(() => {
    resolve({ name: 'Tom', age: 17 });
  }, time);
});

delay(3000).then(() => console.log('Done'));