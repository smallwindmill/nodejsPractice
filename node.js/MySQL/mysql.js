var mysql= require('mysql');
var connection= mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '@123456',
  database : 'test'
})

connection.connect();

/*connection.query('SELECT 1+1 AS solution',function(error,results,fields){
  if(error) throw error;
  console.log('The solution os:',results[0].solution);
})*/

var result_en;
var sql= 'select * from test1120';
connection.query(sql,(err,result)=>{
  if(err){
    console.log("error:"+err.message);
    return;
  }
  result_en = result;
})

var http = require("http");
http.createServer((request,response)=>{
  response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
  // reponse.end("hello~today is "+new Date().getFullYear()+"!");
  response.end(JSON.stringify(result_en));
}).listen(9090);
