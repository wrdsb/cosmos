async function findDeletes(context, calculation)
{
    let newLocationsCount = Object.getOwnPropertyNames(calculation.records_now).length;
    let currentLocationsCount = Object.getOwnPropertyNames(calculation.records_previous).length;

    context.log('Find deletes...');
    context.log('Processing ' + newLocationsCount + ' new records and ' + currentLocationsCount + ' current records.');

    let records_previous = calculation.records_previous;
    let records_now = calculation.records_now;

    // loop through all records in records_previous, looking for deletes
    Object.getOwnPropertyNames(records_previous).forEach(function (record_id) {
        let new_record = records_now[record_id];

        if (!new_record) {
            // the record was deleted
            calculation.differences.deleted_records.push(records_previous[record_id]);
        }
    });

    context.log('Found ' + calculation.differences.deleted_records.length + ' deleted records.')
    return calculation;
}

export { findDeletes };