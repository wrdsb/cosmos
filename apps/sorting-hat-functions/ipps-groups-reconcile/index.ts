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

const ippsGroupsReconcile: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.SortingHat.IPPS.Groups.Reconcile';
    const functionEventID = `sorting-hat-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-ipps-groups-reconcile-logs';

    const eventLabel = '';
    const eventTags = [
        "sorting-hat", 
    ];

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'people-set-definitions';
    const cosmosQuery = "SELECT * FROM c WHERE c.type = 'ipps-group'";
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, auth: {masterKey: cosmosKey}});

    // give our bindings more human-readable names
    const groups_now = context.bindings.groupsNow;
    context.log('Found ' + Object.getOwnPropertyNames(groups_now).length + ' groups in IPPS.')

    // fetch previous records from Cosmos
    let records_previous = await getCosmosItems(context, cosmosClient, cosmosDatabase, cosmosContainer, cosmosQuery).catch(err => {
        context.log(err);
    });
    context.log('Found ' + Object.getOwnPropertyNames(records_previous).length + ' IPPS locations in the Sorting Hat.')


    let records_now = await materializeGroups(groups_now);

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

    async function materializeGroups(groups)
    {
        context.log('Materialize groups...');
        context.log('Materializing ' + Object.getOwnPropertyNames(groups).length + ' groups...')

        let materializedGroups = {};

        Object.getOwnPropertyNames(groups).forEach(function (group_id) {
            let groupRecord = groups[group_id];

            let materializedGroup = {
                id:         `GC-${groupRecord.id}`,
                atomic:     true,
                type:       'ipps-group',
                name:       groupRecord.employee_group_description,
                short_name: groupRecord.employee_group_description,
                aliases:    [groupRecord.employee_group_category],
                categories: ["IPPS", "ipps-groups", "group-codes"],
                tags:       [],
                definition: [[`GC-${groupRecord.id}`]],
                constituent_sets: [`GC-${groupRecord.id}`]
            };

            materializedGroups[materializedGroup.id] = materializedGroup;
        });
        
        context.log('Materialized ' + Object.getOwnPropertyNames(materializedGroups).length + ' groups.')
        return materializedGroups;
    }
};

export default ippsGroupsReconcile;
