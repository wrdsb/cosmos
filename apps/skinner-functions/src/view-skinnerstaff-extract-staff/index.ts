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
        let staff_number  = record.staff_number ? record.staff_number : "";
        let school_code   = record.school_code ? record.school_code : "";
        let school_year   = record.school_year ? record.school_year : "";
        let staff_type    = record.staff_type ? record.staff_type : "";
        let status        = record.status ? record.status : "";

        if (staff_number !== "" && school_code !== "") {
            let thisStaffObjectID = `${staff_number}-${school_code}`;

            let thisStaffObject = {
                id: thisStaffObjectID,
                staff_number: staff_number,
                school_code: school_code,
                school_year: school_year,
                staff_type: staff_type,
                status: status
            } as TrilliumStaff;

            staffArray.push(thisStaffObject);
            staffObject[thisStaffObjectID] = thisStaffObject;
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.staffNowArray = JSON.stringify(staffArray);
    context.bindings.staffNowObject = JSON.stringify(staffObject);

    const skinner_trillium_staff_reconcile_job = {
        jobType: "Skinner.Trillium.Staff.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(skinner_trillium_staff_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewSkinnerStaffExtractStaff;