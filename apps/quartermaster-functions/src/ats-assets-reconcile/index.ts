import { AzureFunction, Context } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";
import { createHash } from "crypto";
import { FunctionInvocation, ATSAssetsReconcileFunctionRequest, ATSAssetsReconcileFunctionRequestPayload, ATSAsset } from "@cosmos/types";

const atsAssetsReconcile: AzureFunction = async function (context: Context, triggerMessage: ATSAssetsReconcileFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ATSAsset',
        functionDataOperation: 'Reconcile',
        eventLabel: ''
    } as FunctionInvocation;

    const cosmosEndpoint = process.env['cosmosEndpoint'];
    const cosmosKey = process.env['cosmosKey'];
    const cosmosDatabase = process.env['cosmosDatabase'];
    const cosmosContainer = 'ats-assets';
    const cosmosClient = new CosmosClient({endpoint: cosmosEndpoint, key: cosmosKey});

    const triggerObject = triggerMessage as ATSAssetsReconcileFunctionRequest;
    const payload = triggerObject.payload as ATSAssetsReconcileFunctionRequestPayload;

    // give our bindings more human-readable names
    const recordsNow = context.bindings.recordsNow;

    // fetch current records from Cosmos
    const recordsPrevious = await getCosmosItems(cosmosClient, cosmosDatabase, cosmosContainer).catch(err => {
        context.log(err);
    });

    context.log('Reconcile ATSAssets: ' + Object.getOwnPropertyNames(recordsPrevious).length);

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
    context.log(logPayload);

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
                id:                     records_now[record_id].id,
                changeDetectionHash:    records_now[record_id].changeDetectionHash,
                asset_id:               records_now[record_id].asset_id,
                asset_class_code:       records_now[record_id].asset_class_code,
                asset_type_code:        records_now[record_id].asset_type_code,
                manufacturer_code:      records_now[record_id].manufacturer_code,
                model_name:             records_now[record_id].model_name,
                status:                 records_now[record_id].status,
                add_username:           records_now[record_id].add_username,
                add_datetime:           records_now[record_id].add_datetime,
                purchase_order_number:  records_now[record_id].purchase_order_number,
                location_code:          records_now[record_id].location_code,
                school_department_code: records_now[record_id].school_department_code,
                program_code:           records_now[record_id].program_code,
                project_code:           records_now[record_id].project_code,
                engraved_id:            records_now[record_id].engraved_id,
                purchase_date:          records_now[record_id].purchase_date,
                shipping_date:          records_now[record_id].shipping_date,
                serial_number:          records_now[record_id].serial_number,
                donated:                records_now[record_id].donated,
                used:                   records_now[record_id].used,
                replaced:               records_now[record_id].replaced,
                replacement_reason:     records_now[record_id].replacement_reason,
                service_level:          records_now[record_id].service_level,
                assigned_to:            records_now[record_id].assigned_to,
                note:                   records_now[record_id].note,
                change_datetime:        records_now[record_id].change_datetime,
                change_username:        records_now[record_id].change_username,
                ethernet_address:       records_now[record_id].ethernet_address,
                useage_type:            records_now[record_id].useage_type,
                model_id:               records_now[record_id].model_id,
                private_purchase:       records_now[record_id].private_purchase,
                non_replaceable_ind:    records_now[record_id].non_replaceable_ind,
                employee_id:            records_now[record_id].employee_id,
                position_code:          records_now[record_id].position_code,
                tpm_id:                 records_now[record_id].tpm_id,
                bitlocker_id:           records_now[record_id].bitlocker_id,
                room:                   records_now[record_id].room
                        
                // these fields are not present in the data from ats, so we don't map them
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
                    id:                     records_previous[record_id].id,
                    changeDetectionHash:    records_previous[record_id].changeDetectionHash,
                    asset_id:               records_previous[record_id].asset_id,
                    asset_class_code:       records_previous[record_id].asset_class_code,
                    asset_type_code:        records_previous[record_id].asset_type_code,
                    manufacturer_code:      records_previous[record_id].manufacturer_code,
                    model_name:             records_previous[record_id].model_name,
                    status:                 records_previous[record_id].status,
                    add_username:           records_previous[record_id].add_username,
                    add_datetime:           records_previous[record_id].add_datetime,
                    purchase_order_number:  records_previous[record_id].purchase_order_number,
                    location_code:          records_previous[record_id].location_code,
                    school_department_code: records_previous[record_id].school_department_code,
                    program_code:           records_previous[record_id].program_code,
                    project_code:           records_previous[record_id].project_code,
                    engraved_id:            records_previous[record_id].engraved_id,
                    purchase_date:          records_previous[record_id].purchase_date,
                    shipping_date:          records_previous[record_id].shipping_date,
                    serial_number:          records_previous[record_id].serial_number,
                    donated:                records_previous[record_id].donated,
                    used:                   records_previous[record_id].used,
                    replaced:               records_previous[record_id].replaced,
                    replacement_reason:     records_previous[record_id].replacement_reason,
                    service_level:          records_previous[record_id].service_level,
                    assigned_to:            records_previous[record_id].assigned_to,
                    note:                   records_previous[record_id].note,
                    change_datetime:        records_previous[record_id].change_datetime,
                    change_username:        records_previous[record_id].change_username,
                    ethernet_address:       records_previous[record_id].ethernet_address,
                    useage_type:            records_previous[record_id].useage_type,
                    model_id:               records_previous[record_id].model_id,
                    private_purchase:       records_previous[record_id].private_purchase,
                    non_replaceable_ind:    records_previous[record_id].non_replaceable_ind,
                    employee_id:            records_previous[record_id].employee_id,
                    position_code:          records_previous[record_id].position_code,
                    tpm_id:                 records_previous[record_id].tpm_id,
                    bitlocker_id:           records_previous[record_id].bitlocker_id,
                    room:                   records_previous[record_id].room
                
                    // these fields are not present in the data from ats, so we don't map them
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
                    let dbObject = {
                        id:                     item.id,
                        changeDetectionHash:    item.changeDetectionHash,
                        asset_id:               item.asset_id,
                        asset_class_code:       item.asset_class_code,
                        asset_type_code:        item.asset_type_code,
                        manufacturer_code:      item.manufacturer_code,
                        model_name:             item.model_name,
                        status:                 item.status,
                        add_username:           item.add_username,
                        add_datetime:           item.add_datetime,
                        purchase_order_number:  item.purchase_order_number,
                        location_code:          item.location_code,
                        school_department_code: item.school_department_code,
                        program_code:           item.program_code,
                        project_code:           item.project_code,
                        engraved_id:            item.engraved_id,
                        purchase_date:          item.purchase_date,
                        shipping_date:          item.shipping_date,
                        serial_number:          item.serial_number,
                        donated:                item.donated,
                        used:                   item.used,
                        replaced:               item.replaced,
                        replacement_reason:     item.replacement_reason,
                        service_level:          item.service_level,
                        assigned_to:            item.assigned_to,
                        note:                   item.note,
                        change_datetime:        item.change_datetime,
                        change_username:        item.change_username,
                        ethernet_address:       item.ethernet_address,
                        useage_type:            item.useage_type,
                        model_id:               item.model_id,
                        private_purchase:       item.private_purchase,
                        non_replaceable_ind:    item.non_replaceable_ind,
                        employee_id:            item.employee_id,
                        position_code:          item.position_code,
                        tpm_id:                 item.tpm_id,
                        bitlocker_id:           item.bitlocker_id,
                        room:                   item.room
                    
                        // these fields are not present in the data from ats
                        //created_at: item.created_at,
                        //updated_at: item.updated_at,
                        //deleted_at: item.deleted_at,
                        //deleted: item.deleted
                    } as ATSAsset;
        
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

    function makeHash(atsAsset: ATSAsset): string {
        const objectForHash = JSON.stringify({
            asset_id: atsAsset.asset_id,
            asset_class_code: atsAsset.asset_class_code,
            asset_type_code: atsAsset.asset_type_code,
            manufacturer_code: atsAsset.manufacturer_code,
            model_name: atsAsset.model_name,
            status: atsAsset.status,
            add_username: atsAsset.add_username,
            add_datetime: atsAsset.add_datetime,
            purchase_order_number: atsAsset.purchase_order_number,
            location_code: atsAsset.location_code,
            school_department_code: atsAsset.school_department_code,
            program_code: atsAsset.program_code,
            project_code: atsAsset.project_code,
            engraved_id: atsAsset.engraved_id,
            purchase_date: atsAsset.purchase_date,
            shipping_date: atsAsset.shipping_date,
            serial_number: atsAsset.serial_number,
            donated: atsAsset.donated,
            used: atsAsset.used,
            replaced: atsAsset.replaced,
            replacement_reason: atsAsset.replacement_reason,
            service_level: atsAsset.service_level,
            assigned_to: atsAsset.assigned_to,
            note: atsAsset.note,
            change_datetime: atsAsset.change_datetime,
            change_username: atsAsset.change_username,
            ethernet_address: atsAsset.ethernet_address,
            useage_type: atsAsset.useage_type,
            model_id: atsAsset.model_id,
            private_purchase: atsAsset.private_purchase,
            non_replaceable_ind: atsAsset.non_replaceable_ind,
            employee_id: atsAsset.employee_id,
            position_code: atsAsset.position_code,
            tpm_id: atsAsset.tpm_id,
            bitlocker_id: atsAsset.bitlocker_id,
            room: atsAsset.room
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default atsAssetClassesReconcile;