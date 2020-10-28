import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, DeviceLoanSubmissionStoreFunctionRequest, DeviceLoanSubmissionStoreFunctionRequestPayload, DeviceLoanSubmission } from "@cosmos/types";

const deviceLoanSubmissionStore: AzureFunction = async function (context: Context, triggerMessage: DeviceLoanSubmissionStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoanSubmission',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as DeviceLoanSubmissionStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as DeviceLoanSubmissionStoreFunctionRequestPayload;

    const payloadForHash = JSON.stringify({
        serialNumber:           payload.serialNumber,
        submittedAssetID:       payload.submittedAssetID,
        correctedAssetID:       payload.correctedAssetID,
        deviceType:             payload.deviceType,
        locationName:           payload.locationName,
        loanedBy:               payload.loanedBy,
        loanedToName:           payload.loanedToName,
        loanedToNumber:         payload.loanedToNumber,
        loanedToEmail:          payload.loanedToEmail,
        loanedToRole:           payload.loanedToRole,
        receivedBy:             payload.receivedBy,
        isSEADevice:            payload.isSEADevice,
        addedToSchoolInventory: payload.addedToSchoolInventory,
        peripheralsProvided:    payload.peripheralsProvided,
        timestamp:              payload.timestamp,
        notes:                  payload.notes
        });
    const payloadHash = createHash('md5').update(payloadForHash).digest('hex');

    const oldRecord = context.bindings.recordIn;
    const oldHash = oldRecord.changeDetectionHash;
    const changedDetected = (oldHash === payloadHash) ? false : true;

    let newRecord = {
        created_at: '',
        updated_at: '',
        deleted_at: '',
        deleted: false,

        id: '',
        powerAppsId: '',
        changeDetectionHash: '',

        serialNumber: '',
        submittedAssetID: '',
        correctedAssetID: '',
        deviceType: '',
        locationName: '',

        loanedBy: '',
        loanedToName: '',
        loanedToNumber: '',
        loanedToEmail: '',
        loanedToRole: '',
        receivedBy: '',

        isSEADevice: false,
        addedToSchoolInventory: false,
        peripheralsProvided: '',
        timestamp: '',
        notes: ''
        } as DeviceLoanSubmission;

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

    if (changedDetected) {
        context.bindings.recordOut = result.newRecord;

        context.bindings.deviceLoansStore = {
            operation: 'patch',
            payload: {
                assetID: result.newRecord.correctedAssetID,
                loans: [
                    result.newRecord
                ]
            }
        }

        const logPayload = result.event;
        functionInvocation.logPayload = logPayload;
        context.log(logPayload);
    }
    
    context.log(functionInvocation);
    context.done(null, functionInvocation);

    function doDelete(oldRecord, newRecord, payload) {
        let event = {};

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.changeDetectionHash = payloadHash;
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            event = craftDeleteEvent(oldRecord, newRecord);
        }

        return {event: event, newRecord: newRecord};
    }

    function doPatch(oldRecord, newRecord, payload) {
        let event = {};

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.changeDetectionHash = payloadHash;
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
    
            event = craftCreateEvent(oldRecord, newRecord);

        } else {
            if (changedDetected) {
                // Merge request object into current record
                newRecord = Object.assign(newRecord, oldRecord, payload);
                newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
        
                // patching a record implicitly undeletes it
                newRecord.deleted_at = '';
                newRecord.deleted = false;

                event = craftUpdateEvent(oldRecord, newRecord);
            } else {
                newRecord = oldRecord;
                event = false;
            }
        }

        return {event: event, newRecord: newRecord};
    }
    
    function doReplace(oldRecord, newRecord, payload) {
        let event = {};

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.changeDetectionHash = payloadHash;
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;
        
            event = craftCreateEvent(oldRecord, newRecord);

        } else {
            if (changedDetected) {
                newRecord = Object.assign(newRecord, payload);
                newRecord.changeDetectionHash = payloadHash;
                newRecord.created_at = oldRecord.created_at;
                newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

                // replacing a record implicitly undeletes it
                newRecord.deleted_at = '';
                newRecord.deleted = false;
        
                event = craftUpdateEvent(oldRecord, newRecord);
            } else {
                newRecord = oldRecord;
                event = false;
            }
        }

        return {event: event, newRecord: newRecord};
    }

    function craftCreateEvent(old_record, new_record) {
        let event_type = 'Quartermaster.DeviceLoanSubmission.Create';
        let source = 'create';
        let schema = 'create';
        let label = `DeviceLoanSubmission ${new_record.id} created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftUpdateEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.DeviceLoanSubmission.Update';
        let source = 'update';
        let schema = 'update';
        let label = `DeviceLoanSubmission ${new_record.id} updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftDeleteEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.DeviceLoanSubmission.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `DeviceLoanSubmission ${new_record.id} deleted.`;
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
            source: `/quartermaster/device-loan-submission/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.quartermaster.device-loan-submission.${schema}.json`,

            label: label,
            tags: [
                "quartermaster", 
                "device_loan_submission_change"
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
};

export default deviceLoanSubmissionStore;