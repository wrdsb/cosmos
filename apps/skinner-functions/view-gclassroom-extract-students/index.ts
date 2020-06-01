import { AzureFunction, Context } from "@azure/functions"

const viewGClassroomExtractStudents: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;

    let studentsObject = {};
    let studentsArray = [];

    rows.forEach(function(row) {
        let school_code        = row.SCHOOL_CODE;

        let student_number     = row.STUDENT_NO;
        let student_first_name = row.STUDENT_FIRST_NAME;
        let student_last_name  = row.STUDENT_LAST_NAME;
        let student_email      = row.STUDENT_EMAIL;
        let student_oyap       = row.OYAP;

        let studentObjectID   = sanitizeID(student_number);

        // Extract the 'student' object from the row
        let studentObject = {
            id:                 studentObjectID,
            student_number:     student_number,
            student_email:      student_email,
            student_first_name: student_first_name,
            student_last_name:  student_last_name,
            school_code:        school_code,
            student_oyap:       student_oyap
        };

        // Add/overwrite individual objects from this row to their collection objects
        studentsObject[studentObject.id]     = studentObject;
    });

    // Add each student from studentsObject to studentsArray
    Object.getOwnPropertyNames(studentsObject).forEach(function (studentID) {
        studentsArray.push(studentsObject[studentID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.studentsNowArray = JSON.stringify(studentsArray);
    context.bindings.studentsNowObject = JSON.stringify(studentsObject);

    let callbackMessage = {
        id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Skinner.View.GClassroom.Extract.Students',
        eventTime: execution_timestamp,
        //subject: ,
        data: {
            event_type: 'function_invocation',
            app: 'wrdsb-skinner',
            function_name: context.executionContext.functionName,
            invocation_id: context.executionContext.invocationId,
            data: {},
            timestamp: execution_timestamp
        },
        dataVersion: '1'
    };

    context.bindings.callbackMessage = JSON.stringify(callbackMessage.data);

    context.log(JSON.stringify(callbackMessage));
    context.done(null, callbackMessage);

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

export default viewGClassroomExtractStudents;