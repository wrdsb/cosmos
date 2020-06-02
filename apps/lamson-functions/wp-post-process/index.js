module.exports = function (context, message) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    let post = context.bindings.postObject;

    context.log('Queuing storage.');
    context.bindings.lamsonWpPostStore = message;

    if (post.post_status === 'publish') {
        if (post.lamson_send_notification === 'yes') {
            context.log('Queuing notifications.');
            context.bindings.lamsonWpPostNotify = message;
        }

        if (post.lamson_do_syndication === 'yes') {
            context.log('Queuing syndication.');
            context.bindings.lamsonWpPostSyndicate = message;
        }
    }

    context.done(null, post);
};
