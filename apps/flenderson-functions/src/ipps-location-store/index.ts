import { AzureFunction, Context } from "@azure/functions";
import { UTCDateTime, FunctionInvocation, FlendersonJobType, IPPSLocationStoreFunctionRequest, StoreFunctionOperation, IPPSLocation } from "@cosmos/types";
import { CalcArgs, CalcResult } from "@cosmos/flenderson-functions-shared";
import { calcPatch, calcReplace, calcDelete, makeHashIPPSLocation } from "@cosmos/flenderson-functions-shared";
import { craftCreateEvent, craftUpdateEvent, craftDeleteEvent } from "@cosmos/flenderson-functions-shared";

const ippsLocationStore: AzureFunction = async function (context: Context, triggerMessage: IPPSLocationStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON() as UTCDateTime,
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSLocation',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSLocation.Store';
    functionInvocation.jobType = jobType;
    
    const triggerObject = triggerMessage as IPPSLocationStoreFunctionRequest;
    const operation = triggerObject.operation as StoreFunctionOperation;
    const payload = triggerObject.payload as IPPSLocation;

    const oldRecord = context.bindings.recordIn;

    const newRecord = {
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        deleted: false,

        id: '',

        locationCode: '',
        locationType: '',
        locationDescription: '',
        locationAbbreviation: '',

        schoolCode: '',
        panel: '',
    } as IPPSLocation;

    const calcArgs: CalcArgs<IPPSLocation> = {
        oldRecord: oldRecord,
        newRecord: newRecord,
        payload: payload,
        functionInvocation: functionInvocation
    };

    let result: CalcResult<IPPSLocation>;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = calcDelete<IPPSLocation>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = calcPatch<IPPSLocation>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = calcReplace<IPPSLocation>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        default:
            break;
    }

    const calcRecord = result.calcRecord;
    const eventOp = result.eventOp;

    calcRecord.changeDetectionHash = makeHashIPPSLocation(calcRecord);
    let changeDetected = false;
    let event;
    
    switch (eventOp) {
        case 'create':
            changeDetected = true;
            event = craftCreateEvent(oldRecord, calcRecord, functionInvocation);
            break;
        case 'update':
            changeDetected = (oldRecord.changeDetectionHash === calcRecord.changeDetectionHash) ? false : true;
            event = craftUpdateEvent(oldRecord, calcRecord, functionInvocation);
            break;
        case 'delete':
            changeDetected = true;
            event = craftDeleteEvent(oldRecord, calcRecord, functionInvocation);
            break;
    }

    if (changeDetected) {
        context.bindings.recordOut = calcRecord;
        context.bindings.eventCascade = event;
        context.bindings.changeParse = {
            "payload": {
                oldRecord: (oldRecord) ? oldRecord : null,
                newRecord: calcRecord
            }
        };

        const logPayload = event;
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
        logPayload['recordID'] = calcRecord.id;
        logPayload['newRecordChangeDetectionHash'] = calcRecord.changeDetectionHash;
        logPayload['oldRecordChangeDetectionHash'] = oldRecord.changeDetectionHash;
        functionInvocation.logPayload = logPayload;
    }
    
    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default ippsLocationStore;
