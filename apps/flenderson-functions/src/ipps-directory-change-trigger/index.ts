import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSDirectory } from "@cosmos/types";

const ippsDirectoryChangeTrigger: AzureFunction = async function (context: Context, changedRecords: IPPSDirectory[]): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSDirectory',
        functionDataOperation: 'ChangeTrigger',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSDirectory.ChangeTrigger';
    functionInvocation.jobType = jobType;

    const logPayload = changedRecords;
    functionInvocation.logPayload = logPayload;

    context.bindings.jobCascade = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default ippsDirectoryChangeTrigger;
