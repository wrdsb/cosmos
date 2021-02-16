import { AzureFunction, Context } from "@azure/functions";
import { admin_directory_v1 } from 'googleapis';
import { groupssettings_v1 } from 'googleapis';
import { FunctionInvocation, GoogleGroupsGetAllFunctionRequest, GoogleGroupsGetAllFunctionRequestPayload, GoogleGroup } from "@cosmos/types";

const groupsGetAll: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'GetAll',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupsGetAllFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsGetAllFunctionRequestPayload;

    const groups = context.bindings.allGroupsArrayBlob;
    
    const queueMessages = await prepareMessages(groups);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);

    
    async function prepareMessages(groups) {
        const messages = [];
        const groupIDs = new Set();

        groups.forEach(function(group) {
            const groupID = (group.email) ? group.email.toLowerCase() : 0;

            if (isNaN(groupID)) {
                groupIDs.add(groupID);
            }
        });

        groupIDs.forEach(groupID => {
            const message = {
                payload: {
                    group: groupID
                }
            };
            context.log(JSON.stringify(message));
            messages.push(message);
        });

        return messages;
    }
};

export default groupsGetAll;