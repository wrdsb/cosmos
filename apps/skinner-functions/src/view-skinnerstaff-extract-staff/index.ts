import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewSkinnerStaffExtractStaffFunctionRequest, ViewSkinnerStaffExtractStaffFunctionRequestPayload, ViewSkinnerStaffRecord, TrilliumStudent, TrilliumStaff } from "@cosmos/types";

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

    objects.forEach(function(record: ViewSkinnerStaffRecord) {
        let staffNumber  = record.staffNumber ? record.staffNumber : "";
        let schoolCode   = record.schoolCode ? record.schoolCode : "";
        let schoolYear   = record.schoolYear ? record.schoolYear : "";
        let staffType    = record.staffType ? record.staffType : "";
        let status       = record.status ? record.status : "";

        if (staffNumber !== "" && schoolCode !== "") {
            let staffObjectID = `${staffNumber}-${schoolCode}`;

            let staffObject = {
                id: staffObjectID,
                staffNumber: staffNumber,
                schoolCode: schoolCode,
                schoolYear: schoolYear,
                staffType: staffType,
                status: status
            } as TrilliumStaff;

            staffArray.push(staffObject);
            staffObject[staffObjectID] = staffObject;
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