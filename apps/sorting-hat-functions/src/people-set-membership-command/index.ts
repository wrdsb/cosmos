import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, PeopleSetMembershipCommandFunctionRequest, PeopleSetMembershipCommandFunctionRequestPayload } from "@cosmos/types";

const peopleSetMembershipCommand: AzureFunction = async function (context: Context, req: PeopleSetMembershipCommandFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'PeopleSetMembership',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req as PeopleSetMembershipCommandFunctionRequest;
    const operation = request.operation;
    const payload = request.payload as PeopleSetMembershipCommandFunctionRequestPayload;

    let result = "";

    const logPayload = result;

    context.done(null, logPayload);
};

export default peopleSetMembershipCommand;
