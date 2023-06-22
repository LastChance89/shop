const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.File({
    filename:"test.log",
  })],
});

module.exports = logger;