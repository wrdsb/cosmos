module.exports = function (context, message) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z
    const axios = require('axios');

    // get request params
    var wp_service = message.wp_service;
    var wp_environment = message.wp_environment;

    var wp_domain = message.wp_domain;
    var wp_site = message.wp_site;

    var wp_post = message.post;

    // get credentials from environment
    var api_key_name = `wrdsb_${wp_service}_${wp_environment}_key`;
    var api_key = process.env[api_key_name];

    var baseURL = (wp_site) ? `https://${wp_domain}/${wp_site}/wp-json` : `https://${wp_domain}/wp-json`;
    var path = `/lamson/v1/posts/${wp_post}`;

    var options = {
        baseURL: baseURL,
        url: path,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${api_key}`
        }
    };

    axios(options)
    .then(function (response) {
        //response.config.headers.Authorization = 'redacted';
        //context.log(response);

        context.log(`${response.status}: ${response.statusText}`);
        context.log(response.data);

        context.bindings.lamsonWpPostStore = JSON.stringify(response.data);

        //context.res = {
            //status: response.status,
            //body: {
                //status: response.status,
                //statusText: response.statusText,
                //data: response.data
            //}
        //};
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            context.log(error.response.data);
            context.log(error.response.status);
            context.log(error.response.headers);

            //context.res = {
                //status: error.response.status,
                //body: error.response.data
            //};
    
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            context.log(error.request);

            //context.res = {
                //status: error.request.status,
                //body: error.request
            //};

        } else {
            // Something happened in setting up the request that triggered an Error
            context.log('Error', error.message);

            //context.res = {
                //status: 500,
                //body: error
            //};

        }
        context.log(error.config);
    })
    .then(function () {
        context.done();
    });
};
