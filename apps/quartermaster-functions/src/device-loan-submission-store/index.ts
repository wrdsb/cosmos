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

    const oldRecord = context.bindings.recordIn;

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
        notes: '',

        wasReturned: false,
        returnedAt: '',
        returnedBy: ''
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

    function makeHash(deviceLoanSubmission: DeviceLoanSubmission): string {
        const objectForHash = JSON.stringify({
            serialNumber:           deviceLoanSubmission.serialNumber,
            submittedAssetID:       deviceLoanSubmission.submittedAssetID,
            correctedAssetID:       deviceLoanSubmission.correctedAssetID,
            deviceType:             deviceLoanSubmission.deviceType,
            locationName:           deviceLoanSubmission.locationName,
            loanedBy:               deviceLoanSubmission.loanedBy,
            loanedToName:           deviceLoanSubmission.loanedToName,
            loanedToNumber:         deviceLoanSubmission.loanedToNumber,
            loanedToEmail:          deviceLoanSubmission.loanedToEmail,
            loanedToRole:           deviceLoanSubmission.loanedToRole,
            receivedBy:             deviceLoanSubmission.receivedBy,
            isSEADevice:            deviceLoanSubmission.isSEADevice,
            addedToSchoolInventory: deviceLoanSubmission.addedToSchoolInventory,
            peripheralsProvided:    deviceLoanSubmission.peripheralsProvided,
            timestamp:              deviceLoanSubmission.timestamp,
            notes:                  deviceLoanSubmission.notes,
            wasReturned:            deviceLoanSubmission.wasReturned,
            returnedAt:             deviceLoanSubmission.returnedAt,
            returnedBy:             deviceLoanSubmission.returnedBy
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default deviceLoanSubmissionStore;