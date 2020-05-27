import {
    StorageSharedKeyCredential,
    BlobServiceClient,
} from "@azure/storage-blob";

async function storeLogBlob(storageAccount, storageKey, containerName, logObject)
{
    const blobSharedKeyCredential = new StorageSharedKeyCredential(storageAccount, storageKey);
    const blobServiceClient = new BlobServiceClient(
        `https://${storageAccount}.blob.core.windows.net`,
        blobSharedKeyCredential
    );
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const blobContent = JSON.stringify(logObject);
    const blobName = logObject.id + '.json';
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const uploadBlobResponse = await blockBlobClient.upload(blobContent, blobContent.length);

    return uploadBlobResponse;
}

export { storeLogBlob };
