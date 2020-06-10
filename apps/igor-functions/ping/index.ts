import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('IGOR ping: running');

    const res = 'pong';

    context.res = {
        status: 200,
        body: res
    };
};

export default httpTrigger;
