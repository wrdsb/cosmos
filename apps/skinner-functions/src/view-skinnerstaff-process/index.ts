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
        let staff_number  = row.STAFF_NO ? row.STAFF_NO.trim() : "";
        let school_code   = row.SCHOOL_CODE ? row.SCHOOL_CODE.trim() : "";
        let school_year   = row.SCHOOL_YEAR ? row.SCHOOL_YEAR.trim() : "";
        let staff_type    = row.STAFF_TYPE ? row.STAFF_TYPE.trim() : "";
        let status       = row.STATUS ? row.STATUS.trim() : "";

        // Extract the 'class' object from the row
        let rowObject = {
            staff_number:   staff_number,
            school_code:    school_code,
            school_year:    school_year,
            staff_type:     staff_type,
            status:        status
        } as ViewSkinnerStaffRecord;

        rowsArray.push(rowObject);
    });

    // Write out Skinner's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    const skinner_view_skinnerstaff_extract_staff_job =  {
        "job_type": "Skinner.View.SkinnerStaff.Extract.Staff"
    };
    context.bindings.triggerJobs = [JSON.stringify(skinner_view_skinnerstaff_extract_staff_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewSkinnerStaffProcess;