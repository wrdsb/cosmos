import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSPosition } from "@cosmos/types";

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

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.Create';
        const label = `Position ${newRecord.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord.deleted && newRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.Delete';
        const label = `Position ${newRecord.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord.deleted && oldRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.Undelete';
        const label = `Position ${newRecord.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.positionID !== newRecord.positionID) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.PositionID.Change';
        const label = `Position ${newRecord.id} position ID changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.employeeID !== newRecord.employeeID) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.EmployeeID.Change';
        const label = `Position ${newRecord.id} employee ID changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.employeeGroupCode !== newRecord.employeeGroupCode) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.EmployeeGroupCode.Change';
        const label = `Position ${newRecord.id} employee group code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.jobCode !== newRecord.jobCode) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.JobCode.Change';
        const label = `Position ${newRecord.id} job code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.locationCode !== newRecord.locationCode) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.LocationCode.Change';
        const label = `Position ${newRecord.id} location code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.establishmentCode !== newRecord.establishmentCode) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.EstablishmentCode.Change';
        const label = `Position ${newRecord.id} establishment code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.isHomeLocation !== newRecord.isHomeLocation) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.isHomeLocation.Change';
        const label = `Position ${newRecord.id} is home location changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.positionStartDate !== newRecord.positionStartDate) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.PositionStartDate.Change';
        const label = `Position ${newRecord.id} position start date changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.positionEndDate !== newRecord.positionEndDate) {
        const eventType = 'WRDSB.Flenderson.IPPSPosition.PositionEndDate.Change';
        const label = `Position ${newRecord.id} position end date changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

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

export default ippsPositionChangeParse;
