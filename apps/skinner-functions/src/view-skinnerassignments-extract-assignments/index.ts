import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewSkinnerAssignmentsExtractAssignmentsFunctionRequest, ViewSkinnerAssignmentsExtractAssignmentsFunctionRequestPayload, ViewSkinnerAssignmentsRecord, TrilliumStaff, TrilliumAssignment } from "@cosmos/types";

const viewSkinnerAssignmentsExtractAssignments: AzureFunction = async function (context: Context, triggerMessage: ViewSkinnerAssignmentsExtractAssignmentsFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewSkinnerAssignments',
        functionDataOperation: 'ExtractAssignments',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewSkinnerAssignmentsExtractAssignmentsFunctionRequest;
    const payload = triggerObject.payload as ViewSkinnerAssignmentsExtractAssignmentsFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let assignmentsArray = [];
    let assignmentsObject = {};

    objects.forEach(function(record: ViewSkinnerAssignmentsRecord) {
        let staffNumber = record.staffNumber ? record.staffNumber : "";
        let schoolCode = record.schoolCode ? record.schoolCode : "";
        let classCode = record.classCode ? record.classCode : "";
        let block = record.block ? record.block : "";
        let roomNumber = record.roomNumber ? record.roomNumber : "";
      
        if (staffNumber !== "") {
            let assignmentObjectID = `${staffNumber}-${schoolCode}-${classCode}`;

            let assignmentObject = {
                id: assignmentObjectID,
                staffNumber: staffNumber,
                schoolCode: schoolCode,
                classCode: classCode,
                block: block,
                roomNumber: roomNumber
            } as TrilliumAssignment;

            assignmentsArray.push(assignmentObject);

            if (assignmentsObject[assignmentObject.staffNumber]) {
                assignmentsObject[assignmentObject.staffNumber].assignments.push(assignmentObject);
            } else {
                assignmentsObject[assignmentObject.staffNumber] = {
                    id: assignmentObject.staffNumber,
                    staffNumber: assignmentObject.staffNumber,
                    assignments: []
                };
                assignmentsObject[assignmentObject.staffNumber].assignments.push(assignmentObject);
            }
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.assignmentsNowArray = JSON.stringify(assignmentsArray);
    context.bindings.assignmentsNowObject = JSON.stringify(assignmentsObject);

    const sis_assignments_reconcile_job =     {
        "job_type": "Skinner.Assignments.Differences.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(sis_assignments_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewSkinnerAssignmentsExtractAssignments;