import { AzureFunction, Context } from "@azure/functions"

const viewGClassroomExtractClasses: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;

    let classesObject = {};
    let classesArray = [];

    rows.forEach(function(row) {
        let school_code        = row.SCHOOL_CODE;
        let class_code         = row.CLASS_CODE;

        let teacher_ein        = row.TEACHER_EIN ? row.TEACHER_EIN : '0';
        let teacher_email      = row.TEACHER_EMAIL ? row.TEACHER_EMAIL : '0';

        let classObjectID     = sanitizeID(`${school_code}-${class_code}`);

        // Extract the 'class' object from the row
        let classObject = {
            id:             classObjectID,
            school_code:    school_code,
            class_code:     class_code,
            teacher_ein:    teacher_ein,
            teacher_email:  teacher_email
        };

        // Add/overwrite individual objects from this row to their collection objects
        classesObject[classObject.id]        = classObject;
    });

    // Add each class from classesObject to classesArray
    Object.getOwnPropertyNames(classesObject).forEach(function (classID) {
        classesArray.push(classesObject[classID]);
    });    

    // Write out arrays and objects to blobs
    context.bindings.classesNowArray = JSON.stringify(classesArray);
    context.bindings.classesNowObject = JSON.stringify(classesObject);

    let callbackMessage = {
        id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Skinner.View.GClassroom.Extract.Classes',
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

    const sis_classes_reconcile_job = {
        "job_type": "Skinner.Class.Differences.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(sis_classes_reconcile_job)];

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

export default viewGClassroomExtractClasses;