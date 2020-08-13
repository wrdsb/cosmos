import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";

async function createBlob(storageAccount: string, storageKey: string, storageContainer: string, blobName: string, blobBody: string)
{
    const sharedKeyCredential = new StorageSharedKeyCredential(storageAccount, storageKey);
    const blobServiceClient = new BlobServiceClient(
        `https://${storageAccount}.blob.core.windows.net`,
        sharedKeyCredential
    );

    const containerClient = blobServiceClient.getContainerClient(storageContainer);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(blobBody, blobBody.length);
  
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
    return uploadBlobResponse;
}

export { createBlob };