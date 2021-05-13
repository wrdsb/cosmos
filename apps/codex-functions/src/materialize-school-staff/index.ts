import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions/shared";
import { storeLogBlob } from "@cosmos/azure-functions/shared";
import { createCallbackMessage } from "@cosmos/azure-functions/shared";
import { createEvent } from "@cosmos/azure-functions/shared";

const materializeSchoolStaff: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Codex.SchoolStaff.Materialize';
    const functionEventID = `codex-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-materialize-school-staff-logs';

    const eventLabel = '';
    const eventTags = [
        "codex", 
    ];

    const storageAccount = process.env['storageAccount'];
    const storageKey = process.env['storageKey'];
    const blobContainer = 'school-staff';

    let logObject = {
        path: "logs/materialize-school-staff.json",
        connection: 'wrdsbskinner_STORAGE',
        totalRecords: 0,
        totalBlobs: 0,
        totalUploads: 0,
        uploadsStatus: []
    };

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow;

    let blobsObject = {};

    recordsNow.forEach(record => {
        logObject.totalRecords++;
        if (blobsObject[record.schoolCode]) {
            blobsObject[record.schoolCode].push(record);
        } else {
            blobsObject[record.schoolCode] = [];
            blobsObject[record.schoolCode].push(record);
        }
    });

    Object.getOwnPropertyNames(blobsObject).forEach(async schoolCode => {
        logObject.totalBlobs++;
        //let uploadResponse = await createBlob(containerURL, schoolCode, blobsObject[schoolCode]);
        //logObject.uploadsStatus.push(uploadResponse);
    });

    logObject.totalUploads = logObject.uploadsStatus.length;

    //let callbackMessage = await createEvent(logObject);

    context.bindings.allSchools = blobsObject;
    context.bindings.logObject = JSON.stringify(logObject);
    //context.bindings.callbackMessage = JSON.stringify(callbackMessage);

    //context.log(JSON.stringify(callbackMessage));
    //context.done(null, callbackMessage);

    async function createBlob(containerURL, schoolCode: string, data)
    {
        const blobName = schoolCode.toLowerCase() + '-school-staff.json';
        //const blobURL = BlobURL.fromContainerURL(containerURL, blobName);
        //const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);
        
        //const uploadBlobResponse = await blockBlobURL.upload(
            //Aborter.none,
            //JSON.stringify(data),
            //JSON.stringify(data).length
        //);
        
        //return uploadBlobResponse;
    }
};

export default materializeSchoolStaff;
