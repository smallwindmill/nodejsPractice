/*var http= require('http');
var fs= require('fs');*/
var events= require('events');
var eventEmitter= new events.EventEmitter();

var connectHandler= function connected(){
  console.log('connect sucess');
  eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
  console.log('received success');
})

eventEmitter.emit('connection');
console.log('program success');

