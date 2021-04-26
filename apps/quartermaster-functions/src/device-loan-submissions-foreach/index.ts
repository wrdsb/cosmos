import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation } from "@cosmos/types";

const deviceLoanSubmissionsForeach: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoanSubmission',
        functionDataOperation: 'Foreeach',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'device-loan-submissions';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    let recordCount = 0;

    // fetch current records from Cosmos
    const messages = await generateMessages(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    context.bindings.messageOut = messages;

    const logPayload = {
        totalRecords: recordCount
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);
    
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function generateMessages(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log('getCosmosItems');

        const messages = [];

        const querySpec = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true,
            query: `SELECT * FROM c WHERE c.deleted = false`
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    const message = {
                        payload: {
                            id: item.id
                        }
                    };
        
                    messages.push(message);
                    recordCount++;
                }
            }
    
            return messages;
        } catch (error) {
            context.log(error);
    
            context.res = {
                status: 500,
                body: error
            };
    
            context.done(error);
        }
    }
};

export default deviceLoanSubmissionsForeach;