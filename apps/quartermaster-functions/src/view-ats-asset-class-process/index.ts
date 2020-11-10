import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewATSAssetClassProcessFunctionRequest, ViewATSAssetClassProcessFunctionRequestPayload, ViewATSAssetClassRecord } from "@cosmos/types";

const viewATSAssetClassProcess: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetClassProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAssetClass',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewATSAssetClassProcessFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetClassProcessFunctionRequestPayload;

    const rows = context.bindings.panamaBlob;

    let rowsArray = [];

    rows.forEach(function(row) {
        const asset_class_code = row.ASSET_CLASS_CODE ? row.ASSET_CLASS_CODE.trim() : "";
        const full_description = row.FULL_DESCRIPTION ? row.FULL_DESCRIPTION.trim() : "";
        const short_description = row.SHORT_DESCRIPTION ? row.SHORT_DESCRIPTION.trim() : "";
    
        // Extract the 'class' object from the row
        let rowObject = {
            asset_class_code: asset_class_code,
            full_description: full_description,
            short_description: short_description
        } as ViewATSAssetClassRecord;

        rowsArray.push(rowObject);
    });

    // Write out Quartermaster's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    const view_ats_asset_class_extract_asset_class_job =  {
        "job_type": "Quartermaster.View.ATSAssetClass.Extract.AssetClass"
    };
    context.bindings.triggerJobs = [JSON.stringify(view_ats_asset_class_extract_asset_class_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetClassProcess;