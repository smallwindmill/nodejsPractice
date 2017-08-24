var sql= require('mysql');

var connection= sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test',
});

connection.connect();

var delSql='delete from shop where name=?';
var delSqlParams=['weipinhui'];

connection.query(delSql,delSqlParams,function(err,result){
  if(err){
    console.log('[delete error]-',err.message);
    return;
  }
  console.log('****************delete*************');
  console.log('delete affectedRows',result.affectedRows);
  console.log('****************************n\n');
})

  connection.end();
