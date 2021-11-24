const createLogger = () => {
  let memory = [];

  const logger = {
    warn(message) {
      memory.push({
        message,
        type: "warn",
        dateTime: new Date(),
      });
    },
    error(message) {
      memory.push({
        message,
        type: "error",
        dateTime: new Date(),
      });
    },
    log(message) {
      memory.push({
        message,
        type: "log",
        dateTime: new Date(),
      });
    },
    getRecords(type) {
      if (!type) {
        return [...memory].sort((a, b) => b.dateTime - a.dateTime);
      }

      const result = [];

      for (const record of memory) {
        if (record.type === type) {
          result.unshift({ ...record });
        }
      }

      return result.sort((a, b) => b.dateTime - a.dateTime);
    },
  };

  return logger;
};

const logger = createLogger();

logger.log("User logged in");
logger.warn("Uder try to restricted page");
logger.log("User logged out");
logger.error("Unexpected error on the site");
logger.getRecords();
logger.getRecords("log");
logger.getRecords("error");
logger.getRecords("warn");


