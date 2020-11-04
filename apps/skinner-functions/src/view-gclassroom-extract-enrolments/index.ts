import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewGclassroomExtractEnrolmentsFunctionRequest, ViewGclassroomExtractEnrolmentsFunctionRequestPayload, ViewGclassroomRecord, TrilliumEnrolment } from "@cosmos/types";

const viewGclassroomExtractEnrolments: AzureFunction = async function (context: Context, triggerMessage: ViewGclassroomExtractEnrolmentsFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
        functionDataOperation: 'ExtractEnrolments',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewGclassroomExtractEnrolmentsFunctionRequest;
    const payload = triggerObject.payload as ViewGclassroomExtractEnrolmentsFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let enrolmentsSortedObject = {};
    let enrolmentsSortedArrays = {};

    objects.forEach(function(record: ViewGclassroomRecord) {
        let school_code         = record.school_code ? record.school_code : "";
        let class_code          = record.class_code ? record.class_code : "";

        let student_number      = record.student_number ? record.student_number : "";
        let student_grade       = record.student_grade ? record.student_grade : "";
        let student_first_name  = record.student_first_name ? record.student_first_name : "";
        let student_last_name   = record.student_last_name ? record.student_last_name : "";
        let student_email       = record.student_email ? record.student_email : "";

        let staff_number        = record.staff_number ? record.staff_number : "";

        if (school_code !== "" && class_code !== "" && student_number !== "") {
            let classObjectID     = sanitizeID(`${school_code}-${class_code}`);
            let enrolmentObjectID = sanitizeID(`${classObjectID}-${student_number}`);
    
            // Extract the 'enrolment' object from the row
            let enrolmentObject = {
                id:                  enrolmentObjectID,
                school_code:         school_code,
                class_code:          class_code,
                student_number:      student_number,
                student_grade:       student_grade,
                student_first_name:  student_first_name,
                student_last_name:   student_last_name,
                student_email:       student_email,
                staff_number:        staff_number
            } as TrilliumEnrolment;
    
            if (!enrolmentsSortedObject[enrolmentObject.school_code]) {
                enrolmentsSortedObject[enrolmentObject.school_code] = {};
            }
            if (!enrolmentsSortedArrays[enrolmentObject.school_code]) {
                enrolmentsSortedArrays[enrolmentObject.school_code] = [];
            }
    
            enrolmentsSortedObject[enrolmentObject.school_code][enrolmentObjectID] = enrolmentObject;
            enrolmentsSortedArrays[enrolmentObject.school_code].push(enrolmentObject);
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.enrolmentsNowSortedArrays = JSON.stringify(enrolmentsSortedArrays);
    context.bindings.enrolmentsNowSortedObject = JSON.stringify(enrolmentsSortedObject);

    const skinner_trillium_enrolments_reconcile_all_job = {
        "job_type": "Skinner.Trillium.Enrolments.Reconcile.All"
    };
    context.bindings.triggerJobs = [JSON.stringify(skinner_trillium_enrolments_reconcile_all_job)];

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

export default viewGclassroomExtractEnrolments;