const EventEmitter = require('events')

const myEmitter = new EventEmitter();

const logDbConnection = () => {
    console.log('DB connection')
}

myEmitter.addListener('connected', logDbConnection);
myEmitter.emit('connected')