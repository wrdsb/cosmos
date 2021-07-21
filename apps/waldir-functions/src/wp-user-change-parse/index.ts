import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, WALDIRJobType, WPUser } from "@cosmos/types";
import { craftEvent } from "@cosmos/waldir-functions-shared";

const waldirUserChangeParse: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'WPUser',
        functionDataOperation: 'ChangeParse',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: WALDIRJobType = 'WRDSB.WALDIR.WPUser.ChangeParse';
    functionInvocation.jobType = jobType;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    const oldRecord = payload.oldRecord as WPUser;
    const newRecord = payload.newRecord as WPUser;
    const functionInvocationID = payload.functionInvocationID;
    const functionInvocationTimestamp = payload.functionInvocationTimestamp;

    const events = [];

    if (!oldRecord) {
        const eventSubject = '/wrdsb/waldir/wp-user/create';
        const eventType = 'WRDSB.WALDIR.WPUser.Create';
        const label = `User ${newRecord?.id} created.`;
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
        const eventSubject = '/wrdsb/waldir/wp-user/delete';
        const eventType = 'WRDSB.WALDIR.WPUser.Delete';
        const label = `User ${newRecord?.id} deleted.`;
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
        const eventSubject = '/wrdsb/waldir/wp-user/undelete';
        const eventType = 'WRDSB.WALDIR.WPUser.Undelete';
        const label = `User ${newRecord?.id} undeleted.`;
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

    if (oldRecord?.username !== newRecord?.username) {
        const eventSubject = '/wrdsb/waldir/wp-user/username/change';
        const eventType = 'WRDSB.WALDIR.WPUser.Username.Change';
        const label = `Username for user ${newRecord?.id} changed.`;
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
        const eventSubject = '/wrdsb/waldir/wp-user/email/change';
        const eventType = 'WRDSB.WALDIR.WPUser.Email.Change';
        const label = `Email for user ${newRecord?.id} changed.`;
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

    if (oldRecord?.first_name !== newRecord?.first_name) {
        const eventSubject = '/wrdsb/waldir/wp-user/firstName/change';
        const eventType = 'WRDSB.WALDIR.WPUser.FirstName.Change';
        const label = `First name for user ${newRecord?.id} changed.`;
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

    if (oldRecord?.last_name !== newRecord?.last_name) {
        const eventSubject = '/wrdsb/waldir/wp-user/lastName/change';
        const eventType = 'WRDSB.WALDIR.WPUser.LastName.Change';
        const label = `Last name for user ${newRecord?.id} changed.`;
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

    if (oldRecord?.name !== newRecord?.name) {
        const eventSubject = '/wrdsb/waldir/wp-user/name/change';
        const eventType = 'WRDSB.WALDIR.WPUser.Name.Change';
        const label = `Name for user ${newRecord?.id} changed.`;
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

    if (oldRecord?.nickname !== newRecord?.nickname) {
        const eventSubject = '/wrdsb/waldir/wp-user/nickname/change';
        const eventType = 'WRDSB.WALDIR.WPUser.Nickname.Change';
        const label = `Nickname for user ${newRecord?.id} changed.`;
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

export default waldirUserChangeParse;
