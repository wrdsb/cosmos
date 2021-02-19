import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewATSAssetTypeProcessFunctionRequest, ViewATSAssetTypeProcessFunctionRequestPayload, ViewATSAssetTypeRecord } from "@cosmos/types";

const viewATSAssetTypeProcess: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetTypeProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAssetType',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewATSAssetTypeProcessFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetTypeProcessFunctionRequestPayload;

    const rows = context.bindings.panamaBlob;

    const rowsArray = [];

    rows.forEach(function(row) {
        const asset_type_code = row.ASSET_TYPE_CODE ? row.ASSET_TYPE_CODE.trim() : "";
        const full_description = row.FULL_DESCRIPTION ? row.FULL_DESCRIPTION.trim() : "";
        const short_description = row.SHORT_DESCRIPTION ? row.SHORT_DESCRIPTION.trim() : "";
        const engraved_id_type = row.ENGRAVED_ID_TYPE ? row.ENGRAVED_ID_TYPE.trim() : "";
    
        // Extract the 'class' object from the row
        const rowObject = {
            asset_type_code: asset_type_code,
            full_description: full_description,
            short_description: short_description,
            engraved_id_type: engraved_id_type
        } as ViewATSAssetTypeRecord;

        rowsArray.push(rowObject);
    });

    // Write out Quartermaster's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    const view_ats_asset_type_extract_asset_type_job =  {
        jobType: "WRDSB.Quartermaster.View.AssetType.Extract.AssetTypes"
    };
    context.bindings.triggerJobs = [JSON.stringify(view_ats_asset_type_extract_asset_type_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetTypeProcess;