import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, AssetEntitlementStoreFunctionRequest, AssetEntitlementStoreFunctionRequestPayload, AssetEntitlement } from "@cosmos/types";

const assetEntitlementStore: AzureFunction = async function (context: Context, triggerMessage: AssetEntitlementStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'AssetEntitlement',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as AssetEntitlementStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as AssetEntitlementStoreFunctionRequestPayload;

    const oldRecord = context.bindings.recordIn;

    let newRecord = {
        created_at: '',
        updated_at: '',
        deleted_at: '',
        deleted: false,

        id: '',
        changeDetectionHash: '',

        assetID: '',

        assignedBy: '',
        assignedTo: '',
        receivedBy: '',

        untrackedAssestsIncluded: '',
        notes: ''
    } as AssetEntitlement;

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

        //context.bindings.assetEntitlementHistoryMaterialize = {
            //operation: 'patch',
            //payload: {
                //assetID: result.newRecord.correctedAssetID,
                //loans: [
                    //result.newRecord
                //]
            //}
        //}

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
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            newRecord.changeDetectionHash = makeHash(newRecord);

            event = craftDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
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
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = true;
            event = craftCreateEvent(newRecord);

        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
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
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = true;
            event = craftCreateEvent(newRecord);

        } else {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = oldRecord.created_at;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
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
        let event_type = 'Quartermaster.AssetEntitlement.Create';
        let source = 'create';
        let schema = 'create';
        let label = `AssetEntitlement ${new_record.id} created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftUpdateEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.AssetEntitlement.Update';
        let source = 'update';
        let schema = 'update';
        let label = `AssetEntitlement ${new_record.id} updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftDeleteEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.AssetEntitlement.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `AssetEntitlement ${new_record.id} deleted.`;
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
            source: `/quartermaster/asset-assignment/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.quartermaster.asset-assignment.${schema}.json`,

            label: label,
            tags: [
                "quartermaster", 
                "asset_assignment_change"
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

    function makeHash(assetEntitlement: AssetEntitlement): string {
        const objectForHash = JSON.stringify({
            serialNumber:           assetEntitlement.serialNumber,
            submittedAssetID:       assetEntitlement.submittedAssetID,
            correctedAssetID:       assetEntitlement.correctedAssetID,
            assetType:              assetEntitlement.assetType,
            locationName:           assetEntitlement.locationName,
            assignedBy:             assetEntitlement.assignedBy,
            assignedToName:         assetEntitlement.assignedToName,
            assignedToNumber:       assetEntitlement.assignedToNumber,
            assignedToEmail:        assetEntitlement.assignedToEmail,
            assignedToRole:         assetEntitlement.assignedToRole,
            receivedBy:             assetEntitlement.receivedBy,
            isSEAAsset:             assetEntitlement.isSEAAsset,
            addedToSchoolInventory: assetEntitlement.addedToSchoolInventory,
            peripheralsProvided:    assetEntitlement.peripheralsProvided,
            timestamp:              assetEntitlement.timestamp,
            notes:                  assetEntitlement.notes
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default assetEntitlementStore;