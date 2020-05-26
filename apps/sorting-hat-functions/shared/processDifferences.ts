async function processDifferences(context, differences)
{
    context.log('Process differences...');

    // array for the results being returned
    let messages = [];

    differences.created_records.forEach(function (record) {
        let message = {
            operation: 'create',
            payload: record
        };
        messages.push(JSON.stringify(message));
    });

    differences.updated_records.forEach(function (record) {
        let message = {
            operation: 'update',
            payload: record
        };
        messages.push(JSON.stringify(message));
    });

    differences.deleted_records.forEach(function (record) {
        let message = {
            operation: 'delete',
            payload: record
        };
        messages.push(JSON.stringify(message));
    });

    context.log('Processed ' + messages.length + ' differences.')
    return messages;
}

export { processDifferences };