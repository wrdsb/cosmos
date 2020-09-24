import { AzureFunction, Context } from "@azure/functions"

const signalrSendUser: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    context.log(`Receive ${context.bindingData.message} from ${triggerMessage.ConnectionId}.`)
    context.done();
};

export default signalrSendUser;
