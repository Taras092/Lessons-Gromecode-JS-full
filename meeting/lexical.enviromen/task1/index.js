/* eslint-disable */

// GLOBAL LEX ENV
// {
//  'enviromentRecord': {
//    'message': text,
//    'weight': 55,
//    'run': {
//    console.log('RUN')
//  },
//    'createMessenger': {...},
//    'messanger': ...
// },
//  'outherLexicalEnv': null
// }

// createMessenger1 LEX ENV
// {
//  'enviromentRecord': {
//    'message: 'hello',
//    'sender': ...
//    'sendMessage': ...
//    ....
//  },
//  'outherLexicalEnv': global
// }

// createMessenger2 LEX ENV
// {
//  'enviromentRecord': {
//    'message: ''Jusr learn it',
//    'sender': ...
//    'sendMessage': ...
//    ....
//  },
//  'outherLexicalEnv': global
// }

// sentMessage LEX ENV
// {
//  'enviromentRecord': {
//     'text': 'hello',
//  },
//  'outherLexicalEnv': createMessenger1
// }

// sentMessage LEX ENV
// {
//  'enviromentRecord': {
//  },
//  'outherLexicalEnv': createMessenger1
// }

const message = "Test";
const weight = 55;

function run() {
  console.log("RUN");
}

// input: none
// output: object
function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";

  // input: string
  // output: undefined
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  function print() {
    console.log(weight);
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    print,
  };
}

const messanger1 = createMessenger();
messanger1.setMessage('hello');
messanger1.print();

const messanger2 = createMessenger();

run();
