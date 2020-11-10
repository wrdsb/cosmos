import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { FunctionInvocation, TrilliumStaffReapFunctionRequest, TrilliumStaffReapFunctionRequestPayload, TrilliumStaff } from "@cosmos/types";

const trilliumStaffReconcile: AzureFunction = async function (context: Context, triggerMessage: TrilliumStaffReapFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'TrilliumStaff',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'staff';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as TrilliumStaffReapFunctionRequest;
    const payload = triggerObject.payload as TrilliumStaffReapFunctionRequestPayload;

    // fetch current records from Cosmos
    const dbRecords = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    context.log('Reconcile staff: ' + Object.getOwnPropertyNames(dbRecords).length);

    // object to store our total diff as we build it
    let calculation = {
        records: dbRecords,
        reaped_records: []
    };

    calculation = await findDeletes(calculation);

    let deletes = await processDeletes(calculation.reaped_records);

    let totalDifferences = deletes.length;

    context.bindings.queueStore = deletes;

    const logPayload = {
        totalDifferences: totalDifferences,
        differences: calculation.reaped_records
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function findDeletes(calculation) {
        context.log('findDeletes');

        let limitTimestamp = new Date().getTime() - (30 * 24 * 60 * 60 * 1000);

        let records = calculation.records;

        if (!records) {
            return calculation;
        }

        // loop through all records, looking for deletes
        Object.getOwnPropertyNames(records).forEach(function (record_id) {
            let objectDate = new Date(records[record_id].deleted_at);
            context.log(objectDate);

            let objectTimestamp = objectDate.getTime();
            context.log(`${objectTimestamp} vs ${limitTimestamp}`);

            if (objectTimestamp < limitTimestamp) {
                context.log("record deleted");
                //calculation.reaped_records.push(records[record_id]);
            }
        });

        return calculation;
    }

    async function processDeletes(deleted_records) {
        context.log('processDeletes');

        // array for the results being returned
        let messages = [];

        deleted_records.forEach(function (record) {
            let message = {
                operation: "destroy",
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log('getCosmosItems');

        let records = {};

        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = true`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                let staffObject = {
                    id: item.id,
                    staff_number: item.staff_number,
                    school_code: item.school_code,
                    school_year: item.school_year,
                    staff_type: item.staff_type,
                    status: item.status

                    // these fields are not present in the data from trillium
                    //created_at: item.created_at,
                    //updated_at: item.updated_at,
                    //deleted_at: item.deleted_at,
                    //deleted: item.deleted
                } as TrilliumStaff;
    
                records[item.id] = staffObject;
            }
    
            return records;
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

export default trilliumStaffReconcile;