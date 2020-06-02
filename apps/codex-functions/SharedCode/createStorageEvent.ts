async function createStorageEvent(
    functionInvocationID,
    functionInvocationTime,
    functionInvocationTimestamp,

    functionName,
    functionEventType,
    functionEventID,
    functionLogID,

    logStorageAccount,
    logStorageContainer,

    storageEventType,
    storageEventID
)
{
    const typeURL = '';
    const source = `${logStorageAccount}/${logStorageContainer}/${functionLogID}.json`;
    const label = storageEventType;

    const event = {
        specversion : "0.3",
        datacontenttype : "application/json",

        type : storageEventType,
        typeVersion : "1.0.0",
        typeURL: typeURL,

        id : storageEventID,
        time : functionInvocationTimestamp,
        source : source,

        label: label,

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

export { createStorageEvent };
