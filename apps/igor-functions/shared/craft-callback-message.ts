function craftCallbackMessage(logObject: LogObject, status: number): CallbackMessage
{
    let callbackMessage = {
        id: logObject.id,
        callback_type: 'Function.Invocation',
        function_name: logObject.function_name,
        invocation_id: logObject.invocation_id,
        timestamp: logObject.timestamp,
        status: status
    };

    return callbackMessage;
}

export { craftCallbackMessage };
