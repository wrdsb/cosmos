import { AzureFunction, Context } from "@azure/functions";
import { SharedKeyCredential, StorageURL, ServiceURL, ContainerURL, BlobURL, BlockBlobURL, Aborter } from "@azure/storage-blob";

const materializeSchoolStaff: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const storageAccount = process.env['storageAccount'];
    const storageKey = process.env['storageKey'];
    const blobContainer = 'school-staff';

    const sharedKeyCredential = new SharedKeyCredential(storageAccount, storageKey);
    const pipeline = StorageURL.newPipeline(sharedKeyCredential);
    const serviceURL = new ServiceURL(
        `https://${storageAccount}.blob.core.windows.net`,
        pipeline
    );
    const containerURL = ContainerURL.fromServiceURL(serviceURL, blobContainer);

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
        if (blobsObject[record.school_code]) {
            blobsObject[record.school_code].push(record);
        } else {
            blobsObject[record.school_code] = [];
            blobsObject[record.school_code].push(record);
        }
    });

    Object.getOwnPropertyNames(blobsObject).forEach(async schoolCode => {
        logObject.totalBlobs++;
        let uploadResponse = await createBlob(containerURL, schoolCode, blobsObject[schoolCode]);
        logObject.uploadsStatus.push(uploadResponse);
    });

    logObject.totalUploads = logObject.uploadsStatus.length;

    let callbackMessage = await createEvent(logObject);

    context.bindings.allSchools = blobsObject;
    context.bindings.logObject = JSON.stringify(logObject);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);

    context.log(JSON.stringify(callbackMessage));
    context.done(null, callbackMessage);

    async function createBlob(containerURL, schoolCode: string, data)
    {
        const blobName = schoolCode.toLowerCase() + '-school-staff.json';
        const blobURL = BlobURL.fromContainerURL(containerURL, blobName);
        const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);
        
        const uploadBlobResponse = await blockBlobURL.upload(
            Aborter.none,
            JSON.stringify(data),
            JSON.stringify(data).length
        );
        
        return uploadBlobResponse;
    }

    async function createEvent(logObject)
    {
        context.log('createEvent');

        let event = {
            id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
            eventType: 'Skinner.School.Staff.Materialize',
            eventTime: execution_timestamp,
            //subject: ,
            data: {
                event_type: 'function_invocation',
                app: 'wrdsb-skinner',
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                data: logObject,
                timestamp: execution_timestamp
            },
            dataVersion: '1'
        };

        return event;
    }
};

export default materializeSchoolStaff;
