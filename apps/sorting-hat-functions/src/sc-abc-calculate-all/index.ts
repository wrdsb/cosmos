import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const SCABCCalculateAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'SCMembership',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    context.log(payload);

    const classes = context.bindings.classesNow;
    
    let queueMessages = await prepareMessages(classes);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    
    async function prepareMessages(classes) {
        let messages = [];
        let schoolCodes = new Set();

        classes.forEach(function(classObject) {
            let schoolCode = (classObject.school_code) ? classObject.school_code.toUpperCase() : 0;

            if (isNaN(schoolCode)) {
                schoolCodes.add(schoolCode);
            }
        });

        schoolCodes.forEach(function (schoolCode) {
            let message = {
                payload: {
                    schoolCode: schoolCode
                }
            };

            messages.push(message);
        });

        return messages;
    }
}

export default SCABCCalculateAll;