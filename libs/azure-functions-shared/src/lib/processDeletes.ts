async function processDeletes(context, deleted_records)
{
    context.log('Process deletes...');

    // array for the results being returned
    let messages = [];

    deleted_records.forEach(function (record) {
        let message = {
            operation: 'delete',
            payload: record
        };
        messages.push(JSON.stringify(message));
    });

    context.log('Processed ' + messages.length + ' deletes.')
    return messages;
}

export { processDeletes };