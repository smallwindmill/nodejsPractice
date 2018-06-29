console.log('Hello Word!');
var http=require('http');


let str = new Date();
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello,today is '+str.getDay()+'!');
}).listen(8080);

console.log(str.getDay()+' is working');


/*exports.word=function(){
  console.log('hello Friday');
}*/
