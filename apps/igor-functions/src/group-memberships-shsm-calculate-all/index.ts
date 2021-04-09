import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GroupMembershipsStudentsCalculateAllFunctionRequest, GroupMembershipsStudentsCalculateAllFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsSHSMCalculateAll: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsStudentsCalculateAllFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GroupMemberships',
        functionDataOperation: 'CalculateSHAMAll',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GroupMembershipsStudentsCalculateAllFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsStudentsCalculateAllFunctionRequestPayload;

    context.log(payload);

    const sectors = [
        'agriculture',
        'arts',
        'business',
        'construction',
        'environment',
        'health',
        'hospitality',
        'communication',
        'manufacturing',
        'non-profit',
        'sports',
        'transportation'
    ];
    const queueMessages = [];

    sectors.forEach(sector => {
        const message = {
            payload: {
                sector: sector
            }
        };

        queueMessages.push(message);
    });
    
    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
}

export default GroupMembershipsSHSMCalculateAll;
