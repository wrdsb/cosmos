import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSLocation } from "@cosmos/types";
import { craftEvent } from "@cosmos/flenderson-functions-shared";

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
    const functionInvocationID = payload.functionInvocationID;
    const functionInvocationTimestamp = payload.functionInvocationTimestamp;

    const events = [];

    if (!oldRecord) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/create';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Create';
        const label = `Location ${newRecord?.id} created.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (!oldRecord?.deleted && newRecord?.deleted) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/delete';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Delete';
        const label = `Location ${newRecord?.id} deleted.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (!newRecord?.deleted && oldRecord?.deleted) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/undelete';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Undelete';
        const label = `Location ${newRecord?.id} undeleted.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (oldRecord?.locationCode !== newRecord?.locationCode) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/locationCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationCode.Change';
        const label = `Location ${newRecord?.id} code changed.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (oldRecord?.locationType !== newRecord?.locationType) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/locationType/change';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationType.Change';
        const label = `Location ${newRecord?.id} type changed.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (oldRecord?.locationDescription !== newRecord?.locationDescription) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/locationDescription/change';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationDescription.Change';
        const label = `Location ${newRecord?.id} description changed.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (oldRecord?.locationAbbreviation !== newRecord?.locationAbbreviation) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/locationAbbreviation/change';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.LocationAbbriviation.Change';
        const label = `Location ${newRecord?.id} abbriviation changed.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (oldRecord?.schoolCode !== newRecord?.schoolCode) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/schoolCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.SchoolCode.Change';
        const label = `Location ${newRecord?.id} school code changed.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
        events.push(event);
    }

    if (oldRecord?.panel !== newRecord?.panel) {
        const eventSubject = '/wrdsb/flenderson/ipps-location/panel/change';
        const eventType = 'WRDSB.Flenderson.IPPSLocation.Panel.Change';
        const label = `Location ${newRecord?.id} panel changed.`;
        const tags = [];

        const event = craftEvent({
            eventSubject: eventSubject,
            eventType: eventType,
            label: label,
            tags: tags,
        
            functionInvocationID: functionInvocationID,
            functionInvocationTimestamp: functionInvocationTimestamp,
            newRecord: newRecord,
            oldRecord: oldRecord
        });
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
    context.done(null, functionInvocation);
};

export default ippsLocation;
