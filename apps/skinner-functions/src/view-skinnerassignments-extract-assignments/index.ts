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
        let staff_number = record.staff_number ? record.staff_number : "";
        let school_code = record.school_code ? record.school_code : "";
        let class_code = record.class_code ? record.class_code : "";
        let block = record.block ? record.block : "";
        let room_number = record.room_number ? record.room_number : "";
      
        if (staff_number !== "") {
            let assignmentObjectID = `${staff_number}-${school_code}-${class_code}`;

            let assignmentObject = {
                id: assignmentObjectID,
                staff_number: staff_number,
                school_code: school_code,
                class_code: class_code,
                block: block,
                room_number: room_number
            } as TrilliumAssignment;

            assignmentsArray.push(assignmentObject);

            if (assignmentsObject[assignmentObject.staff_number]) {
                assignmentsObject[assignmentObject.staff_number].assignments[assignmentObjectID] = assignmentObject;
            } else {
                assignmentsObject[assignmentObject.staff_number] = {
                    id: assignmentObject.staff_number,
                    staff_number: assignmentObject.staff_number,
                    assignments: {}
                };
                assignmentsObject[assignmentObject.staff_number].assignments[assignmentObjectID] = assignmentObject;
            }
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.assignmentsNowArray = JSON.stringify(assignmentsArray);
    context.bindings.assignmentsNowObject = JSON.stringify(assignmentsObject);

    const skinner_trillium_assignments_reconcile_job = {
        jobType: "Skinner.Trillium.Assignments.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(skinner_trillium_assignments_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewSkinnerAssignmentsExtractAssignments;