function createLogObject(functionInvocationMeta, payload): LogObject
{
    const logObject = {
        id: functionInvocationMeta.functionLogID,
        function_name: functionInvocationMeta.functionName,
        invocation_id: functionInvocationMeta.functionInvocationID,
        timestamp: functionInvocationMeta.functionInvocationTimestamp,
        payload: payload
    };

    return logObject;
}

export { createLogObject };
