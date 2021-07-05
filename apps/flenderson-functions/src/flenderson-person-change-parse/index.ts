import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, FlendersonPerson } from "@cosmos/types";

const flendersonPersonChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPerson',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPerson.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as FlendersonPerson;
    const newRecord = payload.newRecord as FlendersonPerson;

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.FlendersonPerson.Create';
        const label = `Person ${newRecord?.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord?.deleted && newRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.FlendersonPerson.Delete';
        const label = `Person ${newRecord?.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord?.deleted && oldRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.FlendersonPerson.Undelete';
        const label = `Person ${newRecord?.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    //if (oldRecord?.jobCode !== newRecord?.jobCode) {
        //const eventType = 'WRDSB.Flenderson.FlendersonPerson.JobCode.Change';
        //const label = `Job ${newRecord?.id} code changed.`;

        //const event = craftEvent(eventType, label, newRecord, oldRecord);
        //events.push(event);
    //}

    //const notification = {
        //"payload": {
            //"toEmail": "james_schumann@wrdsb.ca",
            //"subject": "Flenderson Person changes",
            //"body": JSON.stringify(events)
        //}
    //}
    //context.bindings.emailNotification = notification;

    const logPayload = events;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);


    function craftEvent(eventType, label, newRecord, oldRecord) {
        const event = {
            eventType: eventType,
            label: label,
            newRecord: newRecord,
            oldRecord: oldRecord
        }

        return event;
    }
};

export default flendersonPersonChangeParse;
