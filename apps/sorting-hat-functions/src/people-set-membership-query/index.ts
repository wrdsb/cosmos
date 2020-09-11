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

    context.done(null, logPayload);
};

export default peopleSetMembershipQuery;
