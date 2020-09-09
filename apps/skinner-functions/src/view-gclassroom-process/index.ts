import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewGclassroomProcessFunctionRequest, ViewGclassroomProcessFunctionRequestPayload, ViewGclassroomRecord } from "@cosmos/types";

const viewGClassroomProcess: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewSkinnerAssignments',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewGclassroomProcessFunctionRequest;
    const payload = triggerObject.payload as ViewGclassroomProcessFunctionRequestPayload;

    const rows = context.bindings.panamaBlob;

    let rowsArray = [];

    rows.forEach(function(row) {
        let schoolCode        = row.SCHOOL_CODE ? row.SCHOOL_CODE.trim() : "";
        let classCode         = row.CLASS_CODE ? row.CLASS_CODE.trim() : "";

        let studentNumber     = row.STUDENT_NO ? row.STUDENT_NO.trim() : "";
        let studentFirstName  = row.STUDENT_FIRST_NAME ? row.STUDENT_FIRST_NAME.trim() : "";
        let studentLastName   = row.STUDENT_LAST_NAME ? row.STUDENT_LAST_NAME.trim() : "";
        let studentEmail      = row.STUDENT_EMAIL ? row.STUDENT_EMAIL.trim() : "";
        let studentOyap       = row.OYAP ? row.OYAP.trim() : "";

        let staffNumber       = row.STAFF_NO ? row.STAFF_NO.trim() : "";

        // Build the row object from the data
        let rowObject = {
            schoolCode:        schoolCode,
            classCode:         classCode,

            studentNumber:     studentNumber,
            studentFirstName:  studentFirstName,
            studentLastName:   studentLastName,
            studentEmail:      studentEmail,
            studentOyap:       studentOyap,

            staffNumber:       staffNumber
        } as ViewGclassroomRecord;
        
        rowsArray.push(rowObject);
    });

    // Write out Skinner's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    const extract_classes_job = {
        "job_type": "Skinner.View.GClassroom.Extract.Classes"
    };
    const extract_enrolments_job = {
        "job_type": "Skinner.View.GClassroom.Extract.Enrolments"
    };
    const extract_students_job = {
        "job_type": "Skinner.View.GClassroom.Extract.Students"
    };
    const extract_teachers_job = {
        "job_type": "Skinner.View.GClassroom.Extract.Teachers"
    };
    context.bindings.triggerJobs = [
        JSON.stringify(extract_classes_job),
        JSON.stringify(extract_enrolments_job),
        JSON.stringify(extract_students_job),
        JSON.stringify(extract_teachers_job)
    ];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewGClassroomProcess;