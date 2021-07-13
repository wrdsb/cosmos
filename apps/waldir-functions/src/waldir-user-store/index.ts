import { AzureFunction, Context } from "@azure/functions";
import { UTCDateTime, FunctionInvocation, WALDIRJobType, WPUserStoreFunctionRequest, StoreFunctionOperation, WALDIRUser } from "@cosmos/types";
import { CalcArgs, CalcResult } from "@cosmos/waldir-functions-shared";
import { calcPatch, calcReplace, calcDelete, makeHashWPUser } from "@cosmos/waldir-functions-shared";
import { craftStoreCreateEvent, craftStoreUpdateEvent, craftStoreDeleteEvent } from "@cosmos/waldir-functions-shared";

const wpUserStore: AzureFunction = async function (context: Context, triggerMessage: WPUserStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON() as UTCDateTime,
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'WALDIRUser',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: WALDIRJobType = 'WRDSB.WALDIR.WALDIRUser.Store';
    functionInvocation.jobType = jobType;
    
    const triggerObject = triggerMessage as WPUserStoreFunctionRequest;
    const operation = triggerObject.operation as StoreFunctionOperation;
    const payload = triggerObject.payload as WALDIRUser;

    const oldRecord = context.bindings.recordIn;

    const newRecord = {
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        deleted: false,

        createdBy: '',
        updatedBy: '',
        deletedBy: '',

        id: '',

        username: '',
        email: '',
    
        name: '',
        firstName: '',
        lastName: '',
        nickname: '',

        siteIDs: [],
        roles: [],
        siteMemberships: []
    } as WALDIRUser;

    const calcArgs: CalcArgs<WALDIRUser> = {
        oldRecord: oldRecord,
        newRecord: newRecord,
        payload: payload,
        functionInvocation: functionInvocation
    };

    let result: CalcResult<WALDIRUser>;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = calcDelete<WALDIRUser>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = calcPatch<WALDIRUser>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = calcReplace<WALDIRUser>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        default:
            break;
    }

    const calcRecord = result.calcRecord;
    const eventOp = result.eventOp;

    calcRecord.changeDetectionHash = makeHashWPUser(calcRecord);
    let changeDetected = false;
    let event;
    
    switch (eventOp) {
        case 'create':
            changeDetected = true;
            event = craftStoreCreateEvent(oldRecord, calcRecord, functionInvocation);
            break;
        case 'update':
            changeDetected = (oldRecord.changeDetectionHash === calcRecord.changeDetectionHash) ? false : true;
            event = craftStoreUpdateEvent(oldRecord, calcRecord, functionInvocation);
            break;
        case 'delete':
            changeDetected = true;
            event = craftStoreDeleteEvent(oldRecord, calcRecord, functionInvocation);
            break;
    }

    if (changeDetected) {
        context.bindings.recordOut = calcRecord;
        context.bindings.eventCascade = event;
        context.bindings.changeParse = {
            "payload": {
                functionInvocationID: functionInvocation.functionInvocationID,
                functionInvocationTimestamp: functionInvocation.functionInvocationTimestamp,
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

export default wpUserStore;
