import winston, { Logger } from "winston"
 
const AppLogger: Logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'logger.log', level: 'verbose' }),
  ],
});

module.exports = AppLogger;