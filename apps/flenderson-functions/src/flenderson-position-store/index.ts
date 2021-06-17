import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, FlendersonJobType, FlendersonPositionStoreFunctionRequest, StoreFunctionOperation, FlendersonPositionStoreFunctionRequestPayload, FlendersonPosition } from "@cosmos/types";

const flendersonPositionStore: AzureFunction = async function (context: Context, triggerMessage: FlendersonPositionStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPosition',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPosition.Store';
    functionInvocation.jobType = jobType;
    
    const triggerObject = triggerMessage as FlendersonPositionStoreFunctionRequest;
    const operation = triggerObject.operation as StoreFunctionOperation;
    const payload = triggerObject.payload as FlendersonPositionStoreFunctionRequestPayload;

    const oldRecord = context.bindings.recordIn;

    const newRecord = {
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        deleted: false,

        id: '',

        positionID: '',
        employeeID: '',

        employeeGroupCode: '',
        employeeGroupCategory: '',
        employeeGroupDescription: '',
        employeeGroupAbbreviation: '',

        jobCode: '',
        jobDescription: '',
        jobAbbreviation: '',

        locationCode: '',
        LocationType: '',
        locationDescription: '',
        locationAbbreviation: '',
        schoolCode: '',
        panel: '',

        establishmentCode: '',

        isHomeLocation: '',

        positionStartDate: '',
        positionEndDate: '',
    } as FlendersonPosition;

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

        context.bindings.changeParse = {
            "payload": {
                oldRecord: (oldRecord) ? oldRecord : null,
                newRecord: result.newRecord
            }
        };

        const logPayload = result.event;
        logPayload['jobType'] = jobType;
        logPayload['statusCode'] = statusCode;
        logPayload['statusMessage'] = statusMessage;
        functionInvocation.logPayload = logPayload;
        context.log(logPayload);
    } else {
        const logPayload = {};
        logPayload['jobType'] = jobType;
        logPayload['statusCode'] = statusCode;
        logPayload['statusMessage'] = 'No change detected.';
        functionInvocation.logPayload = logPayload;
    }
    
    context.bindings.invocationPostProcessor = functionInvocation;
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

            event = craftDeleteEvent(oldRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deletedAt = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            newRecord.changeDetectionHash = makeHash(newRecord);

            event = craftDeleteEvent(oldRecord);
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

    function craftCreateEvent(newRecord) {
        const eventType = 'Flenderson.FlendersonPosition.Create';
        const source = 'create';
        const schema = 'create';
        const label = `Location ${newRecord.id} created.`;
        const payload = {
            record: newRecord
        };

        const event = craftEvent(newRecord.id, source, schema, eventType, label, payload);
        return event;
    }
    
    function craftUpdateEvent(oldRecord, newRecord) {
        const eventType = 'Flenderson.FlendersonPosition.Update';
        const source = 'update';
        const schema = 'update';
        const label = `Location ${newRecord.id} updated.`;
        const payload = {
            oldRecord: oldRecord,
            newRecord: newRecord,
        };

        const event = craftEvent(newRecord.id, source, schema, eventType, label, payload);
        return event;
    }

    function craftDeleteEvent(oldRecord) {
        const eventType = 'Flenderson.FlendersonPosition.Delete';
        const source = 'delete';
        const schema = 'delete';
        const label = `Location ${oldRecord.id} deleted.`;
        const payload = {
            record: oldRecord
        };

        const event = craftEvent(oldRecord.id, source, schema, eventType, label, payload);
        return event;
    }

    function craftEvent(recordID, source, schema, eventType, label, payload) {
        const event = {
            id: `${eventType}-${functionInvocation.functionInvocationID}`,
            time: functionInvocation.functionInvocationTimestamp,

            type: eventType,
            source: `/flenderson/ipps-location/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.flenderson.ipps-location.${schema}.json`,

            label: label,
            tags: [
                "flenderson", 
                "ipps_location_change",
                "location_change"
            ], 

            data: {
                functionName: functionInvocation.functionName,
                invocationID: functionInvocation.functionInvocationID,
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

    function makeHash(flendersonPosition: FlendersonPosition): string {
        const objectForHash = JSON.stringify({
            positionID:                 flendersonPosition.positionID,
            employeeID:                 flendersonPosition.employeeID,
            employeeGroupCode:          flendersonPosition.employeeGroupCode,
            employeeGroupCategory:      flendersonPosition.employeeGroupCategory,
            employeeGroupDescription:   flendersonPosition.employeeGroupDescription,
            employeeGroupAbbreviation:  flendersonPosition.employeeGroupAbbreviation,
            jobCode:                    flendersonPosition.jobCode,
            jobDescription:             flendersonPosition.jobDescription,
            jobAbbreviation:            flendersonPosition.jobAbbreviation,
            locationCode:               flendersonPosition.locationCode,
            LocationType:               flendersonPosition.LocationType,
            locationDescription:        flendersonPosition.locationDescription,
            locationAbbreviation:       flendersonPosition.locationAbbreviation,
            schoolCode:                 flendersonPosition.schoolCode,
            panel:                      flendersonPosition.panel,
            establishmentCode:          flendersonPosition.establishmentCode,
            isHomeLocation:             flendersonPosition.isHomeLocation,
            positionStartDate:          flendersonPosition.positionStartDate,
            positionEndDate:            flendersonPosition.positionEndDate
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }
};

export default flendersonPositionStore;
