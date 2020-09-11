import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, PeopleSetDefinitionCommandFunctionRequest, PeopleSetDefinitionCommandFunctionRequestPayload } from "@cosmos/types";

const peopleSetDefinitionCommand: AzureFunction = async function (context: Context, req: PeopleSetDefinitionCommandFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'PeopleSetDefinition',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req as PeopleSetDefinitionCommandFunctionRequest;

    const operation = request.operation;
    const payload = request.payload as PeopleSetDefinitionCommandFunctionRequestPayload;

    let oldRecord = context.bindings.recordIn;
    let newRecord;
    let result;

    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = doDelete(oldRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = doPatch(oldRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = doReplace(oldRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        case 'materialize':
            result = doMaterialize(oldRecord);
            statusCode = '200';
            statusMessage = 'Success: Materialized record.';
            break;
        default:
            break;
    }

    context.bindings.recordOut = result.newRecord;

    const logPayload = result.event;

    context.done(null, logPayload);

    // TODO inject event crafting function so we can generalize this function
    // and still publish custom events

    function doDelete(oldRecord, payload)
    {
        let event = {};
        let newRecord = {
            definition: [],
            constituent_sets: [],
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false
        };

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.constituent_sets = [].concat(...newRecord.definition);

            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftPeopleSetDefinitionDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);
            newRecord.constituent_sets = [].concat(...newRecord.definition);

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftPeopleSetDefinitionDeleteEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function doPatch(oldRecord, payload)
    {
        let event = {};
        let newRecord = {
            definition: [],
            constituent_sets: [],
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false
        };

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.constituent_sets = [].concat(...newRecord.definition);

            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
    
            event = craftPeopleSetDefinitionCreateEvent(oldRecord, newRecord);

        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);
            newRecord.constituent_sets = [].concat(...newRecord.definition);

            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
    
            event = craftPeopleSetDefinitionUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }
    
    function doReplace(oldRecord, payload)
    {
        let event = {};
        let newRecord = {
            definition: [],
            constituent_sets: [],
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false
        };

        newRecord = Object.assign(newRecord, payload);
        newRecord.constituent_sets = [].concat(...newRecord.definition);

        if (!oldRecord) {
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftPeopleSetDefinitionCreateEvent(oldRecord, newRecord);

        } else {
            newRecord.created_at = oldRecord.created_at;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftPeopleSetDefinitionUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function doMaterialize(oldRecord)
    {
        let newRecord = {
            created_at: oldRecord.created_at,
            updated_at: functionInvocation.functionInvocationTimestamp,
            deleted_at: oldRecord.deleted_at,
            deleted: oldRecord.deleted,
            id: oldRecord.id,
            atomic: oldRecord.atomic,
            type: oldRecord.type,
            name: oldRecord.name,
            short_name: oldRecord.short_name,
            aliases: oldRecord.aliases,
            categories: oldRecord.categories,
            tags: oldRecord.tags,
            definition: oldRecord.definition,
            constituent_sets: [].concat(...oldRecord.definition)
        };

        let event = craftPeopleSetDefinitionMaterializeEvent(oldRecord, newRecord);

        return {event: event, newRecord: newRecord};
    }
    
    function craftPeopleSetDefinitionCreateEvent(old_record, new_record)
    {
        let event_type = 'SortingHat.PeopleSetDefinition.Create';
        let source = 'create';
        let schema = 'create';
        let label = `${new_record.id} people set definition created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftPeopleSetDefinitionUpdateEvent(old_record, new_record)
    {
        let event_type = 'SortingHat.PeopleSetDefinition.Update';
        let source = 'update';
        let schema = 'update';
        let label = `${new_record.id} people set definition updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftPeopleSetDefinitionDeleteEvent(old_record, new_record)
    {
        let event_type = 'SortingHat.PeopleSetDefinition.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `${old_record.id} people set definition deleted.`;
        let payload = {
            record: old_record
        };

        let event = craftEvent(old_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftPeopleSetDefinitionMaterializeEvent(old_record, new_record)
    {
        let event_type = 'SortingHat.PeopleSetDefinition.Materialize';
        let source = 'materialize';
        let schema = 'materialize';
        let label = `${old_record.id} people set definition materialized.`;
        let payload = {
            old_record: old_record,
            new_record: new_record
        };

        let event = craftEvent(old_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftEvent(recordID, source, schema, event_type, label, payload) {
        let event = {
            id: `${event_type}-${context.executionContext.invocationId}`,
            time: functionInvocation.functionInvocationTimestamp,

            type: event_type,
            source: `/sorting-hat/people-set-definition/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.sorting-hat.people-set-definition.${schema}.json`,

            label: label,
            tags: [
                "sorting-hat", 
                "people-set-definition"
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

export default peopleSetDefinitionCommand;
