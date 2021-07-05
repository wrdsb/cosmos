import { AzureFunction, Context } from "@azure/functions";
import { UTCDateTime, FunctionInvocation, FlendersonJobType, IPPSPositionStoreFunctionRequest, StoreFunctionOperation, IPPSPosition } from "@cosmos/types";
import { CalcArgs, CalcResult } from "@cosmos/flenderson-functions-shared";
import { calcPatch, calcReplace, calcDelete, makeHashIPPSPosition } from "@cosmos/flenderson-functions-shared";
import { craftCreateEvent, craftUpdateEvent, craftDeleteEvent } from "@cosmos/flenderson-functions-shared";

const ippsPositionStore: AzureFunction = async function (context: Context, triggerMessage: IPPSPositionStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON() as UTCDateTime,
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'IPPSPosition',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.IPPSPosition.Store';
    functionInvocation.jobType = jobType;
    
    const triggerObject = triggerMessage as IPPSPositionStoreFunctionRequest;
    const operation = triggerObject.operation as StoreFunctionOperation;
    const payload = triggerObject.payload as IPPSPosition;

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
        jobCode: '',
        locationCode: '',
    
        establishmentCode: '',
        isHomeLocation: '',
    
        positionStartDate: '',
        positionEndDate: '',
    } as IPPSPosition;

    const calcArgs: CalcArgs<IPPSPosition> = {
        oldRecord: oldRecord,
        newRecord: newRecord,
        payload: payload,
        functionInvocation: functionInvocation
    };

    let result: CalcResult<IPPSPosition>;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = calcDelete<IPPSPosition>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = calcPatch<IPPSPosition>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = calcReplace<IPPSPosition>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        default:
            break;
    }

    const calcRecord = result.calcRecord;
    const eventOp = result.eventOp;

    calcRecord.changeDetectionHash = makeHashIPPSPosition(calcRecord);
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
    context.done(null, functionInvocation);
};

export default ippsPositionStore;
