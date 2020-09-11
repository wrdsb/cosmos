import { AzureFunction, Context } from "@azure/functions"
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { TrilliumEnrolmentStoreFunctionRequest, TrilliumEnrolmentStoreFunctionRequestPayload, TrilliumEnrolment } from "@cosmos/types";

const trilliumEnrolmentStore: AzureFunction = async function (context: Context, triggerMessage: TrilliumEnrolmentStoreFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.Skinner.Enrolment.Store';
    const functionEventID = `skinner-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-enrolment-store-logs';

    const eventLabel = '';
    const eventTags = [
        "skinner", 
    ];

    const triggerObject = triggerMessage as TrilliumEnrolmentStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as TrilliumEnrolmentStoreFunctionRequestPayload;

    let oldRecord = context.bindings.recordIn;
    let newRecord = {
        id: '',
        school_code: '',
        class_code: '',
        student_number: '',
        student_first_name: '',
        student_last_name: '',
        student_email: '',
        staff_number: '',
        teacher_ein: '',
        teacher_email: '',
        created_at: '',
        updated_at: '',
        deleted_at: '',
        deleted: false
    } as TrilliumEnrolment;
    let result;

    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = doDelete(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Marked enrolment record deleted.';
            break;
        case 'patch':
            result = doPatch(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Patched enrolment record.';
            break;
        case 'replace':
            result = doReplace(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Replaced enrolment record.';
            break;
        default:
            break;
    }

    context.bindings.recordOut = result.newRecord;
    const logPayload = result.event;
    context.log(logPayload);

    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);

    function doDelete(oldRecord, newRecord, payload)
    {
        let event = {};

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocationTimestamp;
            newRecord.updated_at = functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deleted_at = functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftEnrolmentDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deleted_at = functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftEnrolmentDeleteEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function doPatch(oldRecord, newRecord, payload)
    {
        let event = {};

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocationTimestamp;
            newRecord.updated_at = functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
    
            event = craftEnrolmentCreateEvent(oldRecord, newRecord);

        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);
            newRecord.updated_at = functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            event = craftEnrolmentUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }
    
    function doReplace(oldRecord, newRecord, payload)
    {
        let event = {};

        newRecord = Object.assign(newRecord, payload);

        if (!oldRecord) {
            newRecord.created_at = functionInvocationTimestamp;
            newRecord.updated_at = functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftEnrolmentCreateEvent(oldRecord, newRecord);

        } else {
            newRecord.created_at = oldRecord.created_at;
            newRecord.updated_at = functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftEnrolmentUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function craftEnrolmentCreateEvent(old_record, new_record)
    {
        let event_type = 'Skinner.Enrolment.Create';
        let source = 'create';
        let schema = 'create';
        let label = `Enrolment ${new_record.id} created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftEnrolmentUpdateEvent(old_record, new_record)
    {
        let event_type = 'Skinner.Enrolment.Update';
        let source = 'update';
        let schema = 'update';
        let label = `Enrolment ${new_record.id} updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftEnrolmentDeleteEvent(old_record, new_record)
    {
        let event_type = 'Skinner.Enrolment.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `Enrolment ${new_record.id} deleted.`;
        let payload = {
            record: old_record
        };

        let event = craftEvent(old_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftEvent(recordID, source, schema, event_type, label, payload) {
        let event = {
            id: `${event_type}-${context.executionContext.invocationId}`,
            time: functionInvocationTimestamp,

            type: event_type,
            source: `/skinner/enrolment/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.skinner.enrolment.${schema}.json`,

            label: label,
            tags: [
                "skinner", 
                "enrolment_change"
            ], 

            data: {
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                result: {
                    payload: payload 
                },
            },

            eventTypeVersion: "0.1",
            specversion: "0.2",
            contentType: "application/json"
        };

        // TODO: check message length
        return event;
    }
};

export default trilliumEnrolmentStore;
