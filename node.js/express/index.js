var express= require('express');
var app= express();
var fs= require('fs');
var path= require('path');

var bodyParser= require('body-parser');
var multer= require('multer');

var urlencodedParser= bodyParser.urlencoded({extended:false})


app.use(express.static('images'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({desr:'/tmp/'}).array('image'));

/*app.get('/',function(req,res){
  res.send('hello world');
  console.log('主页 GET请求');
})*/

app.post('/',function(req,res){
  console.log('主页POST请求');
  res.send('hello monday');
})

app.get('/list_user',function(req,res){
  console.log('/list_user GET请求');
  res.send('用户列表页面');
})

app.get('/index.html',function(req,res){
  res.sendFile(__dirname+'/'+'index.html');
})

app.get('/iframe.html',function(req,res){
  var hh=path.resolve(__dirname, '../..')
  res.sendFile(hh+'/H5/iframe.html');
})

app.get('/canvas.html',function(req,res){
  var hh=path.resolve(__dirname, '../..')
  res.sendFile(hh+'/H5/canvas.html');
})


app.get('/process_get',function(req,res){
  var response= {
    'first_name':req.query.first_name,
    'last_name':req.query.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/process_post',urlencodedParser,function(req,res){

  var response= {
    'firstname':req.body.first_name,
    'last_name':req.body.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

app.post('/file_upload',function(req,res){
  console.log(req.files[0]);
  var des_file=__dirname+'/'+req.files[0].originalname;
  fs.readFile(req.files[0].path,function(err,data){
    if(err){
      console.log(err);
    }else{
      response={
        message:'File uploaded successfully',
        filename:req.files[0].originalname
      }
    }
    console.log(response);
    res.end(JSON.stringify(response));
  })
})

app.get('/ab*cd',function(req,res){
  console.log('/ab*cd GET请求');
  res.send('正则匹配');
})

var server= app.listen(8081,function(){
  var host= server.address().address;
  var port= server.address().port;
  console.log('应用实例，访问地址为http://%s:%s',host,port);
})


var cook= require('cookie-parser');

// var app=express()
app.use(cook());

app.get('/',function(req,res){
  console.log('cookies:',req.cookies);
  res.write('ooooooooooo');
  res.end('hhhhhhhhhhhhh');
})

app.listen(8082);