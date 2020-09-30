import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, PeopleSetMembershipStoreFunctionRequest, PeopleSetMembershipStoreFunctionRequestPayload } from "@cosmos/types";

const peopleSetMembershipStore: AzureFunction = async function (context: Context, triggerMessage: PeopleSetMembershipStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'PeopleSetMemberhip',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as PeopleSetMembershipStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as PeopleSetMembershipStoreFunctionRequestPayload;

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
        default:
            break;
    }

    context.bindings.recordOut = result.newRecord;
    const logPayload = result.event;
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);

    // TODO inject event crafting function so we can generalize this function
    // and still publish custom events

    function doDelete(oldRecord, payload)
    {
        let event = {};
        let newRecord = {
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false,
            people_set_id: "",
            member_id: ""
        };

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);

            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftPeopleSetMembershipDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftPeopleSetMembershipDeleteEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function doPatch(oldRecord, payload)
    {
        let event = {};
        let newRecord = {
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false,
            people_set_id: "",
            member_id: ""
        };

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);

            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
    
            event = craftPeopleSetMembershipCreateEvent(oldRecord, newRecord);

        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);

            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
    
            event = craftPeopleSetMembershipUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }
    
    function doReplace(oldRecord, payload)
    {
        let event = {};
        let newRecord = {
            created_at: '',
            updated_at: '',
            deleted_at: '',
            deleted: false,
            people_set_id: "",
            member_id: ""
        };

        newRecord = Object.assign(newRecord, payload);

        if (!oldRecord) {
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftPeopleSetMembershipCreateEvent(oldRecord, newRecord);

        } else {
            newRecord.created_at = oldRecord.created_at;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftPeopleSetMembershipUpdateEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function craftPeopleSetMembershipCreateEvent(old_record, new_record)
    {
        let event_type = 'SortingHat.PeopleSetMembership.Create';
        let source = 'create';
        let schema = 'create';
        let label = `${new_record.id} people set membership created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftPeopleSetMembershipUpdateEvent(old_record, new_record)
    {
        let event_type = 'SortingHat.PeopleSetMembership.Update';
        let source = 'update';
        let schema = 'update';
        let label = `${new_record.id} people set membership updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftPeopleSetMembershipDeleteEvent(old_record, new_record)
    {
        let event_type = 'SortingHat.PeopleSetMembership.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `${old_record.id} people set membership deleted.`;
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
            source: `/sorting-hat/people-set-membership/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.sorting-hat.people-set-membership.${schema}.json`,

            label: label,
            tags: [
                "sorting-hat", 
                "people-set-membership"
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

export default peopleSetMembershipStore;
