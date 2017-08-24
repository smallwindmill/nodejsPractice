var buf= new Buffer(256);
// var buf= new Buffer([10,20,30,40,50,60]);
// var buf= new Buffer('hello world','thursday');

// buf.write(string[,offset[,length]][,encoding]);

len= buf.write('hello world,thursday!');
console.log(len);
console.log(buf.toString('utf8',0,));

// console.log(buf.toJSON(buf));

var buf2=new Buffer(52);

for(var i=0;i<52;i++){  
  if(i<26){
    buf2[i]=i+65;
  }else{
    buf2[i]=i-26+97;
  } 
}

console.log(buf2.toString('utf8'));

var buf = new Buffer('www.runoob.com');
// 两种写入缓冲区的方法对转译为json的不同点
var json = buf.toJSON(buf);

console.log(json);

