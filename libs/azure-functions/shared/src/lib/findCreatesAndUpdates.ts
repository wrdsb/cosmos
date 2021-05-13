import { isEqual } from "lodash";

async function findCreatesAndUpdates(context, calculation)
{
    let newRecordsCount = Object.getOwnPropertyNames(calculation.records_now).length;
    let currentRecordsCount = Object.getOwnPropertyNames(calculation.records_previous).length;

    context.log('Find creates and updates...');
    context.log('Processing ' + newRecordsCount + ' new records and ' + currentRecordsCount + ' current records.');

    let records_previous = calculation.records_previous;
    let records_now = calculation.records_now;

    // loop through all records in records_now, looking for updates and creates
    Object.getOwnPropertyNames(records_now).forEach(function (record_id) {
        let new_record = records_now[record_id];      // get the full person record from records_now
        let old_record = records_previous[record_id]; // get the corresponding record in records_previous

        // if we found a corresponding record in records_previous, look for changes
        if (old_record) {
            // Compare old and new records using Lodash _.isEqual, which performs a deep comparison
            let records_equal = isEqual(old_record, new_record);

            // if record changed, record the change
            if (!records_equal) {
                calculation.differences.updated_records.push({
                    previous: old_record,
                    now: new_record
                });
            }

        // if we don't find a corresponding record in records_previous, they're new
        } else {
            calculation.differences.created_records.push(new_record);
        }
    });

    context.log('Found ' + calculation.differences.created_records.length + ' created records.')
    context.log('Found ' + calculation.differences.updated_records.length + ' updated records.')
    return calculation;
}

export { findCreatesAndUpdates };