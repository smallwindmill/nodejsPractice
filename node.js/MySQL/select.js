var mysql= require('mysql');
var connection= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
});

var sql= 'select * from shop';

connection.query(sql,function(err,result){
  if(err){
    console.log('[select error]-',err.message);
    return;
  }
  console.log('-------select------');
  console.log(result);
  console.log('--------n\n')
})

connection.end();