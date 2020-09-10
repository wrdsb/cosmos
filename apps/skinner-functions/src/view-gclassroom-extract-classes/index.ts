import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewGclassroomExtractClassesFunctionRequest, ViewGclassroomExtractClassesFunctionRequestPayload, ViewGclassroomRecord, TrilliumClass } from "@cosmos/types";

const viewGclassroomExtractClasses: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomExtractClassesFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
        functionDataOperation: 'ExtractClasses',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewGclassroomExtractClassesFunctionRequest;
    const payload = triggerObject.payload as ViewGclassroomExtractClassesFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let classesObject = {};
    let classesArray = [];

    objects.forEach(function(record: ViewGclassroomRecord) {
        let schoolCode   = record.schoolCode ? record.schoolCode : "";
        let classCode    = record.classCode ? record.classCode : "";
        let staffNumber  = record.staffNumber ? record.staffNumber : "";  

        // we don't care if a teacher is assigned yet
        if (schoolCode !== "" && classCode !== "") {
            let classObjectID = sanitizeID(`${schoolCode}-${classCode}`);

            // Extract the 'class' object from the row
            let classObject = {
                id: classObjectID,
                schoolCode: schoolCode,
                classCode: classCode,
                staffNumber: staffNumber
            } as TrilliumClass;
    
            // Add/overwrite individual objects from this row to their collection objects
            classesObject[classObjectID] = classObject;
        }
    });

    // Add each class from classesObject to classesArray
    Object.getOwnPropertyNames(classesObject).forEach(function (classID) {
        classesArray.push(classesObject[classID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.classesNowArray = JSON.stringify(classesArray);
    context.bindings.classesNowObject = JSON.stringify(classesObject);

    const sis_classes_reconcile_job = {
        "job_type": "Skinner.Class.Differences.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(sis_classes_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    function sanitizeID(id)
    {
        while (id.includes("/")) {
            id = id.split("/").join("-");
        }

        while (id.includes("\/")) {
            id = id.split("\/").join("-");
        }

        return id;
    }
};

export default viewGclassroomExtractClasses;