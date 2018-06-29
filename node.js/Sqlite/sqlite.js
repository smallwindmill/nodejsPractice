var fs = require("fs");
var file = "test.sqlite";
var exits = fs.existsSync(file);

var sqlite = require("sqlite3").verbose();
var db = new sqlite.Database(file);

var table_name = "movie"

db.serialize(()=>{
  db.run("create table if not exists "+table_name+" ("+
    "sid text priary key not null,"+
    "name TEXT ,"+
    "sex INTEGER,"+
    "age INTEGER "+")");

  // var del = db.prepare("delete from "+table_name+" where sid=?");
  var del = db.prepare("delete from "+table_name);
  del.run();
  del.finalize();
  // 删除

  var insert = db.prepare("insert or replace into "+table_name+"(sid,name) values(?,?)");
  for (var i=0;i<10;i++){
    insert.run(i,"stu"+i);
  }
  insert.finalize();
  // 插入


  // var modify = db.prepare(["update "+table_name+" set name='sdfgh' where sid=5","update "+table_name+" set sex='1',age='二十一'"]);
  var script = ["update "+table_name+" set name='sdfgh' where sid=5","update "+table_name+" set sex='1',age='二十一'"];
  for(let i=0;i<script.length;i++){
      var modify = db.prepare(script[i]);
      // modify.run("bolin",5)
      modify.run()
      // update "+table_name+" set name=? where sid=?;
      modify.finalize();
    }
// 更新

  var i = [];
  db.each("select rowid as id,sid, name from "+table_name+"",function(err,row){
    var str={};
    str.id = row.id;
    str.name = row.name;
    i.push(str);
    // console.log(row.id+":"+row.sid+" "+row.name);
  },()=>{console.log(JSON.stringify(i));})
  // 查询


})

db.close();
console.log("end");
