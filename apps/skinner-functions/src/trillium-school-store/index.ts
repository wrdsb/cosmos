import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, TrilliumSchoolStoreFunctionRequest, TrilliumSchoolStoreFunctionRequestPayload, TrilliumSchool } from "@cosmos/types";

const trilliumSchoolStore: AzureFunction = async function (context: Context, triggerMessage: TrilliumSchoolStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'TrilliumSchool',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as TrilliumSchoolStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as TrilliumSchoolStoreFunctionRequestPayload;

    let oldRecord = context.bindings.recordIn;
    let newRecord = {
        id: '',
        school_code: '',
        created_at: '',
        updated_at: '',
        deleted_at: '',
        deleted: false
    } as TrilliumSchool;
    let result;

    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = doDelete(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Marked school record deleted.';
            break;
        case 'patch':
            result = doPatch(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Patched school record.';
            break;
        case 'replace':
            result = doReplace(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Replaced school record.';
            break;
        default:
            break;
    }

    context.bindings.recordOut = result.newRecord;

    const logPayload = result.event;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    function doDelete(oldRecord, newRecord, payload) {
        let event = {};

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftSchoolDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftSchoolDeleteEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function doPatch(oldRecord, newRecord, payload) {
        let event = {};

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
    
            event = craftSchoolCreateEvent(oldRecord, newRecord);

        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            event = craftSchoolUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }
    
    function doReplace(oldRecord, newRecord, payload) {
        let event = {};

        newRecord = Object.assign(newRecord, payload);

        if (!oldRecord) {
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftSchoolCreateEvent(oldRecord, newRecord);

        } else {
            newRecord.created_at = oldRecord.created_at;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftSchoolUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function craftSchoolCreateEvent(old_record, new_record) {
        let event_type = 'Skinner.School.Create';
        let source = 'create';
        let schema = 'create';
        let label = `School ${new_record.id} created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftSchoolUpdateEvent(old_record, new_record) {
        let event_type = 'Skinner.School.Update';
        let source = 'update';
        let schema = 'update';
        let label = `School ${new_record.id} updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftSchoolDeleteEvent(old_record, new_record) {
        let event_type = 'Skinner.School.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `School ${new_record.id} deleted.`;
        let payload = {
            record: old_record
        };

        let event = craftEvent(old_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftEvent(recordID, source, schema, event_type, label, payload) {
        let event = {
            id: `${event_type}-${context.executionContext.invocationId}`,
            time: functionInvocation.functionInvocationTimestamp,

            type: event_type,
            source: `/skinner/school/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.skinner.school.${schema}.json`,

            label: label,
            tags: [
                "skinner", 
                "school_change"
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

export default trilliumSchoolStore;
