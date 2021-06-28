import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, FlendersonJobType, IPPSDirectory } from "@cosmos/types";

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

    const events = [];

    if (!oldRecord) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Create';
        const label = `Directory ${newRecord?.id} created.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!oldRecord?.deleted && newRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Delete';
        const label = `Directory ${newRecord?.id} deleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (!newRecord?.deleted && oldRecord?.deleted) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Undelete';
        const label = `Directory ${newRecord?.id} undeleted.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.email !== newRecord?.email) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Email.Change';
        const label = `Directory ${newRecord?.id} email changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.firstName !== newRecord?.firstName) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.FirstName.Change';
        const label = `Directory ${newRecord?.id} first name changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.lastName !== newRecord?.lastName) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.LastName.Change';
        const label = `Directory ${newRecord?.id} last name changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.fullName !== newRecord?.fullName) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.FullName.Change';
        const label = `Directory ${newRecord?.id} full name changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.directory !== newRecord?.directory) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Directory.Change';
        const label = `Directory ${newRecord?.id} directory changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.phone !== newRecord?.phone) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Phone.Change';
        const label = `Directory ${newRecord?.id} phone changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.extension !== newRecord?.extension) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.Extension.Change';
        const label = `Directory ${newRecord?.id} extension changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.mbxnumber !== newRecord?.mbxnumber) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.MBXNumber.Change';
        const label = `Directory ${newRecord?.id} MBXNumber changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.schoolCode !== newRecord?.schoolCode) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.schoolCode.Change';
        const label = `Directory ${newRecord?.id} schoolCode changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
        events.push(event);
    }

    if (oldRecord?.jobDesc !== newRecord?.jobDesc) {
        const eventType = 'WRDSB.Flenderson.IPPSDirectory.jobDesc.Change';
        const label = `Directory ${newRecord?.id} jobDesc changed.`;

        const event = craftEvent(eventType, label, newRecord, oldRecord);
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

export default ippsDirectoryChangeParse;
