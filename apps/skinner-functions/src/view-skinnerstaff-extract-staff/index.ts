import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewSkinnerStaffExtractStaffFunctionRequest, ViewSkinnerStaffExtractStaffFunctionRequestPayload, ViewSkinnerStaffRecord } from "@cosmos/types";

const viewSkinnerStaffExtractStaff: AzureFunction = async function (context: Context, triggerMessage: ViewSkinnerStaffExtractStaffFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewSkinnerAssignments',
        functionDataOperation: 'ExtractStaff',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewSkinnerStaffExtractStaffFunctionRequest;
    const payload = triggerObject.payload as ViewSkinnerStaffExtractStaffFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let staffArray = [];
    let staffObject = {};

    objects.forEach(function(staff: ViewSkinnerStaffRecord) {
        if (staff.staffNumber !== "") {
            staffArray.push(staff);
            staffObject[staff.staffNumber] = staff;
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.staffNowArray = JSON.stringify(staffArray);
    context.bindings.staffNowObject = JSON.stringify(staffObject);

    const sis_staff_reconcile_job =     {
        "job_type": "Skinner.Staff.Differences.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(sis_staff_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewSkinnerStaffProcess;