async function createEvent(
    functionInvocationID,
    functionInvocationTime,
    functionInvocationTimestamp,

    functionName,
    functionEventType,
    functionEventID,
    functionLogID,

    logStorageAccount,
    logStorageContainer,

    eventLabel,
    eventTags
)
{
    const typeURL = '';
    const source = `${logStorageAccount}/${logStorageContainer}/${functionLogID}.json`;
    const label = eventLabel;
    const tags = eventTags;

    const event = {
        specversion : "0.3",
        datacontenttype : "application/json",

        type : functionEventType,
        typeVersion : "1.0.0",
        typeURL: typeURL,

        id : functionEventID,
        time : functionInvocationTimestamp,
        source : source,

        label: label,
        tags: tags,

        data : {
            functionInvocationID: functionInvocationID,
            functionInvocationTime: functionInvocationTime,
            functionInvocationTimestamp: functionInvocationTimestamp,
        
            functionName: functionName,
            functionEventType: functionEventType,
            functionEventID: functionEventID,
            functionLogID: functionLogID,
        
            logStorageAccount: logStorageAccount,
            logStorageContainer: logStorageContainer,

            url: source
        }
    };

    return event;
}

export { createEvent };
