export function generateResponseObject(functionInvocation, command, validatedCommand) {
    const jobType = command.jobType;
    const operation = command.operation;
    const payload = command.payload;

    const commandIsValid = validatedCommand.isValid;
    const jobTypeValid = validatedCommand.jobTypeValid;
    const operationValid = validatedCommand.operationValid;
    const payloadValid = validatedCommand.payloadValid;
    
    if (commandIsValid) {
        return {
            header: {
                status: 202,
                message: `Accepted. Enqueued jobType ${jobType}.`,
                chatter: `Wilco. Create and process ${jobType} job.`,
                timestamp: functionInvocation.functionInvocationTimestamp,
            },
            status: 202,
            accepted: true,
            jobType: jobType,
            operation: operation,
            payload: payload
        };
    };

    if (!jobTypeValid) {
        return {
            header: {
                status: 400,
                message: `Bad Request. Invalid jobType specified.`,
                chatter: `Negative. Unable to comply. That's an unknown jobType.`,
                timestamp: functionInvocation.functionInvocationTimestamp,
            },
            status: 400,
            accepted: false,
            jobType: jobType,
            operation: operation,
            payload: payload
        };
    }

    if (!operationValid) {
        return {
            header: {
                status: 400,
                message: `Bad Request. Invalid operation specified.`,
                chatter: `Negative. Unable to comply. That's an unknown operation.`,
                timestamp: functionInvocation.functionInvocationTimestamp,
            },
            status: 400,
            accepted: false,
            jobType: jobType,
            operation: operation,
            payload: payload
        };
    }

    if (!payloadValid) {
        return {
            header: {
                status: 400,
                message: `Bad Request. Invalid payload provided.`,
                chatter: `Negative. Unable to comply. That's a bad payload.`,
                timestamp: functionInvocation.functionInvocationTimestamp,
            },
            status: 400,
            accepted: false,
            jobType: jobType,
            operation: operation,
            payload: payload
        };
    }

    return {
        header: {
            status: 400,
            message: `Bad Request. Unknown error.`,
            chatter: `Negative. Unable to comply.`,
            timestamp: functionInvocation.functionInvocationTimestamp,
        },
        status: 400,
        accepted: false,
        jobType: jobType,
        operation: operation,
        payload: payload
    };
}
