async function processUpdates(context, updated_records)
{
    context.log('Process updates');

    // array for the results being returned
    let messages = [];

    updated_records.forEach(function (record) {
        let message = {
            operation: 'replace',
            payload: record.now
        };
        messages.push(JSON.stringify(message));
    });

    context.log('Processed ' + messages.length + ' updates.')
    return messages;
}

export { processUpdates };