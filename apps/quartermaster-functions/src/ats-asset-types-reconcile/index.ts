import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { createHash } from "crypto";
import { FunctionInvocation, ATSAssetTypesReconcileFunctionRequest, ATSAssetTypesReconcileFunctionRequestPayload, ATSAssetType } from "@cosmos/types";

const atsAssetTypesReconcile: AzureFunction = async function (context: Context, triggerMessage: ATSAssetTypesReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ATSAssetType',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'ats-asset-types';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as ATSAssetTypesReconcileFunctionRequest;
    const payload = triggerObject.payload as ATSAssetTypesReconcileFunctionRequestPayload;

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow;

    // fetch current records from Cosmos
    const recordsPrevious = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    context.log('Reconcile ATSAssetTypes: ' + Object.getOwnPropertyNames(recordsPrevious).length);

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

    const creates = await processCreates(calculation.differences.created_records);
    const updates = await processUpdates(calculation.differences.updated_records);
    const deletes = await processDeletes(calculation.differences.deleted_records);

    const totalDifferences = creates.length + updates.length + deletes.length;

    context.bindings.queueStore = creates.concat(updates, deletes);

    const logPayload = {
        totalDifferences: totalDifferences,
        differences: calculation.differences
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function findCreatesAndUpdates(calculation) {
        context.log('findCreatesAndUpdates');

        const records_previous = calculation.records_previous;
        const records_now = calculation.records_now;

        if (!records_now) {
            return calculation;
        }

        // loop through all records in records_now, looking for updates and creates
        Object.getOwnPropertyNames(records_now).forEach(function (record_id) {
            const new_record = {
                id:                   records_now[record_id].id,
                changeDetectionHash:  records_now[record_id].changeDetectionHash,
                asset_type_code:      records_now[record_id].asset_type_code,
                full_description:     records_now[record_id].full_description,
                short_description:    records_now[record_id].short_description,
                engraved_id_type:     records_now[record_id].engraved_id_type
                
                // these fields are not present in the data from ats, so we don't map them
                //createdAt
                //updatedAt
                //deletedAt
                //deleted
            };
    
            if (!records_previous || !records_previous[record_id]) {
                calculation.differences.created_records.push(new_record);
            } else {
                // get the corresponding record in records_previous
                const old_record = {
                    id:                   records_previous[record_id].id,
                    changeDetectionHash:  records_previous[record_id].changeDetectionHash,
                    asset_type_code:      records_previous[record_id].asset_type_code,
                    full_description:     records_previous[record_id].full_description,
                    short_description:    records_previous[record_id].short_description,
                    engraved_id_type:     records_previous[record_id].engraved_id_type
            
                    // these fields are not present in the data from ats, so we don't map them
                    //createdAt
                    //updatedAt
                    //deletedAt
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

        const records_previous = calculation.records_previous;
        const records_now = calculation.records_now;

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
        const messages = [];

        created_records.forEach(function (record) {
            const message = {
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
        const messages = [];

        updated_records.forEach(function (record) {
            const message = {
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
        const messages = [];

        deleted_records.forEach(function (record) {
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

        const records_previous = {};

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
                    const dbObject = {
                        id: item.id,
                        changeDetectionHash: item.changeDetectionHash,
                
                        asset_type_code: item.asset_type_code,
                        full_description: item.full_description,
                        short_description: item.short_description,
                        engraved_id_type: item.engraved_id_type
                
                        // these fields are not present in the data from ats
                        //createdAt: item.createdAt,
                        //updatedAt: item.updatedAt,
                        //deletedAt: item.deletedAt,
                        //deleted: item.deleted
                    } as ATSAssetType;
        
                    records_previous[item.id] = dbObject;
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

    function makeHash(atsAssetType: ATSAssetType): string {
        const objectForHash = JSON.stringify({
            asset_type_code: atsAssetType.asset_type_code,
            full_description: atsAssetType.full_description,
            short_description: atsAssetType.short_description,
            engraved_id_type: atsAssetType.engraved_id_type
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default atsAssetTypesReconcile;