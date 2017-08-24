var server= require('./main');
var router= require('./router');

server.start(router.route);

console.log(__filename);

