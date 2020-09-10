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
        let schoolCode        = record.schoolCode ? record.schoolCode : "";
        let classCode         = record.classCode ? record.classCode : "";

        let studentNumber     = record.studentNumber ? record.studentNumber : "";
        let studentFirstName  = record.studentFirstName ? record.studentFirstName : "";
        let studentLastName   = record.studentLastName ? record.studentLastName : "";
        let studentEmail      = record.studentEmail ? record.studentEmail : "";

        let staffNumber       = record.staffNumber ? record.staffNumber : "";

        if (schoolCode !== "" && classCode !== "" && studentNumber !== "") {
            let classObjectID     = sanitizeID(`${schoolCode}-${classCode}`);
            let enrolmentObjectID = sanitizeID(`${classObjectID}-${studentNumber}`);
    
            // Extract the 'enrolment' object from the row
            let enrolmentObject = {
                id:                enrolmentObjectID,
                schoolCode:        schoolCode,
                classCode:         classCode,
                studentNumber:     studentNumber,
                studentFirstName:  studentFirstName,
                studentLastName:   studentLastName,
                studentEmail:      studentEmail,
                staffNumber:       staffNumber
            } as TrilliumEnrolment;
    
            if (!enrolmentsSortedObject[enrolmentObject.schoolCode]) {
                enrolmentsSortedObject[enrolmentObject.schoolCode] = {};
            }
            if (!enrolmentsSortedArrays[enrolmentObject.schoolCode]) {
                enrolmentsSortedArrays[enrolmentObject.schoolCode] = [];
            }
    
            enrolmentsSortedObject[enrolmentObject.schoolCode][enrolmentObjectID] = enrolmentObject;
            enrolmentsSortedArrays[enrolmentObject.schoolCode].push(enrolmentObject);
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.enrolmentsNowSortedArrays = JSON.stringify(enrolmentsSortedArrays);
    context.bindings.enrolmentsNowSortedObject = JSON.stringify(enrolmentsSortedObject);

    let sisEnrolmentsReconcileJobs = [];
    Object.getOwnPropertyNames(enrolmentsSortedObject).forEach(schoolCode => {
        sisEnrolmentsReconcileJobs.push({
            job_type: "Skinner.Enrolment.Differences.Reconcile.Alpha",
            alpha: schoolCode
        });
    }); 
    context.bindings.triggerJobs = JSON.stringify(sisEnrolmentsReconcileJobs);

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