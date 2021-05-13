async function calculateTotalDifferences(context, calculation)
{
    context.log('Calculate total number of differences...');
    let creates = calculation.differences.created_records.length;
    let updates = calculation.differences.updated_records.length;
    let deletes = calculation.differences.deleted_records.length;
    let totalDifferences = creates + updates + deletes;

    context.log('Found ' + totalDifferences + ' total differences.');
    return totalDifferences;
}

export { calculateTotalDifferences };