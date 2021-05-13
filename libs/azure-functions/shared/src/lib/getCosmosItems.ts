import { consolidateCosmosItems } from "./consolidateCosmosItems";

async function getCosmosItems(context, cosmosClient, cosmosDatabase, cosmosContainer,cosmosQuery)
{
    context.log('Get records from Cosmos...');

    let cosmosRecords = {};

    const querySpec = {
        query: cosmosQuery
    }
    const queryOptions  = {
        maxItemCount: -1,
        enableCrossPartitionQuery: true
    }

    const queryIterator = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec, queryOptions);
    
    while (queryIterator.hasMoreResults()) {
        const results = await queryIterator.executeNext();

        cosmosRecords = await consolidateCosmosItems(results.result, cosmosRecords);

        if (results === undefined) {
            // no more results
            break;
        }   
    }

    context.log('Got ' + Object.getOwnPropertyNames(cosmosRecords).length + ' records from Cosmos.')
    return cosmosRecords;
}

export { getCosmosItems };