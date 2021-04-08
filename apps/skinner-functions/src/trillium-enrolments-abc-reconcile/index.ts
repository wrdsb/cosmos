import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { createHash } from "crypto";
import { FunctionInvocation, TrilliumEnrolmentsABCReconcileFunctionRequest, TrilliumEnrolmentsABCReconcileFunctionRequestPayload, ViewGclassroomRecord, TrilliumEnrolment } from "@cosmos/types";

const trilliumEnrolmentsABCReconcile: AzureFunction = async function (context: Context, triggerMessage: TrilliumEnrolmentsABCReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'TrilliumEnrolment',
        functionDataOperation: 'ABCReconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'enrolments';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as TrilliumEnrolmentsABCReconcileFunctionRequest;
    const payload = triggerObject.payload as TrilliumEnrolmentsABCReconcileFunctionRequestPayload;
    const alpha = payload.alpha;
    const alphaLowercase =  alpha.toLowerCase();
    const alphaUpcase =  alpha.toUpperCase();

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow[alphaUpcase];

    // fetch current records from Cosmos
    const recordsPrevious = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, alpha).catch(err => {
        context.log(err);
    });

    context.log('Reconcile enrolments for ' + alpha + ': ' + Object.getOwnPropertyNames(recordsPrevious).length);

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
        alpah: alphaLowercase,
        totalDifferences: totalDifferences
        //differences: calculation.differences
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
                id:                records_now[record_id].id,
                schoolCode:        records_now[record_id].schoolCode,
                classCode:         records_now[record_id].classCode,
                studentNumber:     records_now[record_id].studentNumber,
                studentGrade:      records_now[record_id].studentGrade,
                studentFirstName:  records_now[record_id].studentFirstName,
                studentLastName:   records_now[record_id].studentLastName,
                studentEmail:      records_now[record_id].studentEmail,
                staffNumber:       records_now[record_id].staffNumber

                // these fields are not present in the data from trillium, so we don't map them
                //createdAt
                //updatedAt
                //deletedAt
                //deleted
            } as TrilliumEnrolment;
    
            if (!records_previous || !records_previous[record_id]) {
                calculation.differences.created_records.push(new_record);
            } else {
                // get the corresponding record in records_previous
                const old_record = {
                    id:                records_previous[record_id].id,
                    schoolCode:        records_previous[record_id].schoolCode,
                    classCode:         records_previous[record_id].classCode,
                    studentNumber:     records_previous[record_id].studentNumber,
                    studentGrade:      records_previous[record_id].studentGrade,
                    studentFirstName:  records_previous[record_id].studentFirstName,
                    studentLastName:   records_previous[record_id].studentLastName,
                    studentEmail:      records_previous[record_id].studentEmail,
                    staffNumber:       records_previous[record_id].staffNumber

                    // these fields are not present in the data from trillium, so we don't map them
                    //created_at
                    //updated_at
                    //deleted_at
                    //deleted
                } as TrilliumEnrolment; 
    
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

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer, alpha) {
        context.log('getCosmosItems');

        let records_previous = {};
        let alphaUpcase =  alpha.toUpperCase();

        const querySpec = {
            query: `SELECT * FROM c WHERE startswith(c.id, "${alphaUpcase}") and c.deleted = false`
        }

        const queryOptions  = {
            maxItemCount: -1,
            enableCrossPartitionQuery: true
        }

        try {
            const { resources } = await cosmosClient.database(cosmosDatabase).container(cosmosContainer).items.query(querySpec).fetchAll();

            for (const item of resources) {
                if (!item.deleted) {
                    let enrolment = {
                        id:               item.id,
                        schoolCode:       item.schoolCode,
                        classCode:        item.classCode,
                        studentNumber:    item.studentNumber,
                        studentFirstName: item.studentFirstName,
                        studentLastName:  item.studentLastName,
                        studentEmail:     item.studentEmail,
                        staffNumber:      item.staffNumber
    
                        // these fields are not present in the data from trillium
                        //createdAt: item.createdAt,
                        //updatedAt: item.updatedat,
                        //deletedAt: item.deletedAt,
                        //deleted: item.deleted
                    } as TrilliumEnrolment;
        
                    records_previous[item.id] = enrolment;
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

    function makeHash(objectToHash: TrilliumEnrolment): string {
        const objectForHash = JSON.stringify({
            schoolCode:       objectToHash.schoolCode,
            classCode:        objectToHash.classCode,
            studentNumber:    objectToHash.studentNumber,
            studentFirstName: objectToHash.studentFirstName,
            studentLastName:  objectToHash.studentLastName,
            studentEmail:     objectToHash.studentEmail
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default trilliumEnrolmentsABCReconcile;