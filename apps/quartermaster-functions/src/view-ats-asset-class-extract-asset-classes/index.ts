import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewATSAssetClassExtractAssetClassesFunctionRequest, ViewATSAssetClassExtractAssetClassesFunctionRequestPayload, ViewATSAssetClassRecord, ATSAssetClass } from "@cosmos/types";

const viewATSAssetClassExtractAssetClasses: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetClassExtractAssetClassesFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAssetClass',
        functionDataOperation: 'ExtractAssetClasses',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewATSAssetClassExtractAssetClassesFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetClassExtractAssetClassesFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let recordsArray = [];
    let recordsObject = {};

    objects.forEach(function(record: ViewATSAssetClassRecord) {
        const asset_class_code  = record.asset_class_code ? record.asset_class_code : "";
        const full_description  = record.full_description ? record.full_description : "";
        const short_description = record.short_description ? record.short_description : "";

        if (asset_class_code !== "" ) {
            let thisObjectID = asset_class_code;

            let thisObject = {
                id: thisObjectID,
                asset_class_code: asset_class_code,
                full_description: full_description,
                short_description: short_description
            } as ATSAssetClass;

            recordsArray.push(thisObject);
            recordsObject[thisObjectID] = thisObject;
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.recordsNowArray = JSON.stringify(recordsArray);
    context.bindings.recordsNowObject = JSON.stringify(recordsObject);

    const quartermaster_ats_asset_classes_reconcile_job = {
        "jobType": "Quartermaster.ATS.AssetClasses.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(quartermaster_ats_asset_classes_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetClassExtractAssetClasses;