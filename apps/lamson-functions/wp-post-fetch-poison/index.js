module.exports = function (context, message) {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    let errorMessage = {};

    errorMessage.queue = "wp-post-fetch";
    errorMessage.message = message;

    context.bindings.lamsonErrorProcess = errorMessage;

    let event = {
        id: 'lamson-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Lamson.WP.Post.Fetch.Poison',
        eventTime: execution_timestamp,
        data: {
            event_type: 'function_invocation',
            app: 'wrdsb-lamson',
            function_name: context.executionContext.functionName,
            invocation_id: context.executionContext.invocationId,
            data: errorMessage,
            timestamp: execution_timestamp
        },
        dataVersion: '1'
    };

    context.bindings.callbackMessage = JSON.stringify(event);
    context.log(event);
    context.done(null, event);
};
