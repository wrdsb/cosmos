async function createLogObject(functionInvocationID, functionInvocationTime, functionName, payload)
{
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const logObject = {
        id: functionLogID,
        function_name: functionName,
        invocation_id: functionInvocationID,
        timestamp: functionInvocationTimestamp,
        payload: payload
    };

    return logObject;
}

export { createLogObject };
