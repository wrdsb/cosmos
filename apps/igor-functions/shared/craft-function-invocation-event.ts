function craftFunctionInvocationEvent (functionInvocationMeta: FunctionInvocationMeta, payload): FunctionInvocationEvent {
    let event = {
        id: functionInvocationMeta.eventID,
        time: functionInvocationMeta.invocationTime,

        source: `/igor/google-admin-directory-group/${recordID}/${source}`,
        type: functionInvocationMeta.eventType,
        subject: '',

        dataschema: `ca.wrdsb.igor.google-admin-directory-group.${schema}.json`,
        data: {
            function_name: functionInvocationMeta.functionName,
            invocation_id: functionInvocationMeta.invocationID,
            result: {
                payload: payload 
            },
        },

        specversion: "1.0",
        datacontenttype: "application/json"
    };

    // TODO: check message length
    return event;
}

export { craftFunctionInvocationEvent };
