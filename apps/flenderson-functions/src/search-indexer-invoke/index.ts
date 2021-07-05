import { AzureFunction, Context } from "@azure/functions";
import { SearchIndexerClient, AzureKeyCredential } from "@azure/search-documents";
import { FunctionInvocation, SearchIndexerInvokeFunctionRequest, SearchIndexerInvokeFunctionRequestPayload, CodexSearchIndex } from "@cosmos/types";

const searchIndexerInvoke: AzureFunction = async function (context: Context, triggerMessage: SearchIndexerInvokeFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'SearchIndexer',
        functionDataOperation: 'Invoke',
        eventLabel: ''
    } as FunctionInvocation;

    const endpoint = process.env['searchEndpoint'];
    const apiKey = process.env['searchKey'];

    const triggerObject = triggerMessage as SearchIndexerInvokeFunctionRequest;
    const payload = triggerObject.payload as SearchIndexerInvokeFunctionRequestPayload;
    const searchIndex = payload.indexName as CodexSearchIndex;

    await runSearchIndexer(searchIndex);

    const logPayload = {'indexName': searchIndex};
    functionInvocation.logPayload = logPayload;

    context.done(null, functionInvocation);


    async function runSearchIndexer(searchIndex: CodexSearchIndex) {
        context.log(`Running Search Indexer...`);
        
        const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
        await client.runIndexer(searchIndex);
    }
};

export default searchIndexerInvoke;
