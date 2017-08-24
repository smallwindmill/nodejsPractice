process.stdout.write('hello world'+'\n');

process.argv.forEach(function(val,index,arr){
  console.log(index+':'+val);
})

// 属性
console.log(process.execPath);

console.log(process.platform);

console.log(process.version);

// 方法

console.log('当前目录:'+process.cwd());
console.log('gg:'+process.memoryUsage().rss);
// console.log(process.memoryUsage());