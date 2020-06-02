module.exports = function (context, message) {
    var execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    //var parsed_post = message;
    var parsed_post = context.bindings.postObject;

    context.bindings.postToStore = parsed_post;

    let event = {
        id: 'lamson-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Lamson.WP.Post.Store',
        eventTime: execution_timestamp,
        data: {
            event_type: 'function_invocation',
            app: 'wrdsb-lamson',
            function_name: context.executionContext.functionName,
            invocation_id: context.executionContext.invocationId,
            data: message,
            timestamp: execution_timestamp
        },
        dataVersion: '1'
    };

    context.bindings.callbackMessage = JSON.stringify(event);

    context.log(message);
    context.done(null, message);
};
