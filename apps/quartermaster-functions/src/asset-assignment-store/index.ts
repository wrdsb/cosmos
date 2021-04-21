import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, AssetAssignmentStoreFunctionRequest, AssetAssignmentStoreFunctionRequestPayload, AssetAssignment } from "@cosmos/types";

const assetAssignmentStore: AzureFunction = async function (context: Context, triggerMessage: AssetAssignmentStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'AssetAssignment',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as AssetAssignmentStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as AssetAssignmentStoreFunctionRequestPayload;

    const oldRecord = context.bindings.recordIn;

    const newRecord = {
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        deleted: false,

        createdBy: '',
        updatedBy: '',
        deletedBy: '',

        assignedBy: '',
        assignedFromLocation: '',
    
        id: '',
        changeDetectionHash: '',

        assetID: '',
        assetSerialNumber: '',
        assetType: '',
        assetLocation: '',

        assignedToPerson: '',
        assignedToPersonEmail: '',
        assignedToPersonNumber: '',
        assignedToPersonLocation: '',
    
        assignedToBusinessUnit: '',
    
        wasReceivedByAssignee: true,
        receivedBy: '',
        receivedByRole: '',
    
        isTemporary: false,
        startDate: '',
        endDate: '',
    
        untrackedAssestsIncluded: '',
        notes: ''
    } as AssetAssignment;

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
        const changedDetected = true;

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
        const event_type = 'Quartermaster.AssetAssignment.Create';
        const source = 'create';
        const schema = 'create';
        const label = `AssetAssignment ${new_record.id} created.`;
        const payload = {
            record: new_record
        };

        const event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftUpdateEvent(old_record, new_record)
    {
        const event_type = 'Quartermaster.AssetAssignment.Update';
        const source = 'update';
        const schema = 'update';
        const label = `AssetAssignment ${new_record.id} updated.`;
        const payload = {
            old_record: old_record,
            new_record: new_record,
        };

        const event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftDeleteEvent(old_record, new_record)
    {
        const event_type = 'Quartermaster.AssetAssignment.Delete';
        const source = 'delete';
        const schema = 'delete';
        const label = `AssetAssignment ${new_record.id} deleted.`;
        const payload = {
            record: old_record
        };

        const event = craftEvent(old_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftEvent(recordID, source, schema, event_type, label, payload) {
        const event = {
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

    function makeHash(assetAssignment: AssetAssignment): string {
        const objectForHash = JSON.stringify({
            createdAt:                assetAssignment.createdAt,
            updatedAt:                assetAssignment.updatedAt,
            deletedAt:                assetAssignment.deletedAt,
            deleted:                  assetAssignment.deleted,
            createdBy:                assetAssignment.createdBy,
            updatedBy:                assetAssignment.updatedBy,
            deletedBy:                assetAssignment.deletedBy,
            assignedBy:               assetAssignment.assignedBy,
            assignedFromLocation:     assetAssignment.assignedFromLocation,
            assetID:                  assetAssignment.assetID,
            assetSerialNumber:        assetAssignment.assetSerialNumber,
            assetType:                assetAssignment.assetType,
            assetLocation:            assetAssignment.assetLocation,
            assignedToPerson:         assetAssignment.assignedToPerson,
            assignedToPersonEmail:    assetAssignment.assignedToPersonEmail,
            assignedToPersonNumber:   assetAssignment.assignedToPersonNumber,
            assignedToPersonLocation: assetAssignment.assignedToPersonLocation,
            assignedToBusinessUnit:   assetAssignment.assignedToBusinessUnit,
            wasReceivedByAssignee:    assetAssignment.wasReceivedByAssignee,
            receivedBy:               assetAssignment.receivedBy,
            receivedByRole:           assetAssignment.receivedByRole,
            isTemporary:              assetAssignment.isTemporary,
            startDate:                assetAssignment.startDate,
            endDate:                  assetAssignment.endDate,
            untrackedAssestsIncluded: assetAssignment.untrackedAssestsIncluded,
            notes:                    assetAssignment.notes
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default assetAssignmentStore;