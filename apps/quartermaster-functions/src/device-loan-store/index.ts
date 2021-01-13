import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, DeviceLoanStoreFunctionRequest, DeviceLoanStoreFunctionRequestPayload, DeviceLoan } from "@cosmos/types";

const deviceLoanStore: AzureFunction = async function (context: Context, triggerMessage: DeviceLoanStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoan',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as DeviceLoanStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as DeviceLoanStoreFunctionRequestPayload;

    const oldRecord = context.bindings.recordIn;

    let newRecord = {
        created_at: '',
        updated_at: '',
        deleted_at: '',
        deleted: false,
        id: '',
        assetID: '',
        deviceType: '',
        locationName: '',
        loans: {},
        returns: {},
        schoolInventoryRecord: {},
        hasInventoryRecord: false,
        wasLoaned: false,
        wasReturned: false,
        totalLoans: 0,
        totalReturns: 0,
        isLoaned: false
    } as DeviceLoan;

    let result;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            context.log('Mark record deleted:');
            result = doDelete(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            context.log('Patch record:');
            result = doPatch(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            context.log('Replace record:');
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
            context.log('No old record detected...');
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
            context.log('No old record detected...');
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
            newRecord = Object.assign(newRecord, oldRecord);

            Object.getOwnPropertyNames(payload).forEach(function (property) {
                if (property != 'loans' && property != 'returns') {
                    newRecord[property] = payload[property];
                }
            });

            Object.getOwnPropertyNames(payload.loans).forEach(function (property) {
                newRecord.loans[property] = payload.loans[property];
            });

            Object.getOwnPropertyNames(payload.returns).forEach(function (property) {
                newRecord.returns[property] = payload.returns[property];
            });

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
            context.log('No old record detected...');
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
        let event_type = 'Quartermaster.DeviceLoan.Create';
        let source = 'create';
        let schema = 'create';
        let label = `DeviceLoan ${new_record.id} created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftUpdateEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.DeviceLoan.Update';
        let source = 'update';
        let schema = 'update';
        let label = `DeviceLoan ${new_record.id} updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftDeleteEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.DeviceLoan.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `DeviceLoan ${new_record.id} deleted.`;
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
            source: `/quartermaster/device-loan-/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.quartermaster.device-loan-.${schema}.json`,

            label: label,
            tags: [
                "quartermaster", 
                "device_loan__change"
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

    function makeHash(deviceLoan: DeviceLoan): string {
        const objectForHash = JSON.stringify({
            assetID:                deviceLoan.assetID,
            deviceType:             deviceLoan.deviceType,
            locationName:           deviceLoan.locationName,
            loans:                  deviceLoan.loans,
            returns:                deviceLoan.returns,
            schoolInventoryRecord:  deviceLoan.schoolInventoryRecord,
            hasInventoryRecord:     deviceLoan.hasInventoryRecord,
            wasLoaned:              deviceLoan.wasLoaned,
            wasReturned:            deviceLoan.wasReturned,
            totalLoans:             deviceLoan.totalLoans,
            totalReturns:           deviceLoan.totalReturns,
            isLoaned:               deviceLoan.isLoaned
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash
    }
};

export default deviceLoanStore;