import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "../shared/createLogObject";
import { storeLogBlob } from "../shared/storeLogBlob";
import { createCallbackMessage } from "../shared/createCallbackMessage";
import { createEvent } from "../shared/createEvent";
import { teamViewerContactAPI } from "../shared/teamViewerContactAPI";
import { ContactAPICreateRequest } from "../shared/teamViewerContactAPI";
import { ContactCreateFunctionRequest, ContactCreateFunctionRequestPayload } from "../shared/types/contact-create.types";

const contactCreate: AzureFunction = async function (context: Context, triggerMessage: ContactCreateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.RADAR.Contact.Create';
    const functionEventID = `radar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-contact-create-logs';

    const eventLabel = '';
    const eventTags = [
        "radar", 
    ];

    const apiToken = "Bearer " + process.env['userToken'];
    const apiClient = new teamViewerContactAPI(apiToken);

    const triggerObject = triggerMessage as ContactCreateFunctionRequest;
    const payload = triggerObject.payload as ContactCreateFunctionRequestPayload;

    const request = {
        contact: payload.contact
    } as ContactAPICreateRequest;

    let result = await apiClient.create(request);

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

export default contactCreate;
