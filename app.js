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

myEmitter.prependListener('msg', (data)=> {
    console.log(`Prepend`)
})


myEmitter.emit('msg', ' Hi take my message')

myEmitter.once('off', ()=>{
    console.log('я вызвался один раз')
})
myEmitter.emit('off')
myEmitter.emit('off')

console.log(myEmitter.getMaxListeners())
myEmitter.setMaxListeners(1)
console.log(myEmitter.getMaxListeners())

console.log(myEmitter.listenerCount('msg'))
console.log(myEmitter.eventNames()) // name


console.log(myEmitter.listeners('off'))

myEmitter.on('error', (err) =>{
    console.log(`error ${err.message}`)
})
myEmitter.emit('error', new Error('BOOM'))


const target = new EventTarget()

const logTarget = () =>{
    console.log('Connect to target')
}

target.addEventListener('connected', logTarget)
target.dispatchEvent(new Event('connected'))