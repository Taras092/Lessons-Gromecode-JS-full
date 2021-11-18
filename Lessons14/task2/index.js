const createMessager = () => {
  let message = "Hi!";

  function sendMessage(name) {
    const sender = "Gromecode";

    console.log(`${name}, ${message}. You ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
  };
};

const messenger = createMessager();

messenger.sendMessage("Bob");

const messenger2 = createMessager();

messenger2.sendMessage("Tom");

messenger2.setMessage("Hello!");

messenger.sendMessage("Ann");
