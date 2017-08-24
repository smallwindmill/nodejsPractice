var http= require('http');
var url= require('url');

function start(route){
  function onRequest(request,response){
    var pathname=url.parse(request.url).pathname;
      console.log('Request for'+pathname+'received.');
      route(pathname);
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('hello Friday');

  console.info('info');
  console.warn('warn');
  console.error('error');
/*  console.time("time");
 
  console.timeEnd('时间结束');*/

  console.time("time");

  console.timeEnd('time');
}

  http.createServer(onRequest).listen(8888);
  console.log('server has started.');
}

exports.start=start;
