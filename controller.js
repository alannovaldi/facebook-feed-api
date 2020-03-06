const axios = require('axios');
const config = require('./config');

exports.trial = (request,response) => {
    var urls = config.urls;
    // console.log(urls)
    // response.end(urls);

    axios.get(urls)
        .then(responses => {
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(responses.data));
        })
        .catch(error => {
            console.log(error);
        });
}