async function initCalculation(context, records_previous, records_now)
{
    context.log('Initializing calculation...');

    // object to store our total diff as we build it
    let calculation = {
        records_previous: records_previous,
        records_now: records_now,
        differences: {
            created_records: [],
            updated_records: [],
            deleted_records: []
        }
    };

    context.log('Calculation initialized.');
    return calculation;
}

export { initCalculation };