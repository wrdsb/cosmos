import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, ViewSkinnerAssignmentsProcessFunctionRequest, ViewSkinnerAssignmentsProcessFunctionRequestPayload, ViewSkinnerAssignmentsRecord } from "@cosmos/types";

const viewSkinnerAssignmentsProcess: AzureFunction = async function (context: Context, triggerMessage: ViewSkinnerAssignmentsProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewSkinnerAssignments',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewSkinnerAssignmentsProcessFunctionRequest;
    const payload = triggerObject.payload as ViewSkinnerAssignmentsProcessFunctionRequestPayload;

    const rows = context.bindings.panamaBlob;

    let rowsArray = [];

    rows.forEach(function(row) {
        let staff_number  = row.STAFF_NO ? row.STAFF_NO.trim() : "";
        let school_code   = row.SCHOOL_CODE ? row.SCHOOL_CODE.trim() : "";
        let class_code    = row.CLASS_CODE ? row.CLASS_CODE.trim() : "";
        let block        = row.BLOCK ? row.BLOCK.trim() : "";
        let room_number   = row.ROOM_NO ? row.ROOM_NO.trim() : "";

        let rowObject = {
            staff_number: staff_number,
            school_code:  school_code,
            class_code:   class_code,
            block:       block,
            room_number:  room_number
        } as ViewSkinnerAssignmentsRecord;

        rowsArray.push(rowObject);
    });

    // Write out Skinner's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

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

export default viewSkinnerAssignmentsProcess;