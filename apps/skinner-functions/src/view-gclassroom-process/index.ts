import { AzureFunction, Context } from "@azure/functions"

const viewGClassroomProcess: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;

    let rowsArray = [];

    rows.forEach(function(row) {
        let school_code        = row.SCHOOL_CODE;
        let class_code         = row.CLASS_CODE;

        let student_number     = row.STUDENT_NO;
        let student_first_name = row.STUDENT_FIRST_NAME;
        let student_last_name  = row.STUDENT_LAST_NAME;
        let student_email      = row.STUDENT_EMAIL;
        let student_oyap       = row.OYAP;

        let teacher_ein        = row.TEACHER_EIN ? row.TEACHER_EIN : '0';
        let teacher_email      = row.TEACHER_EMAIL ? row.TEACHER_EMAIL : '0';

        // Build the row object from the data
        let rowObject = {
            school_code:        school_code,
            class_code:         class_code,

            student_number:     student_number,
            student_first_name: student_first_name,
            student_last_name:  student_last_name,
            student_email:      student_email,
            student_oyap:       student_oyap,

            teacher_ein:        teacher_ein,
            teacher_email:      teacher_email
        };
        
        rowsArray.push(rowObject);
    });

    // Write out Skinner's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    let callbackMessage = {
        id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Skinner.View.GClassroom.Process',
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

    context.log(JSON.stringify(callbackMessage));
    context.done(null, callbackMessage);
};

export default viewGClassroomProcess;