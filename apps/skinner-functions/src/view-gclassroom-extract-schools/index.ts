import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewGclassroomExtractSchoolsFunctionRequest, ViewGclassroomExtractSchoolsFunctionRequestPayload, ViewGclassroomRecord, TrilliumSchool } from "@cosmos/types";

const viewGclassroomExtractSchools: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomExtractSchoolsFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
        functionDataOperation: 'ExtractSchools',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewGclassroomExtractSchoolsFunctionRequest;
    const payload = triggerObject.payload as ViewGclassroomExtractSchoolsFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let SchoolsObject = {};
    let SchoolsArray = [];

    objects.forEach(function(record: ViewGclassroomRecord) {
        let school_code   = record.school_code ? record.school_code : "";

        // we don't care if a teacher is assigned yet
        if (school_code !== "") {
            let schoolObjectID = school_code;

            // Extract the 'school' object from the row
            let schoolObject = {
                id: schoolObjectID,
                school_code: school_code
            } as TrilliumSchool;
    
            // Add/overwrite individual objects from this row to their collection objects
            SchoolsObject[schoolObjectID] = schoolObject;
        }
    });

    // Add each school from SchoolsObject to SchoolsArray
    Object.getOwnPropertyNames(SchoolsObject).forEach(function (schoolID) {
        SchoolsArray.push(SchoolsObject[schoolID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.SchoolsNowArray = JSON.stringify(SchoolsArray);
    context.bindings.SchoolsNowObject = JSON.stringify(SchoolsObject);

    const sis_Schools_reconcile_job = {
        "job_type": "Skinner.Schools.Differences.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(sis_Schools_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewGclassroomExtractSchools;