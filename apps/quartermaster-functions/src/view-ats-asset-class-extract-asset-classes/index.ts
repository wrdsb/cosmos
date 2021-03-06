import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, QuartermasterJobType, ViewATSAssetClassExtractAssetClassesFunctionRequest, ViewATSAssetClassExtractAssetClassesFunctionRequestPayload, ViewATSAssetClassRecord, ATSAssetClass } from "@cosmos/types";

const viewATSAssetClassExtractAssetClasses: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetClassExtractAssetClassesFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAssetClass',
        functionDataOperation: 'ExtractAssetClasses',
        eventLabel: '',
    } as FunctionInvocation;

    let jobType = '' as QuartermasterJobType;
    jobType = `Quartermaster.ViewATSAssetClass.ExtractAssetClasses`;

    const triggerObject = triggerMessage as ViewATSAssetClassExtractAssetClassesFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetClassExtractAssetClassesFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    const recordsArray = [];
    const recordsObject = {};

    objects.forEach(function(record: ViewATSAssetClassRecord) {
        const asset_class_code  = record.asset_class_code ? record.asset_class_code : "";
        const full_description  = record.full_description ? record.full_description : "";
        const short_description = record.short_description ? record.short_description : "";

        if (asset_class_code !== "" ) {
            const thisObjectID = asset_class_code;

            const thisObject = {
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

    const logPayload = "";
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetClassExtractAssetClasses;