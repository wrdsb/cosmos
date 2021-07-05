import { AzureFunction, Context } from "@azure/functions";
import { UTCDateTime, FunctionInvocation, FlendersonJobType, FlendersonPersonStoreFunctionRequest, StoreFunctionOperation, FlendersonPersonStoreFunctionRequestPayload, FlendersonPerson } from "@cosmos/types";
import { CalcArgs, CalcResult } from "@cosmos/flenderson-functions-shared";
import { calcPatch, calcReplace, calcDelete, makeHashFlendersonPerson } from "@cosmos/flenderson-functions-shared";
import { craftCreateEvent, craftUpdateEvent, craftDeleteEvent } from "@cosmos/flenderson-functions-shared";

const flendersonPositionStore: AzureFunction = async function (context: Context, triggerMessage: FlendersonPersonStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON() as UTCDateTime,
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'FlendersonPerson',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: FlendersonJobType = 'WRDSB.Flenderson.FlendersonPerson.Store';
    functionInvocation.jobType = jobType;
    
    const triggerObject = triggerMessage as FlendersonPersonStoreFunctionRequest;
    const operation = triggerObject.operation as StoreFunctionOperation;
    const payload = triggerObject.payload as FlendersonPerson;

    const oldRecord = context.bindings.recordIn;

    const newRecord = {
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        deleted: false,

        id: '',

        email: '',
        username: '',
        employeeID: '',
        ein: '',
    
        activityCode: '',
    
        firstName: '',
        lastName: '',
        fullName: '',
        sortableName: '',
    
        locationCodes: [],
        schoolCodes: [],
        jobCodes: [],
        employeeGroupCodes: [],
    
        homeLocation: '',
        directory: '',
        phone: '',
        extension: '',
        mbxnumber: '',
    
        numberOfPositions:       0,
        numberOfActivePositions: 0,
        positions:               []
    } as FlendersonPerson;

    const calcArgs: CalcArgs<FlendersonPerson> = {
        oldRecord: oldRecord,
        newRecord: newRecord,
        payload: payload,
        functionInvocation: functionInvocation
    };

    let result: CalcResult<FlendersonPerson>;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = calcDelete<FlendersonPerson>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = calcPatch<FlendersonPerson>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = calcReplace<FlendersonPerson>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        default:
            break;
    }

    const calcRecord = result.calcRecord;
    const eventOp = result.eventOp;

    calcRecord.changeDetectionHash = makeHashFlendersonPerson(calcRecord);
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

export default flendersonPositionStore;
