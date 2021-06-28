import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSJob } from "@cosmos/types";

const ippsJobChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSJob',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSJob.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as IPPSJob;
    const newRecord = payload.newRecord as IPPSJob;

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.IPPSJob.Create';
        const label = `Job ${newRecord?.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord?.deleted && newRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSJob.Delete';
        const label = `Job ${newRecord?.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord?.deleted && oldRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSJob.Undelete';
        const label = `Job ${newRecord?.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.jobCode !== newRecord?.jobCode) {
        const eventType = 'WRDSB.Flenderson.IPPSJob.JobCode.Change';
        const label = `Job ${newRecord?.id} code changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.jobDescription !== newRecord?.jobDescription) {
        const eventType = 'WRDSB.Flenderson.IPPSJob.JobDescription.Change';
        const label = `Job ${newRecord?.id} description changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.jobAbbreviation !== newRecord?.jobAbbreviation) {
        const eventType = 'WRDSB.Flenderson.IPPSJob.JobAbbriviation.Change';
        const label = `Job ${newRecord?.id} abbriviation changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    const notification = {
        "payload": {
            "toEmail": "james_schumann@wrdsb.ca",
            "subject": "IPPS Jobs changes",
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

export default ippsJobChangeParse;
