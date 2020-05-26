import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const ping: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Sorting Hat ping: running');

    const res = 'pong';

    context.res = {
        status: 200,
        body: res
    };
};

export default ping;
