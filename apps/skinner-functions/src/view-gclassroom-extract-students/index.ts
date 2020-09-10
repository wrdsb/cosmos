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
        let schoolCode        = record.schoolCode ? record.schoolCode : "";

        let studentNumber     = record.studentNumber ? record.studentNumber : "";
        let studentFirstName  = record.studentFirstName ? record.studentFirstName : "";
        let studentLastName   = record.studentLastName ? record.studentLastName : "";
        let studentEmail      = record.studentEmail ? record.studentEmail : "";
        let studentOyap       = record.studentOyap ? record.studentOyap : "";

        if (studentNumber !== "") {
            let studentObjectID   = sanitizeID(studentNumber);

            // Extract the 'student' object from the row
            let studentObject = {
                id:                studentObjectID,
                studentNumber:     studentNumber,
                studentEmail:      studentEmail,
                studentFirstName:  studentFirstName,
                studentLastName:   studentLastName,
                schoolCode:        schoolCode,
                studentOyap:       studentOyap
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