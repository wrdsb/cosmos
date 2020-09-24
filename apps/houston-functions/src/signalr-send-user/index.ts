import { AzureFunction, Context } from "@azure/functions"

const signalrSendUser: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    context.log('Queue trigger function processed work item', triggerMessage);

    // const message = req.body;
    // message.sender = req.headers && req.headers['x-ms-client-principal-name'] || '';
    
    // let recipientUserId = '';
    // if (message.recipient) {
        // recipientUserId = message.recipient;
        // message.isPrivate = true;
    // }
    
    // return {
        // 'userId': recipientUserId,
        // 'target': 'newMessage',
        // 'arguments': [ message ]
    // };
};

export default signalrSendUser;
