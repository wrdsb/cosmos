import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";

const personQuery: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'people';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const reqQuery = req.body;
    let cosmosQuery = "";

    if (reqQuery.id) {
        cosmosQuery = `SELECT * FROM c where c.id = "${reqQuery.id}"`;
    } else if (reqQuery.ein) {
        cosmosQuery = `SELECT * FROM c where c.ein = "${reqQuery.ein}"`;
    } else if (reqQuery.email) {
        cosmosQuery = `SELECT * FROM c where c.email = "${reqQuery.email}"`;
    } else if (reqQuery.pal) {
        cosmosQuery = `SELECT * FROM c where c.pal = "${reqQuery.pal}"`;
    } else {
        context.res = {
            status: 400,
            body: "One of id, ein, email, or pal is required."
        };
        context.done("One of id, ein, email, or pal is required.");
    }

    const querySpec = {
        query: cosmosQuery
    }

    const records = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec).catch(err => {
        context.log(err);

        context.res = {
            status: 500,
            body: err
        };

        context.done(err);
    });

    context.res = {
        status: 200,
        body: records
    };

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, querySpec)
    {
        context.log('getCosmosItems');

        let records = [];

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        const queryIterator = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec, queryOptions);
        
        while (queryIterator.hasMoreResults()) {
            const results = await queryIterator.executeNext();

            records = await consolidateCosmosItems(results.result, records);

            if (results === undefined) {
                // no more results
                break;
            }   
        }

        return records;
    }

    async function consolidateCosmosItems(items: any[], consolidatedArray)
    {
        items.forEach(function(item) {
            if (!item.deleted) {
                // These fields are not present in the data model
                // They are added by Cosmos DB when the object is created/updated/deleted
                delete item._rid;
                delete item._self;
                delete item._etag;
                delete item._attachments;
                delete item._ts;

                consolidatedArray.push(item);
            }
        });

        return consolidatedArray;
    }
};

export default personQuery;
