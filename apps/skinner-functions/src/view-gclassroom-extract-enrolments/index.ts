import { AzureFunction, Context } from "@azure/functions"

const viewGClassroomExtractEnrolments: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;

    let enrolmentsSortedObject = {};
    let enrolmentsSortedArrays = {};

    rows.forEach(function(row) {
        let school_code        = row.SCHOOL_CODE;
        let class_code         = row.CLASS_CODE;

        let student_number     = row.STUDENT_NO;
        let student_first_name = row.STUDENT_FIRST_NAME;
        let student_last_name  = row.STUDENT_LAST_NAME;
        let student_email      = row.STUDENT_EMAIL;

        let teacher_ein        = row.TEACHER_EIN ? row.TEACHER_EIN : '0';
        let teacher_email      = row.TEACHER_EMAIL ? row.TEACHER_EMAIL : '0';

        let classObjectID     = sanitizeID(`${school_code}-${class_code}`);
        let enrolmentObjectID = sanitizeID(`${classObjectID}-${student_number}`);

        // Extract the 'enrolment' object from the row
        let enrolmentObject = {
            id:                 enrolmentObjectID,
            school_code:        school_code,
            class_code:         class_code,
            student_number:     student_number,
            student_first_name: student_first_name,
            student_last_name:  student_last_name,
            student_email:      student_email,
            teacher_ein:        teacher_ein,
            teacher_email:      teacher_email
        };

        if (!enrolmentsSortedObject[enrolmentObject.school_code]) {
            enrolmentsSortedObject[enrolmentObject.school_code] = {};
        }
        if (!enrolmentsSortedArrays[enrolmentObject.school_code]) {
            enrolmentsSortedArrays[enrolmentObject.school_code] = [];
        }

        enrolmentsSortedObject[enrolmentObject.school_code][enrolmentObject.id] = enrolmentObject;
        enrolmentsSortedArrays[enrolmentObject.school_code].push(enrolmentObject);
    });

    // Write out arrays and objects to blobs
    context.bindings.enrolmentsNowSortedArrays = JSON.stringify(enrolmentsSortedArrays);
    context.bindings.enrolmentsNowSortedObject = JSON.stringify(enrolmentsSortedObject);

    let callbackMessage = {
        id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Skinner.View.GClassroom.Extract.Enrolments',
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

    let sis_enrolments_reconcile_jobs = [];
    Object.getOwnPropertyNames(enrolmentsSortedObject).forEach(school_code => {
        sis_enrolments_reconcile_jobs.push({
            job_type: "Skinner.Enrolment.Differences.Reconcile.Alpha",
            alpha: school_code
        });
    }); 
    context.bindings.triggerJobs = JSON.stringify(sis_enrolments_reconcile_jobs);

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

export default viewGClassroomExtractEnrolments;