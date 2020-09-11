import { AzureFunction, Context } from "@azure/functions"
import { PeopleSetMembershipQueryFunctionRequest, PeopleSetMembershipQueryFunctionRequestPayload } from "@cosmos/types";

const peopleSetMembershipQuery: AzureFunction = async function (context: Context, triggerMessage: PeopleSetMembershipQueryFunctionRequest): Promise<void> {
    const triggerObject = triggerMessage as PeopleSetMembershipQueryFunctionRequest;

    let result = "";

    const logPayload = result;

    context.done(null, logPayload);
};

export default peopleSetMembershipQuery;
