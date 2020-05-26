import { Aborter, BlobURL, BlockBlobURL, ContainerURL, ServiceURL, StorageURL, SharedKeyCredential } from "@azure/storage-blob";

async function createBlob(storageAccount: string, storageKey: string, storageContainer: string, blobName: string, blobBody: string)
{
    const sharedKeyCredential = new SharedKeyCredential(storageAccount, storageKey);
    const pipeline = StorageURL.newPipeline(sharedKeyCredential);
    const serviceURL = new ServiceURL(
        `https://${storageAccount}.blob.core.windows.net`,
        pipeline
    );
    const containerURL = ContainerURL.fromServiceURL(serviceURL, storageContainer);
    const blobURL = BlobURL.fromContainerURL(containerURL, blobName);
    const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);

    const uploadBlobResponse = await blockBlobURL.upload(
        Aborter.none,
        blobBody,
        blobBody.length
    );

    return uploadBlobResponse;
}

export { createBlob };
