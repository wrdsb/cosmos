module.exports = function (context, req) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    // get request params
    var wp_domain = req.body.wp_domain;
    var wp_site = req.body.wp_site;
    var wp_paging_page = req.body.wp_paging_page;
    var wp_service = req.body.wp_service;
    var wp_environment = req.body.wp_environment;
    
    // get credentials from environment
    var api_key_name = `wrdsb_${wp_service}_${wp_environment}_key`;
    var api_key = process.env[api_key_name];

    var paging_page;

    if (wp_paging_page) {
        paging_page = wp_paging_page;
    } else {
        paging_page = 1;
    }

    var WPAPI = require( 'wpapi' );
    var wp;
    
    if (wp_site) {
        wp = new WPAPI({ endpoint: `https://${wp_domain}/${wp_site}/wp-json` });
    } else {
        wp = new WPAPI({ endpoint: `https://${wp_domain}/wp-json` });
    }

    wp.setHeaders( 'Authorization', `Basic ${api_key}` );

    wp.posts().page(paging_page).get(function( error, data ) {
        if ( error ) {
            context.res = {
                status: 500,
                body: error
            }
            context.log(error);
            context.done(error);
            return;
        } else {
            var posts = [];
            var paging = {};

            data.forEach(item => {
                if (item.id) {
                    posts.push(item);
                }
            });

            if (data._paging) {
                paging = data._paging;
            }

            var body = {
                posts: posts,
                paging: paging,
            };

            context.res = {
                status: 200,
                body: body
            }
            context.log(body);
            context.done(null, body);
        }
    });
};
