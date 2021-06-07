import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType, IPPSPerson } from "@cosmos/types";

const viewIPPSPeopleProcess: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewIPPSPeople',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as FlendersonJobType;
    jobType = 'WRDSB.Flenderson.View.IPPSPeople.Process';
    functionInvocation.jobType = jobType;
    
    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;
    let rowsProcessed = 0;
    let recordsProcessed = 0;

    const recordsNowObject = {};
    const recordsNowArray = [];

    rows.forEach(function(row) {
        // If we're missing an ID, bail
        if (!row.EMPLOYEE_ID) {
            return;
        }

        rowsProcessed++;

        // Create the Position object
        const rowRecord = {
            id:         row.EMPLOYEE_ID,
            employeeID: row.EMPLOYEE_ID,
            firstName:  row.FIRST_NAME,
            lastName:   row.SURNAME,
            email:      row.E_MAIL_ADDRESS,
            status:     row.STATUS,
        } as IPPSPerson;

        // Add/overwrite record from this row to the collection object
        recordsNowObject[rowRecord.id] = rowRecord;
    });

    // Step through collection object and assign objects to array
    Object.getOwnPropertyNames(recordsNowObject).forEach(function (recordID) {
        recordsProcessed++;
        recordsNowArray.push(recordsNowObject[recordID]);
    });    

    // TODO: if (rowsProcessed < 5000 || peopleProcessed < 5000) {
        //context.done('Too few records. Aborting.');
    //}

    // Write out Flenderson's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(panamaBlob);

    // Write out arrays and objects to blobs
    context.bindings.recordsNowArray = JSON.stringify(recordsNowArray);
    context.bindings.recordsNowObject = JSON.stringify(recordsNowObject);

    const statusCode = '200';
    const statusMessage = `Success: Processed ${functionInvocation.functionDataType}.`;

    const logPayload = {
        jobType: jobType,
        status: statusCode,
        statusMessage: statusMessage,
        rowsProcessed: rowsProcessed,
        recordsProcessed: recordsProcessed,
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewIPPSPeopleProcess;