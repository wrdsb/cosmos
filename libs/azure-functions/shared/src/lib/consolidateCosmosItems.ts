async function consolidateCosmosItems(items: any[], consolidatedObject)
{
    items.forEach(function(item) {
        // These fields are not present in the data from IPPS
        // They are added by Flenderson when the person is created/updated/deleted
        delete item.created_at;
        delete item.updated_at;
        delete item.deleted_at;
        delete item.deleted;
        delete item._rid;
        delete item._self;
        delete item._etag;
        delete item._attachments;
        delete item._ts;

        consolidatedObject[item.id] = item;
    });

    return consolidatedObject;
}

export { consolidateCosmosItems };