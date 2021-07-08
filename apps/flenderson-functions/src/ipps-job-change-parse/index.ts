import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSJob } from "@cosmos/types";
import { craftEvent } from "@cosmos/flenderson-functions-shared";

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
    const functionInvocationID = payload.functionInvocationID;
    const functionInvocationTimestamp = payload.functionInvocationTimestamp;

    const events = [];

    if (!oldRecord) {
        const eventSubject = '/wrdsb/flenderson/ipps-job/create';
        const eventType = 'WRDSB.Flenderson.IPPSJob.Create';
        const label = `Job ${newRecord?.id} created.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-job/delete';
        const eventType = 'WRDSB.Flenderson.IPPSJob.Delete';
        const label = `Job ${newRecord?.id} deleted.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-job/undelete';
        const eventType = 'WRDSB.Flenderson.IPPSJob.Undelete';
        const label = `Job ${newRecord?.id} undeleted.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-job/jobCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSJob.JobCode.Change';
        const label = `Job ${newRecord?.id} code changed.`;
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

    if (oldRecord?.jobDescription !== newRecord?.jobDescription) {
        const eventSubject = '/wrdsb/flenderson/ipps-job/jobDescription/change';
        const eventType = 'WRDSB.Flenderson.IPPSJob.JobDescription.Change';
        const label = `Job ${newRecord?.id} description changed.`;
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

    if (oldRecord?.jobAbbreviation !== newRecord?.jobAbbreviation) {
        const eventSubject = '/wrdsb/flenderson/ipps-job/jobAbbreviation/change';
        const eventType = 'WRDSB.Flenderson.IPPSJob.JobAbbriviation.Change';
        const label = `Job ${newRecord?.id} abbriviation changed.`;
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
            "subject": "IPPS Jobs changes",
            "body": JSON.stringify(events)
        }
    }
    context.bindings.emailNotification = notification;

    const logPayload = events;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default ippsJobChangeParse;
