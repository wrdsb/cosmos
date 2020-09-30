import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, PeopleSetMembershipQueryFunctionRequest, PeopleSetMembershipQueryFunctionRequestPayload } from "@cosmos/types";

const peopleSetMembershipQuery: AzureFunction = async function (context: Context, triggerMessage: PeopleSetMembershipQueryFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'PeopleSetMembership',
        functionDataOperation: 'Query',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as PeopleSetMembershipQueryFunctionRequest;

    let result = "";

    const logPayload = result;
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default peopleSetMembershipQuery;
