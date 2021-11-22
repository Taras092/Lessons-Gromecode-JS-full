
const message = 'Have a good day!';

function sendMessage(name) {

  let greeting = 'Hi, ';

  if (name) {
    const greeting = 'Hello, ';
    const name = 'Tad';
    console.log(greeting + name);
  } else {
    console.log(message);
  }

}

sendMessage();

for (let i = 0; i < 10; i +=1) {
  console.log(i);
}