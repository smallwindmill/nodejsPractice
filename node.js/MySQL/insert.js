var sql= require('mysql');

var connection= sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test',
});

connection.connect();

var addSql= 'insert into shop(id,name,title,time) values(?,"weipinhui",?,?)';
var hh=new Date();
var addSqlParams=[,'音乐3',hh,'happy3'];

connection.query(addSql,addSqlParams,function(err,result){
  if(err){
    console.log('[inset error]-',err.message);
    return;
  }
  console.log('***********insert***********');
  console.log('inset ID:',result);
  console.log('*********************n\n')
})

connection.end();