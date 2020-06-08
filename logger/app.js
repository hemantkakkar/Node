const EventEmitter = require('events');

const Logger = require('./logger');

const logger = new Logger();

logger.on('messageLogged', (args) => {
    console.log(`listening on ${args.id}`)
})

logger.log('Hello');