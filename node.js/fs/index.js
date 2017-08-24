var fs= require('fs');


//读取文件 

/*fs.readFile('input.txt',function(err,data){
  if(err){
    return console.error(err);
  }
  console.log('异步读取：'+data.toString());
})

var data= fs.readFileSync('input.txt');
console.log('同步读取：'+data);
*/

// 打开文件
/*fs.open('input.txt','r+',function(err,fd){
  if(err){
    return console.log(err);
  }
  console.log('文件打开成功');
})*/

// 获取文件信息
/*fs.stat('input.txt',function(err,stats){
  if(err){
    return console.log(err);
  }
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory());
})*/

// 写入文件
/*console.log('开始写入文件');
fs.writeFile('input.txt','菜鸟教程官网地址：www.runoob.com',function(err){
  if(err){
    return console.log(err);
  }
  console.log('数据写入成功');
  console.log('——我是分割线——');
  fs.readFile('input.txt',function(err,data){
    if(err){
      return console.log(err);
    }
    console.log('异步读取:'+data.toString());
  })
})*/

// 读取文件和关闭文件（open和close)
/*var buf= new Buffer(1024);

fs.open('input.txt','r+',function(err,fd){
  if(err){
    return console.log(err);
  }
  console.log('文件打开成功，准备读取10字节');

  fs.ftruncate(fd,10,function(err){
    if(err){
      return console.log(err);
    }
    console.log('截取成功');
  })

  fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err){
      console.log(err);
    }
    console.log(bytes+'字节被读取');

    if(bytes>0){
      console.log(buf.slice(0,bytes).toString());
    }

    fs.close(fd,function(err){
      if(err){
        return console.log(err);
      }
      console.log('文件关闭成功');
    })
  })

  console.log(fs.readFileSync('input.txt').toString());
})*/

// 删除文件
/*console.log('开始删除文件');
fs.unlink('input.txt',function(err){
  if(err){
    return console.log(err);
  }
  console.log('文件删除成功');
})*/


// 创建目录
/*var fs = require("fs");

fs.mkdir("test2",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});*/


// 查看目录

fs.readdir('test2',function(err,files){
  if(err){
    return console.log(err);
  }
  console.log('start reading');
  files.forEach(function(file){
    console.log(file);
  })
})

// 删除目录
fs.rmdir('test2',function(err){
  if(err){
    return console.error(err);
  }
    files.forEach(function(file){
    console.log(file);
  })
})
