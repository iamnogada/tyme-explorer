const winston = require('winston')
require('winston-daily-rotate-file');
const path = require('path')


const LOG_DIR=process.env.LOG_DIR ||'./logs'
const LOG_LEVEL=process.env.LOG_DIR ||'debug'

const logfile = path.join(LOG_DIR, 'log-%DATE%.log')
var format = 'json'==process.env.LOG_FORMAT? winston.format.json():winston.format.simple()
const logger = winston.createLogger({
    level: LOG_LEVEL,
    format: format,
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.DailyRotateFile({
            level:process.env.LOG_LEVEL,
            filename: logfile,
            datePattern:'YYYY-MM-DD'
        }),
        new winston.transports.Console({
            level:process.env.LOG_LEVEL,
            format: winston.format.simple()
        })
    ]
});

module.exports = logger