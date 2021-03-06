import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, QuartermasterJobType, ViewATSAssetTypeExtractAssetTypesFunctionRequest, ViewATSAssetTypeExtractAssetTypesFunctionRequestPayload, ViewATSAssetTypeRecord, ATSAssetType } from "@cosmos/types";

const viewATSAssetTypeExtractAssetTypes: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetTypeExtractAssetTypesFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAssetType',
        functionDataOperation: 'ExtractAssetTypes',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as QuartermasterJobType;
    jobType = 'Quartermaster.ViewATSAssetType.ExtractAssetTypes';

    const triggerObject = triggerMessage as ViewATSAssetTypeExtractAssetTypesFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetTypeExtractAssetTypesFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    const recordsArray = [];
    const recordsObject = {};

    objects.forEach(function(record: ViewATSAssetTypeRecord) {
        const asset_type_code  = record.asset_type_code ? record.asset_type_code : "";
        const full_description  = record.full_description ? record.full_description : "";
        const short_description  = record.short_description ? record.short_description : "";
        const engraved_id_type = record.engraved_id_type ? record.engraved_id_type : "";

        if (asset_type_code !== "" ) {
            const thisObjectID = asset_type_code;

            const thisObject = {
                id: thisObjectID,
                asset_type_code: asset_type_code,
                full_description: full_description,
                short_description: short_description,
                engraved_id_type: engraved_id_type
            } as ATSAssetType;

            recordsArray.push(thisObject);
            recordsObject[thisObjectID] = thisObject;
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.recordsNowArray = JSON.stringify(recordsArray);
    context.bindings.recordsNowObject = JSON.stringify(recordsObject);

    const logPayload = "";
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetTypeExtractAssetTypes;