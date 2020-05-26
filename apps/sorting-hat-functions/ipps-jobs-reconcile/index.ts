import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { createLogObject } from "../shared/createLogObject";
import { createLogBlob } from "../shared/createLogBlob";
import { createCallbackMessage } from "../shared/createCallbackMessage";
import { createEvent } from "../shared/createEvent";
import { initCalculation } from "../shared/initCalculation";
import { initOperations } from "../shared/initOperations";
import { findCreatesAndUpdates } from "../shared/findCreatesAndUpdates";
import { findDeletes } from "../shared/findDeletes";
import { processCreates } from "../shared/processCreates";
import { processUpdates } from "../shared/processUpdates";
import { processDeletes } from "../shared/processDeletes";
import { getCosmosItems } from "../shared/getCosmosItems";

const ippsJobsReconcile: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.SortingHat.IPPS.Jobs.Reconcile';
    const functionEventID = `sorting-hat-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-ipps-jobs-reconcile-logs';

    const eventLabel = '';
    const eventTags = [
        "sorting-hat", 
    ];

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'people-set-definitions';
    const cosmosQuery = "SELECT * FROM c WHERE c.type = 'ipps-job'";
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, auth: {masterKey: cosmosKey}});

    // give our bindings more human-readable names
    const jobs_now = context.bindings.jobsNow;
    context.log('Found ' + Object.getOwnPropertyNames(jobs_now).length + ' jobs in IPPS.')

    // fetch previous records from Cosmos
    let records_previous = await getCosmosItems(context, cosmosClient, cosmosDatabase, cosmosContainer, cosmosQuery).catch(err => {
        context.log(err);
    });
    context.log('Found ' + Object.getOwnPropertyNames(records_previous).length + ' IPPS jobs in the Sorting Hat.')


    let records_now = await materializeJobs(jobs_now);

    let calculation = await initCalculation(
        context,
        records_previous,
        records_now
    );
    calculation = await findCreatesAndUpdates(context, calculation);
    calculation = await findDeletes(context, calculation);

    let operations = await initOperations(context);
    operations.creates = await processCreates(context, calculation.differences.created_records);
    operations.updates = await processUpdates(context, calculation.differences.updated_records);
    operations.deletes = await processDeletes(context, calculation.differences.deleted_records);

    let queueMessage = operations.creates.concat(
        operations.updates,
        operations.deletes
    );
    context.bindings.queuePeopleSetDefinitionStore = JSON.stringify(queueMessage);

    const logPayload = {
        calculation: calculation,
        operations: operations
    };
    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await createLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(functionInvocationID, functionInvocationTime, functionInvocationTimestamp, functionName, functionEventType, functionEventID, functionLogID, logStorageAccount, logStorageContainer, eventLabel, eventTags);
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);

    async function materializeJobs(jobs)
    {
        context.log('Materialize jobs...');
        context.log('Materializing ' + Object.getOwnPropertyNames(jobs).length + ' jobs...')
        
        let materializedJobs = {};

        Object.getOwnPropertyNames(jobs).forEach(function (job_id) {
            let jobRecord = jobs[job_id];

            let materializedJob = {
                id:         `JC-${jobRecord.id}`,
                atomic:     true,
                type:       'ipps-job',
                name:       jobRecord.job_description,
                short_name: jobRecord.job_description,
                aliases:    [],
                categories: ["IPPS", "ipps-jobs", "job-codes"],
                tags:       [],
                definition: [[`JC-${jobRecord.id}`]],
                constituent_sets: [`JC-${jobRecord.id}`]
            };

            materializedJobs[materializedJob.id] = materializedJob;
        });
        
        context.log('Materialized ' + Object.getOwnPropertyNames(materializedJobs).length + ' jobs.')
        return materializedJobs;
    }
};

export default ippsJobsReconcile;
