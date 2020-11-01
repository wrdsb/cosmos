import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewGclassroomExtractStudentsFunctionRequest, ViewGclassroomExtractStudentsFunctionRequestPayload, ViewGclassroomRecord, TrilliumStudent } from "@cosmos/types";

const viewGclassroomExtractStudents: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomExtractStudentsFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
        functionDataOperation: 'ExtractClasses',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewGclassroomExtractStudentsFunctionRequest;
    const payload = triggerObject.payload as ViewGclassroomExtractStudentsFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let studentsObject = {};
    let studentsArray = [];

    objects.forEach(function(record: ViewGclassroomRecord) {
        let school_code         = record.school_code ? record.school_code : "";

        let student_number      = record.student_number ? record.student_number : "";
        let student_grade       = record.student_grade ? record.student_grade : "";
        let student_first_name  = record.student_first_name ? record.student_first_name : "";
        let student_last_name   = record.student_last_name ? record.student_last_name : "";
        let student_email       = record.student_email ? record.student_email : "";
        let student_oyap        = record.student_oyap ? record.student_oyap : "";
        let student_shsm_sector = record.student_shsm_sector ? record.student_shsm_sector : "";

        if (student_number !== "") {
            let studentObjectID   = sanitizeID(student_number);

            // Extract the 'student' object from the row
            let studentObject = {
                id:                  studentObjectID,
                student_number:      student_number,
                student_grade:       student_grade,
                student_email:       student_email,
                student_first_name:  student_first_name,
                student_last_name:   student_last_name,
                school_code:         school_code,
                student_oyap:        student_oyap,
                student_shsm_sector: student_shsm_sector
            } as TrilliumStudent;

            // Add/overwrite individual objects from this row to their collection objects
            studentsObject[studentObjectID] = studentObject;
        }
    });

    // Add each student from studentsObject to studentsArray
    Object.getOwnPropertyNames(studentsObject).forEach(function (studentID) {
        studentsArray.push(studentsObject[studentID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.studentsNowArray = JSON.stringify(studentsArray);
    context.bindings.studentsNowObject = JSON.stringify(studentsObject);

    const sis_classes_reconcile_job = {
        "job_type": "Skinner.Student.Differences.Reconcile"
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

export default viewGclassroomExtractStudents;