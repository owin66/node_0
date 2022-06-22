const EventEmitter = require('events')

const myEmitter = new EventEmitter();

const logDbConnection = () => {
    console.log('DB connection')
}

myEmitter.addListener('connected', logDbConnection);
myEmitter.emit('connected')

myEmitter.removeListener('connected', logDbConnection)
/*myEmitter.off('connected', logDbConnection)*/
myEmitter.emit('connected')

myEmitter.on('msg', (data)=>{
    console.log(`Take ${data}`)
})
myEmitter.emit('msg', ' Hi take my message')

myEmitter.once('off', ()=>{
    console.log('я вызвался один раз')
})
myEmitter.emit('off')
myEmitter.emit('off')