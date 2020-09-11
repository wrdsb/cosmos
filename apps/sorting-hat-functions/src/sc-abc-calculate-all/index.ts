import { AzureFunction, Context } from "@azure/functions";

const SCABCCalculateAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    context.log(payload);

    const classes = context.bindings.classesNow;
    
    let queueMessages = await prepareMessages(classes);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };

    context.done(null, logPayload);

    
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