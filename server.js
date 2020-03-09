const http = require('http');
const controller = require('./controller')

server = http.createServer(function(request, response){
    console.log(request.url);
    if(request.url === '/facebook-feed'){
        controller.index(request,response);
    } else if(request.url === '/facebook-feed/next') {
        controller.nextPage(request,response);
    } else if(request.url === '/facebook-feed/prev') {
        controller.prevPage(request,response);
    } else {
        response.end('Page your are looking for is not exist');   
    }
})

server.listen(8080);