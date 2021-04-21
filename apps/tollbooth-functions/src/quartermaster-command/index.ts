import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation,
    QuartermasterCommandFunctionRequest,
    QuartermasterCommandFunctionRequestBody,
    QuartermasterCommandJobType,
    QuartermasterCommandOperation,
    QuartermasterCommandFunctionRequestPayload } from "@cosmos/types";

const quartermasterCommand: AzureFunction = async function (context: Context, req: QuartermasterCommandFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'Any',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req as QuartermasterCommandFunctionRequest;
    const requestBody = request.body as QuartermasterCommandFunctionRequestBody;
    const jobType = requestBody.jobType as QuartermasterCommandJobType;
    const operation = requestBody.operation as QuartermasterCommandOperation;
    const payload = requestBody.payload as QuartermasterCommandFunctionRequestPayload;

    context.log(`tollbooth request body: ${JSON.stringify(requestBody)}`);

    switch (jobType) {
        case 'Quartermaster.DeviceLoanSubmission.Store':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.DeviceLoanSubmission.Return':
            context.bindings.quartermasterCommand = {
                jobType: 'Quartermaster.DeviceLoanSubmission.Store',
                operation: operation,
                payload: payload
            };
            break;
    
        case 'Quartermaster.DeviceLoan.Store':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.DeviceLoan.Return':
            context.bindings.quartermasterCommand = {
                jobType: 'Quartermaster.DeviceLoanSubmission.Store',
                operation: operation,
                payload: payload
            };
            break;
    
        case 'Quartermaster.Asset.Store':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignment.Create':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
    
        case 'Quartermaster.AssetAssignment.Store':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignmentHistory.Materialize':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignmentHistory.MaterializeAll':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetAssignmentHistory.Store':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.AssetEntitlement.Store':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAssetChecksum.Process':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAsset.Process':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAsset.ExtractAssets':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
                
        case 'Quartermaster.ViewATSAssetClass.Process':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
                    
        case 'Quartermaster.ViewATSAssetClass.ExtractAssetClasses':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
        
        case 'Quartermaster.ViewATSAssetType.Process':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
            
        case 'Quartermaster.ViewATSAssetType.ExtractAssetTypes':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAssetClassType.Process':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ViewATSAssetClassType.ExtractAssetClassTypes':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
        
        case 'Quartermaster.ATSAsset.Reconcile':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ATSAssetClass.Reconcile':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ATSAssetType.Reconcile':
            context.bindings.quartermasterCommand = {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.ATSAssetClassType.Reconcile':
            context.bindings.quartermasterCommand = {
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

    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default quartermasterCommand;
