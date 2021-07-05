import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSEmployeeGroup } from "@cosmos/types";

const ippsEmployeeGroupChangeTrigger: AzureFunction = async function (context: Context, changedRecords: IPPSEmployeeGroup[]): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSEmployeeGroup',
        functionDataOperation: 'ChangeTrigger',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSEmployeeGroup.ChangeTrigger';
    functionInvocation.jobType = jobType;

    const logPayload = changedRecords;
    functionInvocation.logPayload = logPayload;

    context.bindings.jobCascade = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default ippsEmployeeGroupChangeTrigger;
