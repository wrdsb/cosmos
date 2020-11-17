import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { createHash } from "crypto";
import { FunctionInvocation, TrilliumStudentsReconcileFunctionRequest, TrilliumStudentsReconcileFunctionRequestPayload, TrilliumStudent } from "@cosmos/types";

const trilliumStudentsReconcile: AzureFunction = async function (context: Context, triggerMessage: TrilliumStudentsReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'TrilliumStudent',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'students';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as TrilliumStudentsReconcileFunctionRequest;
    const payload = triggerObject.payload as TrilliumStudentsReconcileFunctionRequestPayload;

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow;

    // fetch current records from Cosmos
    const recordsPrevious = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    context.log('Reconcile students: ' + Object.getOwnPropertyNames(recordsPrevious).length);

    // object to store our total diff as we build it
    let calculation = {
        records_previous: recordsPrevious,
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

    context.bindings.queueStore = creates.concat(updates, deletes);

    const logPayload = {
        totalDifferences: totalDifferences,
        differences: calculation.differences
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function findCreatesAndUpdates(calculation) {
        context.log('findCreatesAndUpdates');

        let records_previous = calculation.records_previous;
        let records_now = calculation.records_now;

        if (!records_now) {
            return calculation;
        }

        // loop through all records in records_now, looking for updates and creates
        Object.getOwnPropertyNames(records_now).forEach(function (record_id) {
            const new_record = {
                id:                   records_now[record_id].id,
                student_number:       records_now[record_id].student_number,
                student_grade:        records_now[record_id].student_grade,
                student_email:        records_now[record_id].student_email,
                student_first_name:   records_now[record_id].student_first_name,
                student_last_name:    records_now[record_id].student_last_name,
                school_code:          records_now[record_id].school_code,
                student_oyap:         records_now[record_id].student_oyap,
                student_shsm_sector:  records_now[record_id].student_shsm_sector

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
                const old_record = {
                    id:                   records_previous[record_id].id,
                    student_number:       records_previous[record_id].student_number,
                    student_grade:        records_previous[record_id].student_grade,
                    student_email:        records_previous[record_id].student_email,
                    student_first_name:   records_previous[record_id].student_first_name,
                    student_last_name:    records_previous[record_id].student_last_name,
                    school_code:          records_previous[record_id].school_code,
                    student_oyap:         records_previous[record_id].student_oyap,
                    student_shsm_sector:  records_previous[record_id].student_shsm_sector
    
                    // these fields are not present in the data from trillium, so we don't map them
                    //created_at
                    //updated_at
                    //deleted_at
                    //deleted
                }; 
    
                // Re-calculate the change detection hashes locally,
                // because different functions may have different change detection standards
                const newRecordChangeDetectionHash = makeHash(new_record);
                const oldRecordChangeDetectionHash = makeHash(old_record);

                // Compare old and new records
                const records_equal = (newRecordChangeDetectionHash === oldRecordChangeDetectionHash) ? true : false;
    
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

    async function findDeletes(calculation) {
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

    async function processCreates(created_records) {
        context.log('processCreates');

        // array for the results being returned
        let messages = [];

        created_records.forEach(function (record) {
            let message = {
                operation: "replace",
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processUpdates(updated_records) {
        context.log('processUpdates');

        // array for the results being returned
        let messages = [];

        updated_records.forEach(function (record) {
            let message = {
                operation: "replace",
                payload: record.now
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processDeletes(deleted_records) {
        context.log('processDeletes');

        // array for the results being returned
        let messages = [];

        deleted_records.forEach(function (record) {
            let message = {
                operation: "delete",
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log('getCosmosItems');

        let records_previous = {};

        const querySpec = {
            query: `SELECT * FROM c WHERE c.deleted = false`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    let studentObject = {
                        id: item.id,
                        student_number: item.student_number,
                        student_grade: item.student_grade,
                        student_email: item.student_email,
                        student_first_name: item.student_first_name,
                        student_last_name: item.student_last_name,
                        school_code: item.school_code,
                        student_oyap: item.student_oyap,
                        student_shsm_sector: item.student_shsm_sector
    
                        // these fields are not present in the data from trillium
                        //created_at: item.created_at,
                        //updated_at: item.updated_at,
                        //deleted_at: item.deleted_at,
                        //deleted: item.deleted
                    } as TrilliumStudent;
        
                    records_previous[item.id] = studentObject;
                }
            }
    
            return records_previous;
        } catch (error) {
            context.log(error);
    
            context.res = {
                status: 500,
                body: error
            };
    
            context.done(error);
        }
    }

    function makeHash(objectToHash: TrilliumStudent): string {
        const objectForHash = JSON.stringify({
            student_number: objectToHash.student_number,
            student_grade: objectToHash.student_grade,
            student_email: objectToHash.student_email,
            student_first_name: objectToHash.student_first_name,
            student_last_name: objectToHash.student_last_name,
            school_code: objectToHash.school_code,
            student_oyap: objectToHash.student_oyap,
            student_shsm_sector: objectToHash.student_shsm_sector
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default trilliumStudentsReconcile;