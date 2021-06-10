import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSPerson } from "@cosmos/types";

const ippsPersonChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPerson',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as FlendersonJobType;
    jobType = 'Flenderson.IPPSPerson.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as IPPSPerson;
    const newRecord = payload.newRecord as IPPSPerson;

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.Create';
        const label = `Person ${newRecord.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord.deleted && newRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.Delete';
        const label = `Person ${newRecord.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord.deleted && oldRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.Undelete';
        const label = `Person ${newRecord.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.employeeID !== newRecord.employeeID) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.EmployeeID.Change';
        const label = `Person ${newRecord.id} employee ID changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.email !== newRecord.email) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.Email.Change';
        const label = `Person ${newRecord.id} email changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.firstName !== newRecord.firstName) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.FirstName.Change';
        const label = `Person ${newRecord.id} first name changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.lastName !== newRecord.lastName) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.LastName.Change';
        const label = `Person ${newRecord.id} last name changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.status !== newRecord.status) {
        const eventType = 'WRDSB.Flenderson.IPPSPerson.Status.Change';
        const label = `Person ${newRecord.id} status changed.`;

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

export default ippsPersonChangeParse;
