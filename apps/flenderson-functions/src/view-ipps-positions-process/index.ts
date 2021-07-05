import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonJobType, IPPSPosition } from "@cosmos/types";

const viewIPPSPositionsProcess: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewIPPSPositions',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.View.IPPSPositions.Process';
    functionInvocation.jobType = jobType;
    
    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;
    let rowsProcessed = 0;
    let recordsProcessed = 0;

    const recordsNowObject = {};
    const recordsNowArray = [];

    rows.forEach(function(row) {
        // If we're missing an ID, bail
        if (!row.POSITION_ID) {
            return;
        }

        rowsProcessed++;

        // Create the Position object
        const rowRecord = {
            id:                `${row.EMPLOYEE_ID.toString()}-${row.POSITION_ID.toString()}`,
            employeeID:        row.EMPLOYEE_ID.toString(),
            positionID:        row.POSITION_ID.toString(),
            employeeGroupCode: row.EMP_GROUP_CODE,
            jobCode:           row.JOB_CODE,
            locationCode:      row.LOCATION_CODE,
            establishmentCode: row.ESTABLISHMENT_CODE,
            isHomeLocation:    row.IS_HOME_LOCATION,
            positionStartDate: row.POSITION_START_DATE,
            positionEndDate:   row.POSITION_END_DATE
        } as IPPSPosition;

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

    context.bindings.jobCascade = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default viewIPPSPositionsProcess;