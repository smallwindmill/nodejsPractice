[TOC] 
# first
# 这是2017年八月期间我在runoob.com上自学node.js的一系列操作例子
## 其中有几个读取文件和利用js搭建本地服务器，读取本地文件的例子，以及设置相关路径的解决方法
> 在与mysql的连接过程中，我反复下载卸载了mysql四次，最终终于成功将两者成功连接

在之后与mysql的操作过程中，包括查询、添加、更新和删除等常用方法

到达[最后一个标题](#last)

* 查询
* 添加
* 更新
* 删除

1. select 
2. insert
3. update
4. delete


  ------
  >    var sql= require('mysql');          
  >       var connection=sql.createConnection({
  >>        host: 'localhost',
  >>          user: 'root',
  >>          password: '123456',
  >>          port: '3306',
  >>          database: 'test'
    })

    connection.connect();
    var sql= 'select * from shop where name=?';
    var sqlParams=['weipinhui'];
    connection.query(sql,sqlParams,function(err,result){
    if(err)
    {
    console.log('[select error]-',err.message);
    }
    })

*******
### 下面是一些数据库基本操作命令

+ `show databases;`   *显示所有数据库*
+ `create database [name];`  创建数据库
+ `use [name];`  __选中数据库__

------

![图片](https://cn.vuejs.org/images/xiaozhuanlan-sidebar.png "vue.js")

[第二张图片]:https://cn.vuejs.org/images/xiaozhuanlan-sidebar.png "vue.js"

<!-- [baidu][http://www.baidu.com] "百度" -->
<!-- <http://www.baidu.com> "百度" -->
<!-- [ref]: http://www.baidu.com "百度" -->
[网易云音乐][https://163.music.com] "网易云音乐"
[网易云音乐](https://163.music.com "网易云音乐")
这是一个链往[百度](http://www.baidu.com "百度")的标签

### last

返回[第一个标题](#first)