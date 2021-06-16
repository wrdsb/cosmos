import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const viewIPPSLocationsCopy: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewIPPSLocations',
        functionDataOperation: 'Copy',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType = 'WRDSB.Panama.View.IPPSLocations.Copy';
    let statusCode;
    let statusMessage;

    const incomingBlob = context.bindings.incomingBlob;

    if (incomingBlob.length < 300) {
        statusCode = "404"
        statusMessage = "Error: Too few source records. Aborting.";
    } else {
        statusCode = "200";
        statusMessage = "Success: Copied ipps-view-ipps-locations/incoming.json to ipps-view-ipps-locations/now.json.";

        // Copy blob contents
        context.bindings.outgoingBlob = incomingBlob;
    }

    const logPayload = {
        status: statusCode,
        message: statusMessage,
        incomingBlob: "ipps-view-ipps-locations/incoming.json",
        outgoingBlob: "ipps-view-ipps-locations/now.json"
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewIPPSLocationsCopy;
