import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewSkinnerStaffProcessFunctionRequest, ViewSkinnerStaffProcessFunctionRequestPayload, ViewSkinnerStaffRecord } from "@cosmos/types";

const viewSkinnerStaffProcess: AzureFunction = async function (context: Context, triggerMessage: ViewSkinnerStaffProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewSkinnerStaff',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewSkinnerStaffProcessFunctionRequest;
    const payload = triggerObject.payload as ViewSkinnerStaffProcessFunctionRequestPayload;

    const rows = context.bindings.panamaBlob;

    let rowsArray = [];

    rows.forEach(function(row) {
        let staffNumber  = row.STAFF_NO ? row.STAFF_NO.trim() : "";
        let schoolCode   = row.SCHOOL_CODE ? row.SCHOOL_CODE.trim() : "";
        let schoolYear   = row.SCHOOL_YEAR ? row.SCHOOL_YEAR.trim() : "";
        let staffType    = row.STAFF_TYPE ? row.STAFF_TYPE.trim() : "";
        let status       = row.STATUS ? row.STATUS.trim() : "";

        // Extract the 'class' object from the row
        let rowObject = {
            staffNumber:   staffNumber,
            schoolCode:    schoolCode,
            schoolYear:    schoolYear,
            staffType:     staffType,
            status:        status
        } as ViewSkinnerStaffRecord;

        rowsArray.push(rowObject);
    });

    // Write out Skinner's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

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