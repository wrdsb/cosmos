import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSPal } from "@cosmos/types";

const ippsPalChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPal',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as FlendersonJobType;
    jobType = 'Flenderson.IPPSPal.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as IPPSPal;
    const newRecord = payload.newRecord as IPPSPal;

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.IPPSPal.Create';
        const label = `PAL ${newRecord.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord.deleted && newRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSPal.Delete';
        const label = `PAL ${newRecord.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord.deleted && oldRecord.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSPal.Undelete';
        const label = `PAL ${newRecord.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.employeeID !== newRecord.employeeID) {
        const eventType = 'WRDSB.Flenderson.IPPSPal.EmployeeID.Change';
        const label = `PAL ${newRecord.id} employee ID changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.username !== newRecord.username) {
        const eventType = 'WRDSB.Flenderson.IPPSPal.Username.Change';
        const label = `PAL ${newRecord.id} username changed.`;

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

export default ippsPalChangeParse;
