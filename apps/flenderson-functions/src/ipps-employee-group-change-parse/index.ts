import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSEmployeeGroup } from "@cosmos/types";
import { craftEvent } from "@cosmos/flenderson-functions-shared";

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
    const functionInvocationID = payload.functionInvocationID;
    const functionInvocationTimestamp = payload.functionInvocationTimestamp;

    const events = [];

    if (!oldRecord) {
        const eventSubject = '/wrdsb/flenderson/ipps-employee-group/create';
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.Create';
        const label = `Employee Group ${newRecord?.id} created.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-employee-group/delete';
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.Delete';
        const label = `Employee Group ${newRecord?.id} deleted.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-employee-group/undelete';
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.Undelete';
        const label = `Employee Group ${newRecord?.id} undeleted.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-employee-group/employeeGroupCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupCode.Change';
        const label = `Employee Group ${newRecord?.id} code changed.`;
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

    if (oldRecord?.employeeGroupCategory !== newRecord?.employeeGroupCategory) {
        const eventSubject = '/wrdsb/flenderson/ipps-employee-group/employeeGroupCategory/change';
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupCategory.Change';
        const label = `Employee Group ${newRecord?.id} category changed.`;
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

    if (oldRecord?.employeeGroupDescription !== newRecord?.employeeGroupDescription) {
        const eventSubject = '/wrdsb/flenderson/ipps-employee-group/employeeGroupDescription/change';
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupDescription.Change';
        const label = `Employee Group ${newRecord?.id} description changed.`;
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

    if (oldRecord?.employeeGroupAbbreviation !== newRecord?.employeeGroupAbbreviation) {
        const eventSubject = '/wrdsb/flenderson/ipps-employee-group/employeeGroupAbbreviation/change';
        const eventType = 'WRDSB.Flenderson.IPPSEmployeeGroup.EmployeeGroupAbbriviation.Change';
        const label = `Employee Group ${newRecord?.id} abbreviation changed.`;
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
            "subject": "IPPS Employee Group changes",
            "body": JSON.stringify(events)
        }
    }
    context.bindings.emailNotification = notification;

    const logPayload = events;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default ippsEmployeeGroupChangeParse;
