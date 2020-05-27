interface FunctionInvocationMeta {
    functionName: string;

    invocationID: string;
    invocationTime: Date;
    invocationTimestamp: string;

    eventType: string;
    eventID: string;
    eventLabel: string;
    eventTags: string[];

    logID: string;
    logStorageAccount: string;
    logStorageKey: string;
    logStorageContainer: string;
}

export { FunctionInvocationMeta };
