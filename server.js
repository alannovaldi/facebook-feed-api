const http = require('http');
const controller = require('./controller')
const config = require('./config.js')

config.token = process.argv[process.argv.length - 1];

// console.log(config.urls);

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

server.listen(8080, () => {
    console.log("Server is listening on port 8080");
});