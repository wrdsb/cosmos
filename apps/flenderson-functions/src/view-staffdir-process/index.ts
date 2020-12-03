import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const viewStaffDirProcess: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Flenderson.View.StaffDir.Process';
    const functionEventID = `flenderson-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-view-staffdir-process-logs';

    const eventLabel = '';
    const eventTags = [
        "flenderson", 
    ];

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
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);
        
    context.bindings.triggerHRISPeopleReconcile = JSON.stringify(invocationEvent);
    context.done(null, logBlob);
};

export default viewStaffDirProcess;