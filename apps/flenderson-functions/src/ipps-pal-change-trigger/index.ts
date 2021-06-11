import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSPal } from "@cosmos/types";

const ippsPalChangeTrigger: AzureFunction = async function (context: Context, changedRecords: IPPSPal[]): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPal',
        functionDataOperation: 'ChangeTrigger',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as FlendersonJobType;
    jobType = 'WRDSB.Flenderson.IPPSPal.ChangeTrigger';
    functionInvocation.jobType = jobType;

    const logPayload = changedRecords;
    functionInvocation.logPayload = logPayload;

    context.bindings.jobRelay = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default ippsPalChangeTrigger;
