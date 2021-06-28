import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSLocation } from "@cosmos/types";

const ippsLocation: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSLocation',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSLocation.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as IPPSLocation;
    const newRecord = payload.newRecord as IPPSLocation;

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Create';
        const label = `Location ${newRecord?.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord?.deleted && newRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Delete';
        const label = `Location ${newRecord?.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord?.deleted && oldRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Undelete';
        const label = `Location ${newRecord?.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.locationCode !== newRecord?.locationCode) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationCode.Change';
        const label = `Location ${newRecord?.id} code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.locationType !== newRecord?.locationType) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationType.Change';
        const label = `Location ${newRecord?.id} type changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.locationDescription !== newRecord?.locationDescription) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationDescription.Change';
        const label = `Location ${newRecord?.id} description changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.locationAbbreviation !== newRecord?.locationAbbreviation) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationAbbriviation.Change';
        const label = `Location ${newRecord?.id} abbriviation changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.schoolCode !== newRecord?.schoolCode) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.SchoolCode.Change';
        const label = `Location ${newRecord?.id} school code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.panel !== newRecord?.panel) {
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Panel.Change';
        const label = `Location ${newRecord?.id} panel changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    const notification = {
        "payload": {
            "toEmail": "james_schumann@wrdsb.ca",
            "subject": "IPPS Location changes",
            "body": JSON.stringify(events)
        }
    }
    context.bindings.emailNotification = notification;

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

export default ippsLocation;
