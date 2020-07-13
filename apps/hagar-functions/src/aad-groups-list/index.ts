import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { MSGraphGroupsAPI } from "../shared/MSGraphGroupsAPI";
import { AADGroupsListFunctionRequest, AADGroupsListFunctionRequestPayload } from "@cosmos/types";

import { PageCollection, PageIterator, PageIteratorCallback } from "@microsoft/microsoft-graph-client";
import { Group } from "@microsoft/microsoft-graph-types";
import { Client } from "@microsoft/microsoft-graph-client";
import { MyAuthenticationProvider } from "../shared/MyAuthenticationProvider";


const aadGroupsList: AzureFunction = async function (context: Context, triggerMessage: AADGroupsListFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.HAGAR.AAD.Group.List';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-aad-groups-list-logs';

    const eventLabel = '';
    const eventTags = [
        "hagar", 
    ];

    const triggerObject = triggerMessage as AADGroupsListFunctionRequest;
    const payload = triggerObject.payload as AADGroupsListFunctionRequestPayload;

    const apiToken = context.bindings.graphToken;
    const apiClient = new MSGraphGroupsAPI(apiToken);

    let result = await list();

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

    context.done(null, 'done');


    async function list(): Promise<Group[]> {
        let groups = [];
        let count = 0;

        const clientOptions = {
            authProvider: new MyAuthenticationProvider(apiToken)
        };

        let client = Client.initWithMiddleware(clientOptions);

        try {
            // Makes request to fetch groups list.
            let response: PageCollection = await client
                .api("/groups?$top=999")
                .get();

            // A callback function to be called for every item in the collection.
            // This call back should return boolean indicating whether not to
            // continue the iteration process.
            let iteratorCallback: PageIteratorCallback = (data) => {
                groups.push(data);
                count++;
                return true;
            };

            // Creating a new page iterator instance with client a graph client
            // instance, page collection response from request and callback
            let pageIterator = new PageIterator(client, response, iteratorCallback);

            // This iterates the collection until the nextLink is drained out.
            let itter = await pageIterator.iterate();

            return groups;
        } catch (err) {
            //if (err && err.response) {
                //const axiosError = err as AxiosError<ServerError>
                //return axiosError.response.data;
            //}
            context.log(err);
            throw err;
        }
    }
};

export default aadGroupsList;
