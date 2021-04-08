import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewGclassroomProcessFunctionRequest, ViewGclassroomProcessFunctionRequestPayload, ViewGclassroomRecord } from "@cosmos/types";

const viewGClassroomProcess: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
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
        let studentGrade      = row.GRADE ? row.GRADE.trim() : "";
        let studentFirstName  = row.STUDENT_FIRST_NAME ? row.STUDENT_FIRST_NAME.trim() : "";
        let studentLastName   = row.STUDENT_LAST_NAME ? row.STUDENT_LAST_NAME.trim() : "";
        let studentEmail      = row.STUDENT_EMAIL ? row.STUDENT_EMAIL.trim() : "";
        let studentOYAP       = row.OYAP ? row.OYAP.trim() : "";
        let studentSHSMSector = row.SHSM_SECTOR ? row.SHSM_SECTOR.trim() : "";

        let teacherEIN        = row.TEACHER_EIN ? row.TEACHER_EIN.trim() : "";
        let staffNumber       = row.STAFF_NUMBER ? row.STAFF_NUMBER.trim() : teacherEIN;

        // Build the row object from the data
        let rowObject = {
            schoolCode:        schoolCode,
            classCode:         classCode,

            studentNumber:     studentNumber,
            studentGrade:      studentGrade,
            studentFirstName:  studentFirstName,
            studentLastName:   studentLastName,
            studentEmail:      studentEmail,
            studentOYAP:       studentOYAP,
            studentSHSMSector: studentSHSMSector,

            staffNumber:       staffNumber
        } as ViewGclassroomRecord;
        
        rowsArray.push(rowObject);
    });

    // Write out Skinner's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    const skinner_view_gclassroom_extract_classes_job = {
        jobType: "Skinner.View.GClassroom.Extract.Classes"
    };
    const skinner_view_gclassroom_extract_enrolments_job = {
        jobType: "Skinner.View.GClassroom.Extract.Enrolments"
    };
    const skinner_view_gclassroom_extract_schools_job = {
        jobType: "Skinner.View.GClassroom.Extract.Schools"
    };
    const skinner_view_gclassroom_extract_students_job = {
        jobType: "Skinner.View.GClassroom.Extract.Students"
    };
    context.bindings.triggerJobs = [
        JSON.stringify(skinner_view_gclassroom_extract_classes_job),
        JSON.stringify(skinner_view_gclassroom_extract_enrolments_job),
        JSON.stringify(skinner_view_gclassroom_extract_schools_job),
        JSON.stringify(skinner_view_gclassroom_extract_students_job)
    ];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewGClassroomProcess;