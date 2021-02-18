import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { createHash } from "crypto";
import { FunctionInvocation, TrilliumClassesReconcileFunctionRequest, TrilliumClassesReconcileFunctionRequestPayload, ViewGclassroomRecord, TrilliumClass } from "@cosmos/types";

const trilliumClassesReconcile: AzureFunction = async function (context: Context, triggerMessage: TrilliumClassesReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Skinner',
        functionName: context.executionContext.functionName,
        functionDataType: 'TrilliumClass',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'classes';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as TrilliumClassesReconcileFunctionRequest;
    const payload = triggerObject.payload as TrilliumClassesReconcileFunctionRequestPayload;

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow;

    // TODO: check data set
    // ensure we have a full data set
    // let totalRecords = Object.getOwnPropertyNames(recordsNow).length;
    // if (totalRecords < 50) {
        // context.done('Too few records. Aborting.');
    // }

    // fetch current records from Cosmos
    const recordsPrevious = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    context.log('Reconcile classes: ' + Object.getOwnPropertyNames(recordsPrevious).length);

    // object to store our total diff as we build it
    let calculation = {
        recordsPrevious: recordsPrevious,
        recordsNow: recordsNow,
        differences: {
            createdRecords: [],
            updatedRecords: [],
            deletedRecords: []
        }
    };

    calculation = await findCreatesAndUpdates(calculation);
    calculation = await findDeletes(calculation);

    let creates = await processCreates(calculation.differences.createdRecords);
    let updates = await processUpdates(calculation.differences.updatedRecords);
    let deletes = await processDeletes(calculation.differences.deletedRecords);

    let totalDifferences = creates.length + updates.length + deletes.length;

    context.bindings.queueStore = creates.concat(updates, deletes);

    const logPayload = {
        totalDifferences: totalDifferences
        //differences: calculation.differences
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function findCreatesAndUpdates(calculation) {
        context.log('findCreatesAndUpdates');

        let recordsPrevious = calculation.recordsPrevious;
        let recordsNow = calculation.recordsNow;

        if (!recordsNow) {
            return calculation;
        }

        // loop through all records in recordsNow, looking for updates and creates
        Object.getOwnPropertyNames(recordsNow).forEach(function (recordID) {
            const newRecord = {
                id:                  recordsNow[recordID].id,
                school_code:         recordsNow[recordID].school_code,
                class_code:          recordsNow[recordID].class_code,
                class_grades:        recordsNow[recordID].class_grades,
                staff_number:        recordsNow[recordID].staff_number,
                teacher_email:       recordsNow[recordID].teacher_email,
                teacher_name:        recordsNow[recordID].teacher_name

                // these fields are not present in the data from trillium, so we don't map them
                //created_at
                //updated_at
                //deleted_at
                //deleted
            } as TrilliumClass;
    
            if (!recordsPrevious || !recordsPrevious[recordID]) {
                calculation.differences.createdRecords.push(newRecord);
            } else {
                // get the corresponding record in recordsPrevious
                const oldRecord = {
                    id:                  recordsPrevious[recordID].id,
                    school_code:         recordsPrevious[recordID].school_code,
                    class_code:          recordsPrevious[recordID].class_code,
                    class_grades:        recordsPrevious[recordID].class_grades,
                    staff_number:        recordsPrevious[recordID].staff_number,
                    teacher_email:       recordsPrevious[recordID].teacher_email,
                    teacher_name:        recordsPrevious[recordID].teacher_name
    
                    // these fields are not present in the data from trillium, so we don't map them
                    //created_at
                    //updated_at
                    //deleted_at
                    //deleted
                } as TrilliumClass; 
    
                // Re-calculate the change detection hashes locally,
                // because different functions may have different change detection standards
                const newRecordChangeDetectionHash = makeHash(newRecord);
                const oldRecordChangeDetectionHash = makeHash(oldRecord);

                // Compare old and new records
                const recordsEqual = (newRecordChangeDetectionHash === oldRecordChangeDetectionHash) ? true : false;
    
                // if record changed, record the change
                if (!recordsEqual) {
                    calculation.differences.updatedRecords.push({
                        previous: oldRecord,
                        now: newRecord
                    });
                }
            }
        });
        return calculation;
    }

    function arrayCompare(firstArray, secondArray) {
        if (firstArray.length !== secondArray.length){
            return false;
        };
        for (let i = 0; i < firstArray.length; i++){
            if(!secondArray.includes(firstArray[i])){
                return false;
            };
        };
        return true;
    }

    async function findDeletes(calculation) {
        context.log('findDeletes');

        let recordsPrevious = calculation.recordsPrevious;
        let recordsNow = calculation.recordsNow;

        if (!recordsPrevious) {
            return calculation;
        }

        // loop through all records in recordsPrevious, looking for deletes
        Object.getOwnPropertyNames(recordsPrevious).forEach(function (recordID) {
            if (!recordsNow || !recordsNow[recordID]) {
                calculation.differences.deletedRecords.push(recordsPrevious[recordID]);
            }
        });

        return calculation;
    }

    async function processCreates(createdRecords) {
        context.log('processCreates');

        // array for the results being returned
        let messages = [];

        createdRecords.forEach(function (record) {
            let message = {
                operation: "replace",
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processUpdates(updatedRecords) {
        context.log('processUpdates');

        // array for the results being returned
        let messages = [];

        updatedRecords.forEach(function (record) {
            let message = {
                operation: "replace",
                payload: record.now
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function processDeletes(deletedRecords) {
        context.log('processDeletes');

        // array for the results being returned
        let messages = [];

        deletedRecords.forEach(function (record) {
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

        let recordsPrevious = {};

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
                    let classObject = {
                        id: item.id,
                        school_code: item.school_code,
                        class_code: item.class_code,
                        class_grades: item.class_grades,
                        staff_number: item.staff_number,
                        teacher_email: item.teacher_email,
                        teacher_name: item.teacher_name
    
                        // these fields are not present in the data from trillium
                        //created_at: item.created_at,
                        //updated_at: item.updated_at,
                        //deleted_at: item.deleted_at,
                        //deleted: item.deleted
                    } as TrilliumClass;
        
                    recordsPrevious[item.id] = classObject;
                }
            }
    
            return recordsPrevious;
        } catch (error) {
            context.log(error);
    
            context.res = {
                status: 500,
                body: error
            };
    
            context.done(error);
        }
    }

    function makeHash(objectToHash: TrilliumClass): string {
        const objectForHash = JSON.stringify({
            school_code: objectToHash.school_code,
            class_code: objectToHash.class_code,
            class_grades: objectToHash.class_grades,
            staff_number: objectToHash.staff_number,
            teacher_email: objectToHash.teacher_email,
            teacher_name: objectToHash.teacher_name
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default trilliumClassesReconcile;