import { AzureFunction, Context } from "@azure/functions"

const viewGClassroomExtractTeachers: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;

    let teachersObject = {};
    let teachersArray = [];

    rows.forEach(function(row) {
        let school_code        = row.SCHOOL_CODE;
        let teacher_ein        = row.TEACHER_EIN ? row.TEACHER_EIN : '0';
        let teacher_email      = row.TEACHER_EMAIL ? row.TEACHER_EMAIL : '0';

        let teacherObjectID   = sanitizeID(teacher_ein);

        // Extract the 'teacher' object from the row
        let teacherObject = {
            id:                 teacherObjectID,
            teacher_ein:        teacher_ein,
            teacher_email:      teacher_email,
            school_code:        school_code
        };
        
        // Add/overwrite individual objects from this row to their collection objects
        teachersObject[teacherObject.id]     = teacherObject;
    });

    // Add each teacher from teachersObject to teachersArray
    Object.getOwnPropertyNames(teachersObject).forEach(function (teacherID) {
        teachersArray.push(teachersObject[teacherID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.teachersNowArray = JSON.stringify(teachersArray);
    context.bindings.teachersNowObject = JSON.stringify(teachersObject);

    let callbackMessage = {
        id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Skinner.View.GClassroom.Extract.Teachers',
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

export default viewGClassroomExtractTeachers;