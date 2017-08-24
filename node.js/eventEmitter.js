var events= require('events');
var eventEmitter= new events.EventEmitter();

eventEmitter.emit('errho');

var listener1= function listener1(){
  console.log('listener1 working');
}
var listener2= function listener2(){
  console.log('listener2 working');
}

/*var listener3= funtion(){
  console.log('listener3 working');
}
*/
eventEmitter.addListener('connection',listener1);

eventEmitter.on('connection',listener2);

var eventlisteners= require('events').EventEmitter.listenerCount(eventEmitter,'connection');
var count= eventEmitter.listeners('connection');

console.log(eventlisteners+'/');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1 disappeared');

eventEmitter.emit('connection');

eventlisteners= require('events').EventEmitter.listenerCount(eventEmitter,'connection');
count= eventEmitter.listeners('connection');
console.log(eventlisteners+'/');

console.log('finished');