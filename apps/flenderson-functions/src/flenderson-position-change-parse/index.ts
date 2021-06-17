import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, FlendersonPosition } from "@cosmos/types";

const flendersonPositionChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPosition',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPosition.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as FlendersonPosition;
    const newRecord = payload.newRecord as FlendersonPosition;

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.FlendersonPosition.Create';
        const label = `Position ${newRecord.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord.deleted && newRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.FlendersonPosition.Delete';
        const label = `Position ${newRecord.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord.deleted && oldRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.FlendersonPosition.Undelete';
        const label = `Position ${newRecord.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    //if (oldRecord.jobCode !== newRecord.jobCode) {
        //const eventType = 'WRDSB.Flenderson.FlendersonPerson.JobCode.Change';
        //const label = `Job ${newRecord.id} code changed.`;

        //const event = craftEvent(eventType, label, newRecord, oldRecord);
        //events.push(event);
    //}

    //const notification = {
        //"payload": {
            //"toEmail": "james_schumann@wrdsb.ca",
            //"subject": "Flenderson Position changes",
            //"body": JSON.stringify(events)
        //}
    //}
    //context.bindings.emailNotification = notification;

    const logPayload = events;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
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

export default flendersonPositionChangeParse;
