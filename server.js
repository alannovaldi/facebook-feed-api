const http = require('http');
const controller = require('./controller')

server = http.createServer(function(request, response){
    controller.trial(request,response);
})

server.listen(8080);