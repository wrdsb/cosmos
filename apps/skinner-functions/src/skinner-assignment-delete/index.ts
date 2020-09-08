import { AzureFunction, Context } from "@azure/functions"

const skinnerAssignmentDelete: AzureFunction = async function (context: Context, triggerMessage: string): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    let old_record = context.bindings.recordIn;

    // check for existing record
    if (!old_record) {
        old_record = context.bindings.triggerMessage;
    }

    // not really a copy, just another reference
    // TODO: make a real copy for the sake of the event data
    let new_record = old_record;

    // mark the record as deleted
    new_record.deleted_at = execution_timestamp;
    new_record.deleted = true;

    // simply write data to database, overwriting existing record
    context.bindings.recordOut = new_record;

    let event = {
        id: 'skinner-functions-' + context.executionContext.functionName +'-'+ context.executionContext.invocationId,
        eventType: 'Skinner.Assignment.Delete',
        eventTime: execution_timestamp,
        //subject: ,
        data: {
            event_type: 'function_invocation',
            app: 'wrdsb-skinner',
            function_name: context.executionContext.functionName,
            invocation_id: context.executionContext.invocationId,
            data: {
                old_record: old_record,
                new_record: new_record
            },
            timestamp: execution_timestamp
        },
        dataVersion: '1'
    };

    context.bindings.callbackMessage = JSON.stringify(event);

    context.log(JSON.stringify(event));
    context.done(null, JSON.stringify(event));
};

export default skinnerAssignmentDelete;