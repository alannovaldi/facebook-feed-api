const axios = require('axios');
const config = require('./config');
let fs = require('fs');

var prev_page_link = config.urls;
var next_page_link = config.urls;
var is_index = 0;

exports.index = (request,response) => {
    var urls = config.urls;
    axios.get(urls)
        .then(apiResponse => {
            is_index = 1;
            prev_page_link = apiResponse.data.feed.paging.previous;
            next_page_link = apiResponse.data.feed.paging.next;

            apiResponse.data.feed.paging.previous = "http://localhost:8080/facebook-feed/prev";
            apiResponse.data.feed.paging.next = "http://localhost:8080/facebook-feed/next";

            endpoint = apiResponse.data.feed
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(endpoint));
        })
        .catch(error => {
            console.log(error);
        });
}

exports.nextPage = (request,response) => {
    var urls = next_page_link;
    axios.get(urls)
        .then(apiResponse => {
            if (next_page_link === config.urls){
                is_index = 1;
                apiResponse.data = apiResponse.data.feed
            } else {
                is_index = 0;
            }
            
            prev_page_link = apiResponse.data.paging.previous;
            next_page_link = apiResponse.data.paging.next;

            apiResponse.data.paging.previous = "http://localhost:8080/facebook-feed/prev";
            apiResponse.data.paging.next = "http://localhost:8080/facebook-feed/next";

            endpoint = apiResponse.data
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(endpoint));
        })
        .catch(error => {
            console.log(error);
        });
}

exports.prevPage = (request,response) => {
    var urls = prev_page_link;
    axios.get(urls)
        .then(apiResponse => {

            if (prev_page_link === config.urls){
                is_index = 1;
                apiResponse.data = apiResponse.data.feed
            }

            console.log(apiResponse.data.data.length)
            if (apiResponse.data.data.length == 0){
                response.setHeader('Content-Type', 'application/json');
                response.end(JSON.stringify({"message" : "Page your are looking for is not exist"}));
            }
            
            prev_page_link = apiResponse.data.paging.previous;
            next_page_link = apiResponse.data.paging.next;

            console.log(prev_page_link);

            apiResponse.data.paging.previous = "http://localhost:8080/facebook-feed/prev";
            apiResponse.data.paging.next = "http://localhost:8080/facebook-feed/next";

            endpoint = apiResponse.data
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(endpoint));
        })
        .catch(error => {
            console.log(error);
        });
}