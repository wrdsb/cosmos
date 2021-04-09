import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const ScheduleGroupMembershipsRolesCalculate: AzureFunction = async function (context: Context, timer): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsRoles',
        functionDataOperation: 'ScheduleCalculateAll',
        eventLabel: ''
    } as FunctionInvocation;

    const queueMessage = {
        payload: {}
    }

    context.bindings.outputQueue = queueMessage;

    const logPayload = {
        timer: context.bindings.timer,
        queueMessage: queueMessage
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
}

export default ScheduleGroupMembershipsRolesCalculate;