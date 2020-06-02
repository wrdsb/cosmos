module.exports = function (context, req) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    // get request params
    var wp_domain = req.body.wp_domain;
    var wp_service = req.body.wp_service;
    var wp_environment = req.body.wp_environment;
    var post_id = req.body.post_id;
    
    // get credentials from environment
    var api_key_name = `wrdsb_${wp_service}_${wp_environment}_key`;
    var api_key = process.env[api_key_name];

    var WPAPI = require( 'wpapi' );
    var wp = new WPAPI({ endpoint: `https://${wp_domain}/wp-json` });

    wp.setHeaders( 'Authorization', `Basic ${api_key}` );

    wp.posts().id(post_id).get(function( error, data ) {
        if ( error ) {
            context.res = {
                status: 500,
                body: error
            }
            context.log(error);
            context.done(error);
            return;
        } else {
            context.res = {
                status: 200,
                body: data
            }
            context.log(data);
            context.done(null, data);
        }
    });
};
