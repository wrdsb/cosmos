import { AzureFunction, Context } from "@azure/functions";
import { StorageSharedKeyCredential, DataLakeServiceClient } from "@azure/storage-file-datalake";
import { FunctionInvocation } from "@cosmos/types";

const InvocationPostProcessor: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload as FunctionInvocation;
    const functionInvocationTime = new Date(payload.functionInvocationTimestamp).getTime();

    const functionInvocationProcessed = {
        functionInvocationID: payload.functionInvocationID,
        functionInvocationTimestamp: payload.functionInvocationTimestamp,
        functionInvocationTime: functionInvocationTime,
            
        functionName: payload.functionName,
        functionEventType: `WRDSB.${payload.functionApp}.${payload.functionDataType}.${payload.functionDataOperation}`,
        functionEventID: `${payload.functionApp.toLowerCase()}-functions-${payload.functionName}-${payload.functionInvocationID}`,
        functionLogID: `${functionInvocationTime}-${payload.functionInvocationID}`,
            
        eventLabel: payload.eventLabel,
        eventTags: [
            payload.functionApp.toLowerCase(),
            payload.functionName,
            payload.functionDataType,
            payload.functionDataOperation
        ],

        logStorageAccount: logStorageAccount,
        logStoragePath: `function-${payload.functionName}-logs`,
        logPayload: payload.logPayload
    };

    const logObject = await createLogObject(functionInvocationProcessed);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, functionInvocationProcessed.logStoragePath, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(functionInvocationProcessed);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createInvocationEvent(functionInvocationProcessed);
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    async function createLogObject(functionInvocationProcessed) {
        const logObject = {
            id: functionInvocationProcessed.functionLogID,
            function_name: functionInvocationProcessed.functionName,
            invocation_id: functionInvocationProcessed.functionInvocationID,
            timestamp: functionInvocationProcessed.functionInvocationTimestamp,
            payload: functionInvocationProcessed.logPayload
        };

        return logObject;
    }

    async function storeLogBlob(storageAccount, storageKey, fileSystemName, logObject) {
        const sharedKeyCredential = new StorageSharedKeyCredential(storageAccount, storageKey);
        const dataLakeServiceClient = new DataLakeServiceClient(
             `https://${storageAccount}.blob.core.windows.net`,
            sharedKeyCredential
        );
        const fileSystemClient = dataLakeServiceClient.getFileSystemClient(fileSystemName);

        const fileContent = JSON.stringify(logObject);
        const fileName = logObject.id + '.json';

        const fileClient = fileSystemClient.getFileClient(fileName);
        await fileClient.create();
        await fileClient.append(fileContent, 0, fileContent.length);
        const flushFileResponse = await fileClient.flush(fileContent.length);

        context.log(`Created and uploaded file ${fileName} successfully`, flushFileResponse.requestId);
        return flushFileResponse;
    }

    async function createCallbackMessage(functionInvocationProcessed) {
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

    async function createInvocationEvent(functionInvocationProcessed) {
        const typeURL = '';
        const source = `${logStorageAccount}/${functionInvocationProcessed.logStoragePath}/${functionInvocationProcessed.functionLogID}.json`;
        const label = functionInvocationProcessed.eventLabel;
        const tags = functionInvocationProcessed.eventTags;
    
        const invocationEvent = {
            specversion : "0.3",
            datacontenttype : "application/json",
    
            type : functionInvocationProcessed.functionEventType,
            typeVersion : "1.0.0",
            typeURL: typeURL,
    
            id : functionInvocationProcessed.functionEventID,
            time : functionInvocationProcessed.functionInvocationTimestamp,
            source : source,
    
            label: label,
            tags: tags,
    
            data : {
                functionInvocationID: functionInvocationProcessed.functionInvocationID,
                functionInvocationTime: functionInvocationProcessed.functionInvocationTime,
                functionInvocationTimestamp: functionInvocationProcessed.functionInvocationTimestamp,
            
                functionName: functionInvocationProcessed.functionName,
                functionEventType: functionInvocationProcessed.functionEventType,
                functionEventID: functionInvocationProcessed.functionEventID,
                functionLogID: functionInvocationProcessed.functionLogID,
            
                logStorageAccount: logStorageAccount,
                logStorageContainer: functionInvocationProcessed.logStoragePath,
    
                url: source
            }
        };

        return invocationEvent;
    }
}

export default InvocationPostProcessor;
