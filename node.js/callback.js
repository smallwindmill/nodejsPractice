var http= require('http');
var fs= require('fs');
var data_text='';

var data= fs.readFileSync('input.txt');
/*fs.readFile('input.txt',function(err,data){
  if(err) return console.log(err);
  data_text=data.toString();
})*/
// console.log(data);
/*http.createServer(function(request,reponse){
  reponse.writeHead(200,{'Content-Type':'text/plain'});
  reponse.end(data);
}).listen('8090');*/

console.log(data.toString());
console.log('input.txt运行完成');