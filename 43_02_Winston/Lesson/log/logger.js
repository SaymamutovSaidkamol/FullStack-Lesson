import winston from "winston";
const { json, timestamp, prettyPrint, combine } = winston.format;
import "winston-mongodb";

let logger = winston.createLogger({
  level: "info",
  format: combine(json(), timestamp(), prettyPrint()),
  transports: [
    // new winston.transports.Console(),
    new winston.transports.File({
      filename: "app.txt",
    }),
    // new winston.transports.MongoDB({
    //   db: "mongodb://127.0.0.1:27017/gadjetlar",
    //   collection: "logs",
    // }),
  ],
});

export default logger

// logger.error("Bu qanaqadur error")
// logger.warn("Bu qanaqadur warn")
// logger.info("Bu qanaqadur infor")
// logger.http("Bu qanaqadur http")
// logger.verbose("Bu qanaqadur verbose")
