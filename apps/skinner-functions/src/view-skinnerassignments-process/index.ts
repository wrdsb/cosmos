import { AzureFunction, Context } from "@azure/functions"

const viewSkinnerAssignmentsProcess: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;

    let assignmentsArray = [];
    let assignmentsObject = {};

    rows.forEach(function(row) {
        let ein          = row.STAFF_NO ? row.STAFF_NO.trim() : "00000";
        let school_code  = row.SCHOOL_CODE ? row.SCHOOL_CODE.trim() : "";
        let class_code   = row.CLASS_CODE ? row.CLASS_CODE.trim() : "";
        let block        = row.BLOCK ? row.BLOCK.trim() : "";
        let room_number  = row.ROOM_NO ? row.ROOM_NO.trim() : "";

        let assignment = {
            ein:         ein,
            school_code: school_code,
            class_code:  class_code,
            block:       block,
            room_number: room_number
        };

        if (assignment.ein !== "00000") {
            assignmentsArray.push(assignment);
            if (assignmentsObject[assignment.ein]) {
                assignmentsObject[assignment.ein].assignments.push(assignment);
            } else {
                assignmentsObject[assignment.ein] = {
                    id: assignment.ein,
                    ein: assignment.ein,
                    assignments: []
                };
                assignmentsObject[assignment.ein].assignments.push(assignment);
            }
        }
    });

    // Write out Skinner's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(panamaBlob);

    // Write out arrays and objects to blobs
    context.bindings.assignmentsNowArray = JSON.stringify(assignmentsArray);
    context.bindings.assignmentsNowObject = JSON.stringify(assignmentsObject);

    let callbackMessage = {
        id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Skinner.View.SkinnerAssignments.Process',
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

    const sis_assignments_reconcile_job =     {
        "job_type": "Skinner.Assignments.Differences.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(sis_assignments_reconcile_job)];

    context.log(JSON.stringify(callbackMessage));
    context.done(null, callbackMessage);
};

export default viewSkinnerAssignmentsProcess;