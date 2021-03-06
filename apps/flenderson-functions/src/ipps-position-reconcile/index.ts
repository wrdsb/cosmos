import { CosmosClient } from "@azure/cosmos";
import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, FlendersonDatabaseContainer, FlendersonJobType, IPPSPositionReconcileFunctionRequest, IPPSPosition } from "@cosmos/types";

const ippsPositionReconcile: AzureFunction = async function (context: Context, triggerMessage: IPPSPositionReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPosition',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSPosition.Reconcile';
    functionInvocation.jobType = jobType;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer: FlendersonDatabaseContainer = 'ipps-positions';
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

    context.log('Reconcile positions: ' + Object.getOwnPropertyNames(recordsPrevious).length);

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
                id:                        recordsNow[recordID].id,
                employeeID:                recordsNow[recordID].employeeID,
                positionID:                recordsNow[recordID].positionID,
                employeeGroupCode:         recordsNow[recordID].employeeGroupCode,
                jobCode:                   recordsNow[recordID].jobCode,
                locationCode:              recordsNow[recordID].locationCode,
                establishmentCode:         recordsNow[recordID].establishmentCode,
                isHomeLocation:            recordsNow[recordID].isHomeLocation,
                positionStartDate:         recordsNow[recordID].positionStartDate,
                positionEndDate:           recordsNow[recordID].positionEndDate
    
                // these fields are not present in the data from ipps, so we don't map them
                //createdAt
                //updatedAt
                //deletedAt
                //deleted
            } as IPPSPosition;
    
            if (!recordsPrevious || !recordsPrevious[recordID]) {
                calculation.differences.createdRecords.push(newRecord);
            } else {
                // get the corresponding record in recordsPrevious
                const oldRecord = {
                    id:                        recordsPrevious[recordID].id,
                    employeeID:                recordsPrevious[recordID].employeeID,
                    positionID:                recordsPrevious[recordID].positionID,
                    employeeGroupCode:         recordsPrevious[recordID].employeeGroupCode,
                    jobCode:                   recordsPrevious[recordID].jobCode,
                    locationCode:              recordsPrevious[recordID].locationCode,
                    establishmentCode:         recordsPrevious[recordID].establishmentCode,
                    isHomeLocation:            recordsPrevious[recordID].isHomeLocation,
                    positionStartDate:         recordsPrevious[recordID].positionStartDate,
                    positionEndDate:           recordsPrevious[recordID].positionEndDate

                    // these fields are not present in the data from ipps, so we don't map them
                    //createdAt
                    //updatedAt
                    //deletedAt
                    //deleted
                } as IPPSPosition; 
    
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
                        id:                        item.id,
                        employeeID:                item.employeeID,
                        positionID:                item.positionID,
                        employeeGroupCode:         item.employeeGroupCode,
                        jobCode:                   item.jobCode,
                        locationCode:              item.locationCode,
                        establishmentCode:         item.establishmentCode,
                        isHomeLocation:            item.isHomeLocation,
                        positionStartDate:         item.positionStartDate,
                        positionEndDate:           item.positionEndDate
        
                        // these fields are not present in the data from ipps
                        //createdAt: item.createdAt,
                        //updatedAt: item.updatedAt,
                        //deletedAt: item.deletedAt,
                        //deleted: item.deleted
                    } as IPPSPosition;
        
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

    function makeHash(objectToHash: IPPSPosition): string {
        const objectForHash = JSON.stringify({
            employeeID:                objectToHash.employeeID,
            positionID:                objectToHash.positionID,
            employeeGroupCode:         objectToHash.employeeGroupCode,
            jobCode:                   objectToHash.jobCode,
            locationCode:              objectToHash.locationCode,
            establishmentCode:         objectToHash.establishmentCode,
            isHomeLocation:            objectToHash.isHomeLocation,
            positionStartDate:         objectToHash.positionStartDate,
            positionEndDate:           objectToHash.positionEndDate
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default ippsPositionReconcile;
