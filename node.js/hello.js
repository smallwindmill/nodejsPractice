console.log('Hello Word!');
var http=require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello,today is Thursday!');
}).listen(8080);

console.log('thursday is working');


/*exports.word=function(){
  console.log('hello Friday');
}*/
