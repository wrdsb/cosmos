import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSEmployeeGroup } from "@cosmos/types";

const ippsEmployeeGroupChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSEmployeeGroup',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSEmployeeGroup.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as IPPSEmployeeGroup;
    const newRecord = payload.newRecord as IPPSEmployeeGroup;

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.Create';
        const label = `Employee Group ${newRecord?.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord?.deleted && newRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.Delete';
        const label = `Employee Group ${newRecord?.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord?.deleted && oldRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.Undelete';
        const label = `Employee Group ${newRecord?.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.employeeGroupCode !== newRecord?.employeeGroupCode) {
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupCode.Change';
        const label = `Employee Group ${newRecord?.id} code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.employeeGroupCategory !== newRecord?.employeeGroupCategory) {
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupCategory.Change';
        const label = `Employee Group ${newRecord?.id} category changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.employeeGroupDescription !== newRecord?.employeeGroupDescription) {
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupDescription.Change';
        const label = `Employee Group ${newRecord?.id} description changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.employeeGroupAbbreviation !== newRecord?.employeeGroupAbbreviation) {
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupAbbriviation.Change';
        const label = `Employee Group ${newRecord?.id} abbreviation changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    const notification = {
        "payload": {
            "toEmail": "james_schumann@wrdsb.ca",
            "subject": "IPPS Employee Group changes",
            "body": JSON.stringify(events)
        }
    }
    context.bindings.emailNotification = notification;

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

export default ippsEmployeeGroupChangeParse;
