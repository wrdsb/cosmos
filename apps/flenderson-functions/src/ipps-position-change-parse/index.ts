import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSPosition } from "@cosmos/types";
import { craftEvent } from "@cosmos/flenderson-functions-shared";

const ippsPositionChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPosition',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSPosition.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as IPPSPosition;
    const newRecord = payload.newRecord as IPPSPosition;
    const functionInvocationID = payload.functionInvocationID;
    const functionInvocationTimestamp = payload.functionInvocationTimestamp;

    const events = [];

    if (!oldRecord) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/create';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.Create';
        const label = `Position ${newRecord.id} created.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-position/delete';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.Delete';
        const label = `Position ${newRecord.id} deleted.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-position/undelete';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.Undelete';
        const label = `Position ${newRecord.id} undeleted.`;
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

    if (oldRecord?.positionID !== newRecord?.positionID) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/positionID/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.PositionID.Change';
        const label = `Position ${newRecord.id} position ID changed.`;
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

    if (oldRecord?.employeeID !== newRecord?.employeeID) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/employeeID/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.EmployeeID.Change';
        const label = `Position ${newRecord.id} employee ID changed.`;
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

    if (oldRecord?.employeeGroupCode !== newRecord?.employeeGroupCode) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/employeeGroupCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.EmployeeGroupCode.Change';
        const label = `Position ${newRecord.id} employee group code changed.`;
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

    if (oldRecord?.jobCode !== newRecord?.jobCode) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/jobCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.JobCode.Change';
        const label = `Position ${newRecord.id} job code changed.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-position/locationCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.LocationCode.Change';
        const label = `Position ${newRecord.id} location code changed.`;
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

    if (oldRecord?.establishmentCode !== newRecord?.establishmentCode) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/establishmentCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.EstablishmentCode.Change';
        const label = `Position ${newRecord.id} establishment code changed.`;
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

    if (oldRecord?.isHomeLocation !== newRecord?.isHomeLocation) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/isHomeLocation/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.isHomeLocation.Change';
        const label = `Position ${newRecord.id} is home location changed.`;
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

    if (oldRecord?.positionStartDate !== newRecord?.positionStartDate) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/positionStartDate/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.PositionStartDate.Change';
        const label = `Position ${newRecord.id} position start date changed.`;
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

    if (oldRecord?.positionEndDate !== newRecord?.positionEndDate) {
        const eventSubject = '/wrdsb/flenderson/ipps-position/positionEndDate/change';
        const eventType = 'WRDSB.Flenderson.IPPSPosition.PositionEndDate.Change';
        const label = `Position ${newRecord.id} position end date changed.`;
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
            "subject": "IPPS Position changes",
            "body": JSON.stringify(events)
        }
    }
    context.bindings.emailNotification = notification;

    const logPayload = events;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default ippsPositionChangeParse;
