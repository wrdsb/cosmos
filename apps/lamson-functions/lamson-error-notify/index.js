module.exports = function (context, message) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

    const queueMessage = context.bindings.queueMessage;
    const badMessage = queueMessage.message;
    const badQueue = queueMessage.queue;

    var notification = {
        subject: "Lamson Error: Bad Queue Message",
        to: 'james_schumann@wrdsb.ca',
        from: {
            email: 'notifications@lamson.wrdsb.io',
            name: 'Lamson Notifications'
        },
        html: `<ul><li><strong>Queue:</strong> ${badQueue}</li><li><strong>Message:</strong> ${badMessage}</li></ul>`
    };
    
    sgMail.send(notification, (error, result) => {
        if (error) {
            let event = {
                id: 'lamson-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
                eventType: 'Lamson.Error.Notify.Error',
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
            context.log(event);
            context.done(null, event);

        } else {
            var notification_to_store = notification;
            notification_to_store.created_at = execution_timestamp;
            notification_to_store.result = result;
            notification_to_store.result[0].request.headers.Authorization = 'redacted';

            context.bindings.notificationToStore = JSON.stringify(notification_to_store);

            let event = {
                id: 'lamson-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
                eventType: 'Lamson.Error.Notify',
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
            context.log(event);
            context.done(null, event);
        }
    });
};
