async function createStorageCallback(logObject, status)
{
    let callbackMessage = {
        id: logObject.id,
        callback_type: 'Storage',
        function_name: logObject.function_name,
        invocation_id: logObject.invocation_id,
        timestamp: logObject.timestamp,
        status: status
    };

    return callbackMessage;
}

export { createStorageCallback };
