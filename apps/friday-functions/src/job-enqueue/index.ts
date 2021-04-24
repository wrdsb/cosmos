import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FridayJobType, FridayCosmosDBCollectionCopyFunctionRequest, FridayCosmosDBCollectionEmptyFunctionRequest, FridayCosmosDBCollectionRefreshFunctionRequest } from "@cosmos/types";

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Friday',
        functionName: context.executionContext.functionName,
        functionDataType: 'Job',
        functionDataOperation: 'Enqueue',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType = triggerMessage.jobType as FridayJobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;
    const incomingBlob = triggerMessage.incomingBlob;
    const offset = triggerMessage.offset;

    let queueTriggered = '';
    let queueMessage = {};
    let sentQueueMessage = false;

    let logPayload = {
        status: '',
        message: '',
        queueMessage: {},
        queueTriggered: '',
        error: '',
        result: ''
    };
    const notification = {};

    if (jobType) {
        switch (jobType) {
            case 'Quartermaster.DeviceLoanSubmissions.Copy.ProdDev':
                queueTriggered = 'cosmosdb-collection-copy';
                queueMessage = {
                } as FridayCosmosDBCollectionCopyFunctionRequest;
                context.bindings.cosmosdbCollectionCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'Quartermaster.DeviceLoanSubmissions.Copy.ProdTest':
                queueTriggered = 'cosmosdb-collection-copy';
                queueMessage = {
                } as FridayCosmosDBCollectionCopyFunctionRequest;
                context.bindings.cosmosdbCollectionCopy = queueMessage;
                sentQueueMessage = true;
                break;

            case 'Quartermaster.DeviceLoanSubmissions.Refresh.Dev':
                queueTriggered = 'cosmosdb-collection-refresh';
                queueMessage = {
                } as FridayCosmosDBCollectionRefreshFunctionRequest;
                context.bindings.cosmosdbCollectionRefresh = queueMessage;
                sentQueueMessage = true;
                break;
    
            case 'Quartermaster.DeviceLoanSubmissions.Refresh.Prod':
                queueTriggered = 'cosmosdb-collection-refresh';
                queueMessage = {
                } as FridayCosmosDBCollectionRefreshFunctionRequest;
                context.bindings.cosmosdbCollectionRefresh = queueMessage;
                sentQueueMessage = true;
                break;

            default:
                context.bindings.callbackMessage = JSON.stringify({
                    status: 422,
                    body: "Unprocessable Entity. Cannot find the specified jobType."
                });
                break;
        }
    }
    else {
        context.bindings.callbackMessage = JSON.stringify({
            status: 400,
            body: "Please pass a valid jobType in the request body."
        });
    }

    if (sentQueueMessage) {
        logPayload = {
            status: "200",
            message: `Sent ${queueMessage} to ${queueTriggered}`,
            queueMessage: queueMessage,
            queueTriggered: queueTriggered,
            result: '',
            error: ''
        };
    }

    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default jobEnqueue;
