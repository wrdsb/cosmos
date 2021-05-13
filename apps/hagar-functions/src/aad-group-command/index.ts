import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions/shared";
import { storeLogBlob } from "@cosmos/azure-functions/shared";
import { createCallbackMessage } from "@cosmos/azure-functions/shared";
import { createEvent } from "@cosmos/azure-functions/shared";

const aadGroupCommand: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.Group.Command';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-group-command-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const request = req;

    const queueStorageAccount = process.env['storageAccount'];
    const queueStorageKey = process.env['storageKey'];
    const operation = request.body.operation;
    const payload = request.body.payload;

    let result;

    switch (operation) {
        case 'get':
            result = queueGet(payload);
            context.log(result);
            break;
        case 'list':
            result = queueList(payload);
            context.log(result);
            break;
        case 'delta':
            result = queueDelta(payload);
            context.log(result);
            break;
        case 'create':
            result = queueCreate(payload);
            context.log(result);
            break;
        case 'patch':
            result = queuePatch(payload);
            context.log(result);
            break;
        case 'replace':
            result = queueReplace(payload);
            context.log(result);
            break;
        case 'delete':
            result = queueDelete(payload);
            context.log(result);
            break;
        default:
            break;
    }

    const logPayload = result;

    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);


    function queueGet(payload) {
        const queueName = 'aad-group-get';
        const queueMessage = 'aad-group-get';

        let status = {
            code: 202,
            statusMessage: 'Success: Got group.'
        }

        context.bindings.aadGroupGet = queueMessage;
        return queueMessage;
    }

    function queueList(payload) {
        const queueName = 'aad-groups-list';
        const queueMessage = 'aad-groups-list';

        let status = {
            code: 202,
            statusMessage: 'Success: Listed groups.'
        }

        context.bindings.aadGroupsList = queueMessage;
        return queueMessage;
    }

    function queueDelta(payload) {
        const queueName = 'add-group-delta';
        const queueMessage = 'add-group-delta';

        let status = {
            code: 202,
            statusMessage: 'Success: Got groups delta.'
        }

        context.bindings.addGroupDelta = queueMessage;
        return queueMessage;
    }

    function queueCreate(payload) {
        const queueName = 'aad-group-create';
        const queueMessage = {payload: "aad-group-create"};

        let status = {
            code: 202,
            statusMessage: 'Success: Group created.'
        }

        context.bindings.aadGroupCreate = queueMessage;
        return queueMessage;
    }

    function queuePatch(payload) {
        const queueName = 'aad-group-update';
        const queueMessage = 'aad-group-update';

        let status = {
            code: 202,
            statusMessage: 'Success: Group patched.'
        }

        context.bindings.aadGroupUpdate = queueMessage;
        return queueMessage;
    }

    function queueReplace(payload) {
        const queueName = 'add-group-update';
        const queueMessage = 'add-group-update';

        let status = {
            code: 202,
            statusMessage: 'Success: Group replaced.'
        }

        context.bindings.aadGroupUpdate = queueMessage;
        return queueMessage;
    }

    function queueDelete(payload) {
        const queueName = 'aad-group-delete';
        const queueMessage = 'aad-group-delete';

        let status = {
            code: 202,
            statusMessage: 'Success: Group deleted.'
        }

        context.bindings.aadGroupDelete = queueMessage;
        return queueMessage;
    }
};

export default aadGroupCommand;