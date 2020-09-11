import { AzureFunction, Context } from "@azure/functions"

const membershipsABCStaffCalculateAll: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const ippsRows = context.bindings.iamwpRaw;
    const trilliumClasses = context.bindings.classesNow;
    
    let queueMessages = await prepareMessages(ippsRows, trilliumClasses);

    context.bindings.outputQueue = queueMessages;

    const logPayload = {
        queueMessages: queueMessages
    };
    context.log(logPayload);

    context.done(null, logPayload);

    
    async function prepareMessages(ippsRows, trilliumClasses) {
        let messages = [];
        let schoolCodes = new Set();

        ippsRows.forEach(function(row) {
            let schoolCode = (row.SCHOOL_CODE) ? row.SCHOOL_CODE.toLowerCase() : 0;

            if (isNaN(schoolCode)) {
                schoolCodes.add(schoolCode);
            }
        });

        trilliumClasses.forEach(function(classObject) {
            let schoolCode = (classObject.school_code) ? classObject.school_code.toLowerCase() : 0;

            if (isNaN(schoolCode)) {
                schoolCodes.add(schoolCode);
            }
        });

        schoolCodes.forEach(schoolCode => {
            let message = {
                payload: {
                    schoolCode: schoolCode
                }
            };

            messages.push(message);
        });

        return messages;
    }
};

export default membershipsABCStaffCalculateAll;