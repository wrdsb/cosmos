import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "../shared/createLogObject";
import { storeLogBlob } from "../shared/storeLogBlob";
import { createCallbackMessage } from "../shared/createCallbackMessage";
import { createEvent } from "../shared/createEvent";
import { User, Group, Contact } from "../shared/teamViewerTypes";
import { UserProvisionFunctionRequest, UserProvisionFunctionRequestPayload, UserProvisionFunctionResponsePayload } from "../shared/types/user-provision.types";
import { teamViewerGroupAPI, GroupAPIShareRequest, GroupAPICreateRequest } from "../shared/teamViewerGroupAPI";
import { teamViewerContactAPI, ContactAPICreateRequest } from "../shared/teamViewerContactAPI";

const userProvision: AzureFunction = async function (context: Context, triggerMessage: UserProvisionFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.RADAR.User.Provision';
    const functionEventID = `radar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-user-provision-logs';

    const eventLabel = '';
    const eventTags = [
        "radar", 
    ];

    const apiToken = "Bearer " + process.env['userToken'];
    const groupAPIClient = new teamViewerGroupAPI(apiToken);
    const contactAPIClient = new teamViewerContactAPI(apiToken);

    const triggerObject = triggerMessage as UserProvisionFunctionRequest;
    const payload = triggerObject.payload as UserProvisionFunctionRequestPayload;
    const sharedGroup = payload.group as Group;
    const provisionedUser = payload.user as User;

    let result = {
        provisionedUser: provisionedUser,
        sharedGroup: sharedGroup,
        groupShare: null,
        contactCreate: null
    } as UserProvisionFunctionResponsePayload;

    // share individual group with user
    const groupShareRequest = {
        group_id: result.sharedGroup.id,
        user_id: result.provisionedUser.id,
        permission: 'read'
    } as GroupAPIShareRequest;

    result.groupShare = await groupAPIClient.share(groupShareRequest);

    // add user as contact to Users | Unattended group
    const contact = {
        email: result.provisionedUser.email,
        groupid: process.env['unattendedUserGroupID']
    } as Contact;

    const contactCreateRequest = {
        contact: contact
    } as ContactAPICreateRequest;

    result.contactCreate = await contactAPIClient.create(contactCreateRequest);

    const logPayload = result;
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

export default userProvision;
