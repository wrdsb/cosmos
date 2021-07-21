import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, WALDIRJobType, WALDIRUser } from "@cosmos/types";

const waldirUserChangeTrigger: AzureFunction = async function (context: Context, changedRecords: WALDIRUser[]): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'WALDIRUser',
        functionDataOperation: 'ChangeTrigger',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: WALDIRJobType = 'WRDSB.WALDIR.WALDIRUser.ChangeTrigger';
    functionInvocation.jobType = jobType;

    const logPayload = changedRecords;
    functionInvocation.logPayload = logPayload;

    context.bindings.jobCascade = {jobType: jobType};
    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default waldirUserChangeTrigger;
