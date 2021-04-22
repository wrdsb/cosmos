import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, AssetAssignmentCreateFunctionRequest, AssetAssignmentCreateFunctionRequestPayload, AssetAssignment } from "@cosmos/types";

const assetAssignmentCreate: AzureFunction = async function (context: Context, triggerMessage: AssetAssignmentCreateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'AssetAssignment',
        functionDataOperation: 'Create',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as AssetAssignmentCreateFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as AssetAssignmentCreateFunctionRequestPayload;

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
        case 'create':
            result = doCreate(newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Created new record.';
            break;
        default:
            break;
    }

    context.bindings.recordOut = result.newRecord;

    const logPayload = result.event;
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);
    
    context.log(functionInvocation);
    context.done(null, functionInvocation);

    function doCreate(newRecord, payload) {
        let event = {};
        let changedDetected = true;

        newRecord = Object.assign(newRecord, payload);
        newRecord.createdAt = functionInvocation.functionInvocationTimestamp;
        newRecord.updatedAt = functionInvocation.functionInvocationTimestamp;

        // creating a record implicitly undeletes it
        newRecord.deletedAt = '';
        newRecord.deleted = false;

        // let database assign an ID
        delete newRecord['id'];

        newRecord.changeDetectionHash = makeHash(newRecord);

        changedDetected = true;
        event = craftCreateEvent(newRecord);

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

export default assetAssignmentCreate;