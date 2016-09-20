const fs = require('fs');
const dateFormat = require('dateformat');
const Console = require('console').Console;
const config = require('./config');
const output = fs.createWriteStream(config.log.stdout, {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
const errorOutput = fs.createWriteStream(config.log.stderr, {'flags': 'a'});
// custom simple logger


class Logger {
    constructor() {
        this.console = new Console(output, errorOutput);
        this.dateFormat = 'yyyy mm dd, HH:MM:ss - ';
    }

    log(message) {
        message = dateFormat(new Date(), this.dateFormat) + message;
        this.console.log(message);
        if (process.env.dev) {
            console.log(message);
        }
    }

    error(message) {
        message = dateFormat(new Date(), this.dateFormat) + message;
        this.console.error(message);
        if (process.env.dev) {
            console.error(message);
        }
    }

    warn(message) {
        message = dateFormat(new Date(), this.dateFormat) + message;
        this.console.warn(message);
        if (process.env.dev) {
            console.warn(message);
        }
    }


}
module.exports = new Logger();
// use it like console
//console.log('hello world');//--> Prints: hello world, to stdout
//console.error(new Error('Whoops, something bad happened')); //--> Prints: [Error: Whoops, something bad happened], to stderr
//console.warn(`Danger  Danger!`); //--> Prints: Danger  Danger!, to stderr