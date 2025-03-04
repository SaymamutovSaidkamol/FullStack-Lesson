import winston from "winston";
const { json, timestamp, prettyPrint, combine } = winston.format;
import "winston-mongodb";

let logger = winston.createLogger({
  level: "silly",
  format: combine(json(), timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File({ filename: "logger.txt" })
  ],
});


export default logger