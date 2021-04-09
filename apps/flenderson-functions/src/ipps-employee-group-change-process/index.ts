import { AzureFunction, Context } from "@azure/functions";
import { SearchIndexerClient, AzureKeyCredential } from "@azure/search-documents";
import { FunctionInvocation, IPPSEmployeeGroup } from "@cosmos/types";

const ippsEmployeeGroupChangeProcess: AzureFunction = async function (context: Context, changedRecords: IPPSEmployeeGroup[]): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSEmployeeGroup',
        functionDataOperation: 'ChangeProcess',
        eventLabel: ''
    } as FunctionInvocation;

    const endpoint = process.env['searchEndpoint'];
    const apiKey = process.env['searchKey'];

    await runSearchIndexer();

    const logPayload = changedRecords;
    functionInvocation.logPayload = logPayload;

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function runSearchIndexer() {
        context.log(`Running Search Indexer...`);
        
        const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
        await client.runIndexer("flenderson-groups");
    }
};

export default ippsEmployeeGroupChangeProcess;
