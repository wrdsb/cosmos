async function initOperations(context)
{
    context.log('Initializing operations...');

    // object to store our total diff as we build it
    let operations = {
        creates: [],
        updates: [],
        deletes: []
    };

    context.log('Operations initialized.');
    return operations;
}

export { initOperations };