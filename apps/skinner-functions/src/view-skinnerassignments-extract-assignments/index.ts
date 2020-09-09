import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewSkinnerAssignmentsExtractAssignmentsFunctionRequest, ViewSkinnerAssignmentsExtractAssignmentsFunctionRequestPayload, ViewSkinnerAssignmentsRecord } from "@cosmos/types";

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

    objects.forEach(function(assignment: ViewSkinnerAssignmentsRecord) {
        if (assignment.staffNumber !== "") {

            assignmentsArray.push(assignment);

            if (assignmentsObject[assignment.staffNumber]) {
                assignmentsObject[assignment.staffNumber].assignments.push(assignment);
            } else {
                assignmentsObject[assignment.staffNumber] = {
                    id: assignment.staffNumber,
                    staffNumber: assignment.staffNumber,
                    assignments: []
                };
                assignmentsObject[assignment.staffNumber].assignments.push(assignment);
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