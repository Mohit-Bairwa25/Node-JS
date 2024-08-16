const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Paani Ki Tanki Bhar Gayi Hai');
  setTimeout(()=>{
    console.log('Water is Being Wasted, Please Turn off Motor')
  },3000);
});

myEmitter.emit('WaterFull');