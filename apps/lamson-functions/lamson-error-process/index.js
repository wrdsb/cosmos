module.exports = function (context, message) {
    const executionTimestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z
    const errorID = context.executionContext.invocationId;

    let error = {};
    error.id = errorID;
    error.timestamp = executionTimestamp;

    const queueMessage = context.bindings.queueMessage;

    if (queueMessage.queue) {
        error.type = "Queue.Message.Poison";
        error.queue = queueMessage.queue;
        error.message = queueMessage.message;
    }

    context.log('Queuing storage.');
    context.bindings.lamsonErrorStore = error;

    context.log('Queuing notification.');
    context.bindings.lamsonErrorNotify = error;
 
    let event = {
        id: 'lamson-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Lamson.Error.Process',
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
};
