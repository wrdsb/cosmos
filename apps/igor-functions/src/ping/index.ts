import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import jwt_decode from 'jwt-decode';
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const ping: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Ping';
    const functionEventID = `igor-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-ping-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const request = req;
    let idToken = '';
    let userRoles = [];

    if (request.headers['x-ms-token-aad-id-token']) {
        idToken = request.headers['x-ms-token-aad-id-token'];
        let decodedToken = jwt_decode(idToken);
        userRoles = decodedToken.roles as string[];
    }

    let response = {
        payload: {
            status: 200,
            message: "I.G.O.R. is up",
            chatter: "I.G.O.R. here. What can I do for you?",
            timestamp: functionInvocationTimestamp
        }
    };

    const logPayload = response;

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

    response.payload['invocationEvent'] = invocationEvent;

    if (!request.headers['x-ms-token-aad-id-token']) {
        context.res = {
            status: 401,
            body: 'Unauthorized: Cannot verify your identity.'
        };
    }
    else if (userRoles.includes('cosmos-user-its')) {
        context.res = {
            status: 200,
            body: response
        };
    } else {
        context.res = {
            status: 403,
            body: 'Forbidden: You are not permitted to ping I.G.O.R.'
        };
    }

    context.done(null, logBlob);
};

export default ping;
