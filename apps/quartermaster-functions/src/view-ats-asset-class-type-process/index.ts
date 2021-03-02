import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, QuartermasterJobType, ViewATSAssetClassTypeProcessFunctionRequest, ViewATSAssetClassTypeProcessFunctionRequestPayload, ViewATSAssetClassTypeRecord } from "@cosmos/types";

const viewATSAssetClassTypeProcess: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetClassTypeProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAssetClassType',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as QuartermasterJobType;
    jobType = 'Quartermaster.ViewATSAssetClassType.Process';

    const triggerObject = triggerMessage as ViewATSAssetClassTypeProcessFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetClassTypeProcessFunctionRequestPayload;

    const rows = context.bindings.panamaBlob;

    const rowsArray = [];

    rows.forEach(function(row) {
        const asset_class_code = row.ASSET_CLASS_CODE ? row.ASSET_CLASS_CODE.trim() : "";
        const asset_type_code = row.ASSET_TYPE_CODE ? row.ASSET_TYPE_CODE.trim() : "";
        const engraved_id_prefix = row.ENGRAVED_ID_PREFIX ? row.ENGRAVED_ID_PREFIX.trim() : "";
    
        // Extract the 'class' object from the row
        const rowObject = {
            asset_class_code: asset_class_code,
            asset_type_code: asset_type_code,
            engraved_id_prefix: engraved_id_prefix
        } as ViewATSAssetClassTypeRecord;

        rowsArray.push(rowObject);
    });

    // Write out Quartermaster's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    const logPayload = "";
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetClassTypeProcess;