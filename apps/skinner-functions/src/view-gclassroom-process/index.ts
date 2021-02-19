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
        let school_code         = row.SCHOOL_CODE ? row.SCHOOL_CODE.trim() : "";
        let class_code          = row.CLASS_CODE ? row.CLASS_CODE.trim() : "";

        let student_number      = row.STUDENT_NO ? row.STUDENT_NO.trim() : "";
        let student_grade       = row.GRADE ? row.GRADE.trim() : "";
        let student_first_name  = row.STUDENT_FIRST_NAME ? row.STUDENT_FIRST_NAME.trim() : "";
        let student_last_name   = row.STUDENT_LAST_NAME ? row.STUDENT_LAST_NAME.trim() : "";
        let student_email       = row.STUDENT_EMAIL ? row.STUDENT_EMAIL.trim() : "";
        let student_oyap        = row.OYAP ? row.OYAP.trim() : "";
        let student_shsm_sector = row.SHSM_SECTOR ? row.SHSM_SECTOR.trim() : "";

        let teacher_ein         = row.TEACHER_EIN ? row.TEACHER_EIN.trim() : "";
        let staff_number        = row.STAFF_NUMBER ? row.STAFF_NUMBER.trim() : teacher_ein;

        // Build the row object from the data
        let rowObject = {
            school_code:         school_code,
            class_code:          class_code,

            student_number:      student_number,
            student_grade:       student_grade,
            student_first_name:  student_first_name,
            student_last_name:   student_last_name,
            student_email:       student_email,
            student_oyap:        student_oyap,
            student_shsm_sector: student_shsm_sector,

            staff_number:        staff_number
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