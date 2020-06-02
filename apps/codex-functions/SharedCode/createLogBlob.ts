import { Aborter, BlobURL, BlockBlobURL, ContainerURL, ServiceURL, StorageURL, SharedKeyCredential } from "@azure/storage-blob";

async function createLogBlob(storageAccount, storageKey, logStorageContainer, logObject)
{
    const blobSharedKeyCredential = new SharedKeyCredential(storageAccount, storageKey);
    const blobPipeline = StorageURL.newPipeline(blobSharedKeyCredential);
    const blobServiceURL = new ServiceURL(
        `https://${storageAccount}.blob.core.windows.net`,
        blobPipeline
    );
    const logContainerURL = ContainerURL.fromServiceURL(blobServiceURL, logStorageContainer);
    const logBlobName = logObject.id + '.json';
    const logBlobURL = BlobURL.fromContainerURL(logContainerURL, logBlobName);
    const logBlockBlobURL = BlockBlobURL.fromBlobURL(logBlobURL);

    const logUploadBlobResponse = await logBlockBlobURL.upload(
        Aborter.none,
        JSON.stringify(logObject),
        JSON.stringify(logObject).length
    );

    return `Results logged to ${logBlobName}`;
}

export { createLogBlob };
