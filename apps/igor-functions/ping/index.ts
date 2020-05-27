import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('IGOR ping: running');

    const res = 'pong';

    context.res = {
        status: 200,
        body: res
    };
};

export default httpTrigger;
