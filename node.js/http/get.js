var http= require('http');
var url= require('url');
var util= require('util');

var querystring= require('querystring');
// var post= '<div style="width:300px;height:300px;background:red;"></div>'
var post='<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head><body><form method="post">网站名： <input name="name"><br>网站 URL： <input name="url"><br><input type="submit"></form><div style="width:300px;height:300px;background:red;"></div></body></html>';
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  var params= url.parse(req.url,true).query;
  res.write('网站名:'+params.name+'\n');
  res.write('网站url:'+params.url);
  res.write(post);
  // res.end(util.inspect(url.parse(req.url,true)));
  res.end();
  console.log('finished');
}).listen(3000);

/*  var post='<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer(function(req,res){
  var body='';
  req.on('data',function(chunk){
    body+= chunk;
  })
  req.on('end',function(){
   body= querystring.parse(body);
   res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
   if(body.name&&body.url){
    res.write('website name:'+body.name+'<br>');
    res.write('website url:'+body.url);
   }else{
    res.write(post);
   }
    // res.end(util.inspect(post));
  });
}).listen(3000);*/