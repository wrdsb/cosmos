import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, NotificationEmailSendFunctionRequest, NotificationEmailSendFunctionRequestPayload } from "@cosmos/types";

const notificationEmailSend: AzureFunction = async function (context: Context, triggerMessage: NotificationEmailSendFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'NotificationEmail',
        functionDataOperation: 'Send',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.NotificationEmail.Send';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage as NotificationEmailSendFunctionRequest;
    const payload = triggerObject.payload as NotificationEmailSendFunctionRequestPayload;

    const message = {
        "personalizations": [
            { 
                "to": [
                    {
                        "email": payload.toEmail
                    }
                ]
            }
        ],
        from: {
            email: "ITS-FlendersonBot@wrdsb.ca"
        },
        subject: payload.subject,
        content: [{
            type: 'text/plain',
            value: payload.body
        }]
    };

    context.bindings.outboundEmail = message;

    const logPayload = message;
    functionInvocation.logPayload = logPayload;

    context.log(logPayload);

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default notificationEmailSend;
