var sql= require('mysql');
var connection= sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
});

connection.connect();

var sql='update shop set name=?,title=? where id=?';
var sqlParams=['douban','movie',16];

connection.query(sql,sqlParams,function(err,result){
  if(err){
    console.log('[update error]-',err.message);
    return;
  }
  console.log('************update********');
  console.log('update affecteRows',result.affectedRows);
  console.log('***************************n\n');
})

connection.end();