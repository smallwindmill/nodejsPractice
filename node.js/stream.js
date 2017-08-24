var fs=require('fs');
// var data='';

var readStream=fs.createReadStream('input.txt');
/*var data=fs.readFile('input.txt');

readStream.setEncoding('UTF8');

readStream.on('data',function(chunk){
  data=chunk;
})

readStream.on('end',function(){
  console.log(data);
})

readStream.on('error',function(err){
  console.log(err.stack);
})

console.log('program working');*/

var data1='hello world,today is thursday?';
var writeStream= fs.createWriteStream('out.txt');

writeStream.write(data1,'UTF8');
writeStream.end();
writeStream.on('finish',function(){
  console.log('write finished');
})
writeStream.on('error',function(err){
  console.log(err.stack);
})
console.log('write program finish');

console.log(fs.readFileSync('out.txt').toString());

/*console.log(fs.readFileSync('out.txt').toString());
readStream.pipe(writeStream);
console.log('this,'+fs.readFileSync('out.txt').toString());*/