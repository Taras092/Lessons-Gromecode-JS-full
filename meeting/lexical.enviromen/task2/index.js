const createLogger = () => {
  const memory = [];

    // input: string
    // output: undefined
  const warn = (message) => {
    memory.push({
      message,
      dateTime: new Date(),
      type: "warn",
    });
  }
  const error = (message) => {
    memory.push({
      message,
      dateTime: new Date(),
      type: "error",
    });
  }
  const log = (message) => {
    memory.push({
      message,
      dateTime: new Date(),
      type: "log",
    });
  }
  // INPUT: string
  // OTPUT: arrays of object
  const getRecords = (str) => {
    const filtered = str ? memory.filter((elem) => elem.type === str) : memory;

    return filtered.sort((a, b) => b.dateTime - a.dateTime);
  };

  return { warn, log, error, getRecords };
};

{ createLogger };

// test data

const logger = createLogger();
logger.log("User logged in");
logger.warn("User try to restricted page");
logger.error("Unexpected error on the site");

setTimeout(() => {
  logger.log("User logged out");

  console.log(logger.getRecords());
  console.log(logger.getRecords("log"));
}, 2000);

// console.log(logger.getRecords("error"));
// console.log(logger.getRecords("warn"));
// console.log(logger.getRecords("warnc"));
// console.log(logger.getRecords("log"));
// console.log(logger.getRecords("log"));

// function makeCounter() {
//   let count = 0;

//   return () => {
//     return count++;
//   };
// }

// // test data
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());