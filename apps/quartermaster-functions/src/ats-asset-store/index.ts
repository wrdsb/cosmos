import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, ATSAssetStoreFunctionRequest, ATSAssetStoreFunctionRequestPayload, ATSAsset } from "@cosmos/types";

const atsAssetStore: AzureFunction = async function (context: Context, triggerMessage: ATSAssetStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ATSAsset',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ATSAssetStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as ATSAssetStoreFunctionRequestPayload;

    const oldRecord = context.bindings.recordIn;

    const newRecord = {
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        deleted: false,

        id: '',
        changeDetectionHash: '',

        asset_id: "",
        asset_class_code: "",
        asset_type_code: "",
        manufacturer_code: "",
        model_name: "",
        status: "",
        add_username: "",
        add_datetime: "",
        purchase_order_number: "",
        location_code: "",
        school_department_code: "",
        program_code: "",
        project_code: "",
        engraved_id: "",
        purchase_date: "",
        shipping_date: "",
        serial_number: "",
        donated: "",
        used: "",
        replaced: "",
        replacement_reason: "",
        service_level: "",
        assigned_to: "",
        note: "",
        change_datetime: "",
        change_username: "",
        ethernet_address: "",
        useage_type: "",
        model_id: "",
        private_purchase: "",
        non_replaceable_ind: "",
        employee_id: "",
        position_code: "",
        tpm_id: "",
        bitlocker_id: "",
        room: ""
    } as ATSAsset;

    let result;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = doDelete(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = doPatch(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = doReplace(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        default:
            break;
    }

    if (result.changedDetected) {
        context.bindings.recordOut = result.newRecord;

        const logPayload = result.event;
        functionInvocation.logPayload = logPayload;
        context.log(logPayload);
    } else {
        const logPayload = {};
        functionInvocation.logPayload = logPayload;
        context.log('No change detected.');
    }
    
    context.log(functionInvocation);
    context.done(null, functionInvocation);

    function doDelete(oldRecord, newRecord, payload) {
        let event = {};
        let changedDetected = true;

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.createdAt = functionInvocation.functionInvocationTimestamp;
            newRecord.updatedAt = functionInvocation.functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deletedAt = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            newRecord.changeDetectionHash = makeHash(newRecord);

            event = craftDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deletedAt = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            newRecord.changeDetectionHash = makeHash(newRecord);

            event = craftDeleteEvent(oldRecord, newRecord);
        }

        return {changedDetected: changedDetected, event: event, newRecord: newRecord};
    }

    function doPatch(oldRecord, newRecord, payload) {
        let event = {};
        let changedDetected = false;

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.createdAt = functionInvocation.functionInvocationTimestamp;
            newRecord.updatedAt = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deletedAt = '';
            newRecord.deleted = false;

            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = true;
            event = craftCreateEvent(newRecord);

        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);
            newRecord.updatedAt = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deletedAt = '';
            newRecord.deleted = false;

            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = (oldRecord.changeDetectionHash === newRecord.changeDetectionHash) ? false : true;

            if (changedDetected) {
                event = craftUpdateEvent(oldRecord, newRecord);
            } else {
                newRecord = oldRecord;
                event = false;
            }
        }

        return {changedDetected: changedDetected, event: event, newRecord: newRecord};
    }
    
    function doReplace(oldRecord, newRecord, payload) {
        let event = {};
        let changedDetected = false;

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.createdAt = functionInvocation.functionInvocationTimestamp;
            newRecord.updatedAt = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deletedAt = '';
            newRecord.deleted = false;

            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = true;
            event = craftCreateEvent(newRecord);

        } else {
            newRecord = Object.assign(newRecord, payload);
            newRecord.createdAt = oldRecord.createdAt;
            newRecord.updatedAt = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deletedAt = '';
            newRecord.deleted = false;

            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = (oldRecord.changeDetectionHash === newRecord.changeDetectionHash) ? false : true;
    
            if (changedDetected) {
                event = craftUpdateEvent(oldRecord, newRecord);
            } else {
                newRecord = oldRecord;
                event = false;
            }
        }

        return {changedDetected: changedDetected, event: event, newRecord: newRecord};
    }

    function craftCreateEvent(new_record) {
        let event_type = 'Quartermaster.ATSAsset.Create';
        let source = 'create';
        let schema = 'create';
        let label = `ATSAsset ${new_record.id} created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftUpdateEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.ATSAsset.Update';
        let source = 'update';
        let schema = 'update';
        let label = `ATSAsset ${new_record.id} updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftDeleteEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.ATSAsset.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `ATSAsset ${new_record.id} deleted.`;
        let payload = {
            record: old_record
        };

        let event = craftEvent(old_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftEvent(recordID, source, schema, event_type, label, payload) {
        let event = {
            id: `${event_type}-${context.executionContext.invocationId}`,
            time: functionInvocation.functionInvocationTimestamp,

            type: event_type,
            source: `/quartermaster/ats-asset/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.quartermaster.ats-asset.${schema}.json`,

            label: label,
            tags: [
                "quartermaster", 
                "ats_asset_change"
            ], 

            data: {
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                result: {
                    payload: payload 
                },
            },

            eventTypeVersion: "0.1",
            specversion: "0.2",
            contentType: "application/json"
        };

        // TODO: check message length
        return event;
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

export default atsAssetStore;