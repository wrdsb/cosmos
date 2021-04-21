import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation,
    QuartermasterCommandFunctionRequestBody,
    QuartermasterCommandJobType,
    QuartermasterCommandOperation,
    QuartermasterCommandFunctionRequestPayload } from "@cosmos/types";

const quartermasterCommandQueue: AzureFunction = async function (context: Context, triggerMessage: QuartermasterCommandFunctionRequestBody): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'Any',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as QuartermasterCommandFunctionRequestBody;
    const jobType = triggerObject.jobType as QuartermasterCommandJobType;
    const operation = triggerObject.operation as QuartermasterCommandOperation;
    const payload = triggerObject.payload as QuartermasterCommandFunctionRequestPayload;

    switch (jobType) {
        case 'Quartermaster.DeviceLoanSubmission.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.DeviceLoan.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.Asset.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignment.Create':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
    
        case 'Quartermaster.AssetAssignment.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignmentHistory.Materialize':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignmentHistory.MaterializeAll':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignmentHistory.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetEntitlement.Store':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAssetChecksum.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAsset.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAsset.ExtractAssets':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
                
        case 'Quartermaster.ViewATSAssetClass.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
                    
        case 'Quartermaster.ViewATSAssetClass.ExtractAssetClasses':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
        
        case 'Quartermaster.ViewATSAssetType.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
            
        case 'Quartermaster.ViewATSAssetType.ExtractAssetTypes':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAssetClassType.Process':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAssetClassType.ExtractAssetClassTypes':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
        
        case 'Quartermaster.ATSAsset.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ATSAssetClass.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ATSAssetType.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ATSAssetClassType.Reconcile':
            context.bindings.jobEnqueue = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        default:
            break;
    }

    const response = {
        header: {
            status: 202,
            message: `Accepted. Enqueued jobType ${jobType}.`,
            chatter: `Wilco. Create and process ${jobType} job.`,
            timestamp: functionInvocation.functionInvocationTimestamp,
        },
        status: 202,
        jobType: jobType,
        operation: operation,
        payload: payload
    };

    //context.res = {
        //status: response.header.status,
        //body: response
    //}

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default quartermasterCommandQueue;
