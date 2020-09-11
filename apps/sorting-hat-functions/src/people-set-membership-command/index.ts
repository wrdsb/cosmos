import { AzureFunction, Context } from "@azure/functions"
import { PeopleSetMembershipCommandFunctionRequest, PeopleSetMembershipCommandFunctionRequestPayload } from "@cosmos/types";

const peopleSetMembershipCommand: AzureFunction = async function (context: Context, req: PeopleSetMembershipCommandFunctionRequest): Promise<void> {
    const request = req as PeopleSetMembershipCommandFunctionRequest;
    const operation = request.operation;
    const payload = request.payload as PeopleSetMembershipCommandFunctionRequestPayload;

    let result = "";

    const logPayload = result;

    context.done(null, logPayload);
};

export default peopleSetMembershipCommand;
