import { CosmosClient } from "@azure/cosmos";
import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FlendersonJobType, FlendersonDatabaseContainer, FunctionInvocation, IPPSDirectoryReconcileFunctionRequest, IPPSDirectory } from "@cosmos/types";

const ippsDirectoryReconcile: AzureFunction = async function (context: Context, triggerMessage: IPPSDirectoryReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSDirectory',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSDirectory.Reconcile';
    functionInvocation.jobType = jobType;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer: FlendersonDatabaseContainer = 'ipps-directory';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow;

    // ensure we have a full data set
    const totalPeople = Object.getOwnPropertyNames(recordsNow).length;
    if (totalPeople < 5000) {
        context.done('Too few records. Aborting.');
    }

    // fetch current records from Cosmos
    const recordsPrevious = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

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

    const creates = await processCreates(calculation.differences.createdRecords);
    const updates = await processUpdates(calculation.differences.updatedRecords);
    const deletes = await processDeletes(calculation.differences.deletedRecords);

    const totalDifferences = creates.length + updates.length + deletes.length;

    context.bindings.queueStore = creates.concat(updates, deletes);

    const logPayload = {
        totalDifferences: totalDifferences,
        createdRecords: creates.length,
        updatedRecords: updates.length,
        deletedRecords: deletes.length
    };
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function findCreatesAndUpdates(calculation) {
        context.log('findCreatesAndUpdates');

        const recordsPrevious = calculation.recordsPrevious;
        const recordsNow = calculation.recordsNow;

        if (!recordsNow) {
            return calculation;
        }

        // loop through all records in recordsNow, looking for updates and creates
        Object.getOwnPropertyNames(recordsNow).forEach(function (recordID) {
            const newRecord = {
                id:             recordsNow[recordID].id,
                email:          recordsNow[recordID].email,
                firstName:      recordsNow[recordID].firstName,
                lastName:       recordsNow[recordID].lastName,
                directory:      recordsNow[recordID].directory,
                phone:          recordsNow[recordID].phone,
                extension:      recordsNow[recordID].extension,
                mbxnumber:      recordsNow[recordID].mbxnumber,
                schoolCode:     recordsNow[recordID].schoolCode,
                fullName:       recordsNow[recordID].fullName,
                jobDesc:        recordsNow[recordID].jobDesc

                // these fields are not present in the data from ipps, so we don't map them
                //createdAt
                //updatedAt
                //deletedAt
                //deleted
            } as IPPSDirectory;
    
            if (!recordsPrevious || !recordsPrevious[recordID]) {
                calculation.differences.createdRecords.push(newRecord);
            } else {
                // get the corresponding record in recordsPrevious
                const oldRecord = {
                    id:             recordsPrevious[recordID].id,
                    email:          recordsPrevious[recordID].email,
                    firstName:      recordsPrevious[recordID].firstName,
                    lastName:       recordsPrevious[recordID].lastName,
                    directory:      recordsPrevious[recordID].directory,
                    phone:          recordsPrevious[recordID].phone,
                    extension:      recordsPrevious[recordID].extension,
                    mbxnumber:      recordsPrevious[recordID].mbxnumber,
                    schoolCode:     recordsPrevious[recordID].schoolCode,
                    fullName:       recordsPrevious[recordID].fullName,
                    jobDesc:        recordsPrevious[recordID].jobDesc
        
                    // these fields are not present in the data from ipps, so we don't map them
                    //createdAt
                    //updatedAt
                    //deletedAt
                    //deleted
                } as IPPSDirectory; 
    
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

    async function findDeletes(calculation) {
        context.log('findDeletes');

        const recordsPrevious = calculation.recordsPrevious;
        const recordsNow = calculation.recordsNow;

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
        const messages = [];

        createdRecords.forEach(function (record) {
            const message = {
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
        const messages = [];

        updatedRecords.forEach(function (record) {
            const message = {
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
        const messages = [];

        deletedRecords.forEach(function (record) {
            const message = {
                operation: "delete",
                payload: record
            };
            messages.push(JSON.stringify(message));
        });

        return messages;
    }

    async function getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer) {
        context.log('getCosmosItems');

        const recordsPrevious = {};

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
                    const recordObject = {
                        id:             item.id,
                        email:          item.email,
                        firstName:      item.firstName,
                        lastName:       item.lastName,
                        directory:      item.directory,
                        phone:          item.phone,
                        extension:      item.extension,
                        mbxnumber:      item.mbxnumber,
                        schoolCode:     item.schoolCode,
                        fullName:       item.fullName,
                        jobDesc:        item.jobDesc
    
                        // these fields are not present in the data from ipps
                        //createdAt: item.createdAt,
                        //updatedAt: item.updatedAt,
                        //deletedAt: item.deletedAt,
                        //deleted: item.deleted
                    } as IPPSDirectory;
        
                    recordsPrevious[item.id] = recordObject;
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

    function makeHash(objectToHash: IPPSDirectory): string {
        const objectForHash = JSON.stringify({
            email:          objectToHash.email,
            firstName:      objectToHash.firstName,
            lastName:       objectToHash.lastName,
            directory:      objectToHash.directory,
            phone:          objectToHash.phone,
            extension:      objectToHash.extension,
            mbxnumber:      objectToHash.mbxnumber,
            schoolCode:     objectToHash.schoolCode,
            fullName:       objectToHash.fullName,
            jobDesc:        objectToHash.jobDesc
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default ippsDirectoryReconcile;
