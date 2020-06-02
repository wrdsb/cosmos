module.exports = function (context, message) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    let parsed_post = context.bindings.postObject;

    if (parsed_post.post_type != 'post') {
        context.res = {
            status: 200,
            body: "Not a post."
        };

        context.log("Not a post.");
        context.done(null, "Not a post.");
        return;
    }

    var site_domain = parsed_post.site_domain;
    var site_slug = parsed_post.site_slug;
    var site_name = parsed_post.site_name;

    var id = parsed_post.id;
    var post_title = parsed_post.post_title;
    var post_content = parsed_post.post_content;
    var post_guid = parsed_post.post_guid;
    var send_notification = parsed_post.lamson_send_notification;

    if (!send_notification === "yes") {
        context.log("Do not send.");
        context.done(null, "Do not send.");
        return;
    }

    var notification = {
        subject: post_title
    };

    switch (site_domain) {
        case 'staff.wrdsb.ca':
            notification.to = `intranet-${site_slug}@wrdsb.ca`;
            notification.from = {
                email: `intranet-${site_slug}@lamson.wrdsb.io`,
                name: site_name
            };
            notification.html = `${post_content} <p>Originally published on the Staff Intranet here: ${post_guid}</p>`
            break;
    
        default:
            notification.to = 'james_schumann@wrdsb.ca';
            notification.from = {
                email: 'notifications@lamson.wrdsb.io',
                name: 'Lamson Test Notifications'
            };
            notification.html = `${post_content} <p>Originally here: ${post_guid}</p>`
            break;
    }

    sgMail.send(notification, (error, result) => {
        if (error) {
            let event = {
                id: 'lamson-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
                eventType: 'Lamson.WP.Post.Notify.Error',
                eventTime: execution_timestamp,
                data: {
                    event_type: 'function_invocation',
                    app: 'wrdsb-lamson',
                    function_name: context.executionContext.functionName,
                    invocation_id: context.executionContext.invocationId,
                    data: error,
                    timestamp: execution_timestamp
                },
                dataVersion: '1'
            };
        
            context.bindings.callbackMessage = JSON.stringify(event);
       
            context.log(error);
            context.done(null, error);

        } else {
            var notification_to_store = notification;
            notification_to_store.lamson_id = id;
            notification_to_store.created_at = execution_timestamp;

            notification_to_store.result = result;
            notification_to_store.result[0].request.headers.Authorization = 'redacted';
            context.bindings.notificationToStore = JSON.stringify(notification_to_store);

            let event = {
                id: 'lamson-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
                eventType: 'Lamson.WP.Post.Notify',
                eventTime: execution_timestamp,
                data: {
                    event_type: 'function_invocation',
                    app: 'wrdsb-lamson',
                    function_name: context.executionContext.functionName,
                    invocation_id: context.executionContext.invocationId,
                    data: notification_to_store,
                    timestamp: execution_timestamp
                },
                dataVersion: '1'
            };
        
            context.bindings.callbackMessage = JSON.stringify(event);
       
            context.log(notification_to_store);
            context.done(null, notification_to_store);
        }
    });
};
