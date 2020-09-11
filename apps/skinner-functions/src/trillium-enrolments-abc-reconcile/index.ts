import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, TrilliumEnrolmentsABCReconcileFunctionRequest, TrilliumEnrolmentsABCReconcileFunctionRequestPayload, ViewGclassroomRecord, TrilliumEnrolment } from "@cosmos/types";
import { isEqual } from "lodash";

const trilliumEnrolmentsABCReconcile: AzureFunction = async function (context: Context, triggerMessage: TrilliumEnrolmentsABCReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewGclassroom',
        functionDataOperation: 'ExtractEnrolments',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as TrilliumEnrolmentsABCReconcileFunctionRequest;
    const payload = triggerObject.payload as TrilliumEnrolmentsABCReconcileFunctionRequestPayload;
    const alpha = payload.alpha;
    const alphaLowercase =  alpha.toLowerCase();

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow[alpha];
    const cosmosRecords = context.bindings.cosmosRecords;

    context.log('Reconcile enrolments for ' + alpha + ': ' + Object.getOwnPropertyNames(cosmosRecords).length);

    // object to store our total diff as we build it
    let calculation = {
        records_previous: cosmosRecords,
        records_now: recordsNow,
        differences: {
            created_records: [],
            updated_records: [],
            deleted_records: []
        }
    };

    calculation = await findCreatesAndUpdates(calculation);
    calculation = await findDeletes(calculation);

    let creates = await processCreates(calculation.differences.created_records);
    let updates = await processUpdates(calculation.differences.updated_records);
    let deletes = await processDeletes(calculation.differences.deleted_records);

    let totalDifferences = creates.length + updates.length + deletes.length;

    context.bindings.queueCreates = creates;
    context.bindings.queueUpdates = updates;
    context.bindings.queueDeletes = deletes;

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function findCreatesAndUpdates(calculation)
    {
        context.log('findCreatesAndUpdates');

        let records_previous = calculation.records_previous;
        let records_now = calculation.records_now;

        if (!records_now) {
            return calculation;
        }

        // loop through all records in records_now, looking for updates and creates
        Object.getOwnPropertyNames(records_now).forEach(function (record_id) {
            let new_record = {
                id:                  records_now[record_id].id,
                school_code:         records_now[record_id].school_code,
                class_code:          records_now[record_id].class_code,
                student_number:      records_now[record_id].student_number,
                student_first_name:  records_now[record_id].student_first_name,
                student_last_name:   records_now[record_id].student_last_name,
                student_email:       records_now[record_id].student_email,
                teacher_ein:         records_now[record_id].teacher_ein,
                teacher_email:       records_now[record_id].teacher_email,
                staff_number:        records_now[record_id].staff_number

                // these fields are not present in the data from trillium, so we don't map them
                //created_at
                //updated_at
                //deleted_at
                //deleted
            };
    
            if (!records_previous || !records_previous[record_id]) {
                calculation.differences.created_records.push(new_record);
            } else {
                // get the corresponding record in records_previous
                let old_record = {
                    id:                  records_previous[record_id].id,
                    school_code:         records_previous[record_id].school_code,
                    class_code:          records_previous[record_id].class_code,
                    student_number:      records_previous[record_id].student_number,
                    student_first_name:  records_previous[record_id].student_first_name,
                    student_last_name:   records_previous[record_id].student_last_name,
                    student_email:       records_previous[record_id].student_email,
                    teacher_ein:         records_previous[record_id].teacher_ein,
                    teacher_email:       records_previous[record_id].teacher_email,
                    staff_number:        records_previous[record_id].staff_number

                    // these fields are not present in the data from trillium, so we don't map them
                    //created_at
                    //updated_at
                    //deleted_at
                    //deleted
                }; 
    
                // Compare old and new records using Lodash _.isEqual, which performs a deep comparison
                let records_equal = isEqual(old_record, new_record);
    
                // if record changed, record the change
                if (!records_equal) {
                    calculation.differences.updated_records.push({
                        previous: old_record,
                        now: new_record
                    });
                }
            }
        });
        return calculation;
    }

    async function findDeletes(calculation)
    {
        context.log('findDeletes');

        let records_previous = calculation.records_previous;
        let records_now = calculation.records_now;

        if (!records_previous) {
            return calculation;
        }

        // loop through all records in records_previous, looking for deletes
        Object.getOwnPropertyNames(records_previous).forEach(function (record_id) {
            if (!records_now || !records_now[record_id]) {
                calculation.differences.deleted_records.push(records_previous[record_id]);
            }
        });

        return calculation;
    }

    async function processCreates(created_records)
    {
        context.log('processCreates');

        // array for the results being returned
        let messages = [];

        created_records.forEach(function (record) {
            let message = record;
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processUpdates(updated_records)
    {
        context.log('processUpdates');

        // array for the results being returned
        let messages = [];

        updated_records.forEach(function (record) {
            let message = record.now;
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processDeletes(deleted_records)
    {
        context.log('processDeletes');

        // array for the results being returned
        let messages = [];

        deleted_records.forEach(function (record) {
            let message = record;
            messages.push(JSON.stringify(message));
        });

        return messages;
    }
};

export default trilliumEnrolmentsABCReconcile;