async function createPeopleSetEvent(
    functionInvocationID,
    functionInvocationTime,
    functionInvocationTimestamp,

    functionName,
    functionEventType,
    functionEventID,
    functionLogID,

    logStorageAccount,
    logStorageContainer,

    peopleSetEventType,
    peopleSetEventID
)
{
    const typeURL = '';
    const source = `${logStorageAccount}/${logStorageContainer}/${functionLogID}.json`;
    const label = peopleSetEventType;

    const event = {
        specversion : "0.3",
        datacontenttype : "application/json",

        type : peopleSetEventType,
        typeVersion : "1.0.0",
        typeURL: typeURL,

        id : peopleSetEventID,
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

export { createPeopleSetEvent };
