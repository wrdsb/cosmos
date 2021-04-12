import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, FlendersonJobType, IPPSEmployeeGroupChangeParseFunctionRequest, IPPSEmployeeGroupChangeParseFunctionRequestPayload, IPPSEmployeeGroup } from "@cosmos/types";

const ippsEmployeeGroupStore: AzureFunction = async function (context: Context, triggerMessage: IPPSEmployeeGroupChangeParseFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSEmployeeGroup',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    let jobType = '' as FlendersonJobType;
    jobType = 'Flenderson.IPPSEmployeeGroup.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage as IPPSEmployeeGroupChangeParseFunctionRequest;
    const payload = triggerObject.payload as IPPSEmployeeGroupChangeParseFunctionRequestPayload;

    const oldRecord = payload.oldRecord as IPPSEmployeeGroup;
    const newRecord = payload.newRecord as IPPSEmployeeGroup;

    const events = [];

    if (!oldRecord) {
        const eventType = 'Flenderson.IPPSEmployeeGroup.Create';
        const label = `Employee Group ${newRecord.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord.deleted && newRecord.deleted) {
        const eventType = 'Flenderson.IPPSEmployeeGroup.Delete';
        const label = `Employee Group ${newRecord.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord.deleted && oldRecord.deleted) {
        const eventType = 'Flenderson.IPPSEmployeeGroup.Undelete';
        const label = `Employee Group ${newRecord.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.employeeGroupCategory !== newRecord.employeeGroupCategory) {
        const eventType = 'Flenderson.IPPSEmployeeGroup.Category.Change';
        const label = `Employee Group ${newRecord.id} category changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.employeeGroupCode !== newRecord.employeeGroupCode) {
        const eventType = 'Flenderson.IPPSEmployeeGroup.Code.Change';
        const label = `Employee Group ${newRecord.id} code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord.employeeGroupDescription !== newRecord.employeeGroupDescription) {
        const eventType = 'Flenderson.IPPSEmployeeGroup.Description.Change';
        const label = `Employee Group ${newRecord.id} description changed.`;

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

export default ippsEmployeeGroupStore;
