import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSPerson } from "@cosmos/types";

const ippsPersonChangeTrigger: AzureFunction = async function (context: Context, changedRecords: IPPSPerson[]): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPerson',
        functionDataOperation: 'ChangeTrigger',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSPerson.ChangeTrigger';
    functionInvocation.jobType = jobType;

    const logPayload = changedRecords;
    functionInvocation.logPayload = logPayload;

    context.bindings.jobCascade = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default ippsPersonChangeTrigger;
