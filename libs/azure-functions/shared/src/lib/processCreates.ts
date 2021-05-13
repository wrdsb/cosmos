async function processCreates(context, created_records)
{
    context.log('Process creates...');

    // array for the results being returned
    let messages = [];

    created_records.forEach(function (record) {
        let message = {
            operation: 'replace',
            payload: record
        };
        messages.push(JSON.stringify(message));
    });

    context.log('Processed ' + messages.length + ' creates.')
    return messages;
}

export { processCreates };