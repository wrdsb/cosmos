import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation } from "@cosmos/types";

const viewStaffDirProcess: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewStaffDir',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const panamaBlob = context.bindings.panamaBlob;

    const rows = panamaBlob;
    let rowsProcessed = 0;
    let peopleProcessed = 0;

    let directoryObject = {};
    let directoryArray = [];

    rows.forEach(function(row) {
        // If we're missing an email address, bail
        if (!row.EMAIL_ADDRESS) {
            return;
        }

        rowsProcessed++;

        // Create the directoryRecord object for the directory collections
        var directoryRecord = {
            id:             row.EMAIL_ADDRESS,
            email:          row.EMAIL_ADDRESS,
            first_name:     row.FIRST_NAME,
            last_name:      row.SURNAME,
            directory:      row.DIRECTORY,
            phone_no:       row.PHONE_NO,
            extension:      row.EXTENSION,
            mbxnumber:      row.MBXNUMBER,
            school_code:    row.SCHOOL_CODE,
            full_name:      row.FULL_NAME,
            job_desc:       row.JOB_DESC
        };

        // Grab what will become our object identifier
        let email = directoryRecord.email;

        // Upsert directoryRecord into directory collection object
        directoryObject[email] = directoryRecord;
    });

    // Add each record from directoryObject to directoryArray
    Object.getOwnPropertyNames(directoryObject).forEach(function (email) {
        peopleProcessed++;
        directoryArray.push(directoryObject[email]);
    });

    if (rowsProcessed < 5000 || peopleProcessed < 5000) {
        context.done('Too few records. Aborting.');
    }

    // Write out Flenderson's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(panamaBlob);

    // Write out arrays and objects to blobs
    context.bindings.directoryNowArray = JSON.stringify(directoryArray);
    context.bindings.directoryNowObject = JSON.stringify(directoryObject);

    const statusCode = '200';
    const statusMessage = 'Success: Processed view staffdir.';

    const logPayload = {
        directory: JSON.stringify(directoryObject)
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.bindings.triggerIPPSPeopleReconcile = JSON.stringify(functionInvocation);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewStaffDirProcess;