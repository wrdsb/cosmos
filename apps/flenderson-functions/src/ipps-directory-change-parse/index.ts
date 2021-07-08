import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSDirectory } from "@cosmos/types";
import { craftEvent } from "@cosmos/flenderson-functions-shared";

const ippsDirectoryChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSDirectory',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSDirectory.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as IPPSDirectory;
    const newRecord = payload.newRecord as IPPSDirectory;
    const functionInvocationID = payload.functionInvocationID;
    const functionInvocationTimestamp = payload.functionInvocationTimestamp;

    const events = [];

    if (!oldRecord) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/create';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Create';
        const label = `Directory ${newRecord?.id} created.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-directory/delete';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Delete';
        const label = `Directory ${newRecord?.id} deleted.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-directory/undelete';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Undelete';
        const label = `Directory ${newRecord?.id} undeleted.`;
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

    if (oldRecord?.email !== newRecord?.email) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/email/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Email.Change';
        const label = `Directory ${newRecord?.id} email changed.`;
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

    if (oldRecord?.firstName !== newRecord?.firstName) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/firstName/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.FirstName.Change';
        const label = `Directory ${newRecord?.id} first name changed.`;
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

    if (oldRecord?.lastName !== newRecord?.lastName) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/lastName/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.LastName.Change';
        const label = `Directory ${newRecord?.id} last name changed.`;
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

    if (oldRecord?.fullName !== newRecord?.fullName) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/fullName/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.FullName.Change';
        const label = `Directory ${newRecord?.id} full name changed.`;
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

    if (oldRecord?.directory !== newRecord?.directory) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/directory/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Directory.Change';
        const label = `Directory ${newRecord?.id} directory changed.`;
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

    if (oldRecord?.phone !== newRecord?.phone) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/phone/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Phone.Change';
        const label = `Directory ${newRecord?.id} phone changed.`;
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

    if (oldRecord?.extension !== newRecord?.extension) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/extension/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Extension.Change';
        const label = `Directory ${newRecord?.id} extension changed.`;
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

    if (oldRecord?.mbxnumber !== newRecord?.mbxnumber) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/mbxnumber/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.MBXNumber.Change';
        const label = `Directory ${newRecord?.id} MBXNumber changed.`;
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
        const eventSubject = '/wrdsb/flenderson/ipps-directory/schoolCode/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.schoolCode.Change';
        const label = `Directory ${newRecord?.id} schoolCode changed.`;
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

    if (oldRecord?.jobDesc !== newRecord?.jobDesc) {
        const eventSubject = '/wrdsb/flenderson/ipps-directory/jobDesc/change';
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.jobDesc.Change';
        const label = `Directory ${newRecord?.id} jobDesc changed.`;
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
            "subject": "IPPS Directory changes",
            "body": JSON.stringify(events)
        }
    }
    context.bindings.emailNotification = notification;

    const logPayload = events;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default ippsDirectoryChangeParse;
