import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "../shared/createLogObject";
import { storeLogBlob } from "../shared/storeLogBlob";
import { createCallbackMessage } from "../shared/createCallbackMessage";
import { createEvent } from "../shared/createEvent";
import { User, Group } from "../shared/teamViewerTypes";
import { UsersProvisionMultipleFunctionRequest, UsersProvisionMultipleFunctionRequestPayload } from "../shared/types/users-provision-multiple.types";
import { UserProvisionFunctionRequest, UserProvisionFunctionRequestPayload } from "../shared/types/user-provision.types";

const usersProvisionMultiple: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.RADAR.User.Provision.Multiple';
    const functionEventID = `radar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-users-provision-multiple-logs';

    const eventLabel = '';
    const eventTags = [
        "radar", 
    ];

    const allGroups = context.bindings.allGroups;
    const allUsers = context.bindings.allUsers;

    const triggerObject = context.bindings.triggerMessage;
    const payload = triggerObject.payload;

    let sortedGroups = {};
    let sortedUsers = {};
    let queueMessages = [];

    allGroups.forEach((group: Group) => {
        const key = group.name.replace('Devices | Host | ', '');

        sortedGroups[key] = {
            id: group.id,
            name: group.name,
            permissions: group.permissions
        } as Group;
    });

    allUsers.forEach((user: User) => {
        const key = user.email;

        sortedUsers[key] = {
            id: user.id,
            email: user.email,
            name: user.name
        }
    });

    payload.forEach((email: string) => {
        let messagePayload = {
            group: sortedGroups[email.replace('@wrdsb.ca', '')],
            user: sortedUsers[email]
        } as UserProvisionFunctionRequestPayload;

        let message = {
            payload: messagePayload
        } as UserProvisionFunctionRequest;
        
        context.log(message);
        queueMessages.push(message);
    });

    context.bindings.userProvisionQueue = JSON.stringify(queueMessages);

    const logPayload = {
        queueMessages: queueMessages
    }
    context.log(logPayload);

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
};

export default usersProvisionMultiple;
