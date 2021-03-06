import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, QuartermasterJobType, ViewATSAssetClassTypeExtractAssetClassTypesFunctionRequest, ViewATSAssetClassTypeExtractAssetClassTypesFunctionRequestPayload, ViewATSAssetClassTypeRecord, ATSAssetClassType } from "@cosmos/types";

const viewATSAssetClassTypeExtractAssetClassTypes: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetClassTypeExtractAssetClassTypesFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAssetClassType',
        functionDataOperation: 'ExtractAssetClassTypes',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as QuartermasterJobType;
    jobType = 'Quartermaster.ViewATSAssetClassType.ExtractAssetClassTypes';

    const triggerObject = triggerMessage as ViewATSAssetClassTypeExtractAssetClassTypesFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetClassTypeExtractAssetClassTypesFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    const recordsArray = [];
    const recordsObject = {};

    objects.forEach(function(record: ViewATSAssetClassTypeRecord) {
        const asset_class_code  = record.asset_class_code ? record.asset_class_code : "";
        const asset_type_code  = record.asset_type_code ? record.asset_type_code : "";
        const engraved_id_prefix = record.engraved_id_prefix ? record.engraved_id_prefix : "";

        if (asset_class_code !== "" && asset_type_code !== "" ) {
            const thisObjectID = `${asset_class_code}-${asset_type_code}`;

            const thisObject = {
                id: thisObjectID,
                asset_class_code: asset_class_code,
                asset_type_code: asset_type_code,
                engraved_id_prefix: engraved_id_prefix
            } as ATSAssetClassType;

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

export default viewATSAssetClassTypeExtractAssetClassTypes;