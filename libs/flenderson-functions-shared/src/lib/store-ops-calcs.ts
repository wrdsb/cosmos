import { FunctionInvocation } from "@cosmos/types";

export interface CalcArgs<T> {
    oldRecord: T;
    newRecord: T;
    payload: T;
    functionInvocation: FunctionInvocation;
};

export interface CalcResult<T> {
    eventOp: string;
    calcRecord: T
};

export function calcPatch<T>(calcArgs: CalcArgs<T>): CalcResult<T> {
    const oldRecord = calcArgs.oldRecord;
    const newRecord = calcArgs.newRecord;
    const payload = calcArgs.payload;
    const functionInvocation = calcArgs.functionInvocation;

    let calcRecord: T = Object.assign({}, newRecord) as T;
    let eventOp = '';

    if (!oldRecord) {
        calcRecord = Object.assign(newRecord, payload);
        calcRecord['createdAt'] = functionInvocation.functionInvocationTimestamp;
        calcRecord['updatedAt'] = functionInvocation.functionInvocationTimestamp;

        // patching a record implicitly undeletes it
        calcRecord['deletedAt'] = '';
        calcRecord['deleted'] = false;

        eventOp = 'create';

    } else {
        // Merge request object into current record
        calcRecord = Object.assign(newRecord, oldRecord, payload);
        calcRecord['updatedAt'] = functionInvocation.functionInvocationTimestamp;

        // patching a record implicitly undeletes it
        calcRecord['deletedAt'] = '';
        calcRecord['deleted'] = false;

        eventOp = 'update';
    }

    const calResult = {
        eventOp: eventOp,
        calcRecord: calcRecord as T
    };

    return calResult;
}


export function calcReplace<T>(calcArgs: CalcArgs<T>): CalcResult<T> {
    const oldRecord = calcArgs.oldRecord;
    const newRecord = calcArgs.newRecord;
    const payload = calcArgs.payload;
    const functionInvocation = calcArgs.functionInvocation;

    let calcRecord: T = Object.assign({}, newRecord) as T;
    let eventOp = '';

    if (!oldRecord) {
        calcRecord = Object.assign(newRecord, payload);
        calcRecord['createdAt'] = functionInvocation.functionInvocationTimestamp;
        calcRecord['updatedAt'] = functionInvocation.functionInvocationTimestamp;

        // replacing a record implicitly undeletes it
        calcRecord['deletedAt'] = '';
        calcRecord['deleted'] = false;

        eventOp = 'create';

    } else {
        calcRecord = Object.assign(newRecord, payload);
        calcRecord['updatedAt'] = functionInvocation.functionInvocationTimestamp;
        calcRecord['updatedAt'] = functionInvocation.functionInvocationTimestamp;

        // replacing a record implicitly undeletes it
        calcRecord['deletedAt'] = '';
        calcRecord['deleted'] = false;

        eventOp = 'update';
    }

    const calResult = {
        eventOp: eventOp,
        calcRecord: calcRecord as T
    };

    return calResult;
}


export function calcDelete<T>(calcArgs: CalcArgs<T>): CalcResult<T> {
    const oldRecord = calcArgs.oldRecord;
    const newRecord = calcArgs.newRecord;
    const payload = calcArgs.payload;
    const functionInvocation = calcArgs.functionInvocation;

    let calcRecord: T = Object.assign({}, newRecord) as T;
    let eventOp = '';

    // check for existing record
    if (!oldRecord) {
        calcRecord = Object.assign(newRecord, payload);
        calcRecord['createdAt'] = functionInvocation.functionInvocationTimestamp;
        calcRecord['updatedAt'] = functionInvocation.functionInvocationTimestamp;

        // mark the record as deleted
        calcRecord['deletedAt'] = functionInvocation.functionInvocationTimestamp;
        calcRecord['deleted'] = true;
        
        eventOp = 'delete';

    } else {
        calcRecord = Object.assign(newRecord, oldRecord);

        // mark the record as deleted
        calcRecord['deletedAt'] = functionInvocation.functionInvocationTimestamp;
        calcRecord['deleted'] = true;

        eventOp = 'delete';
    }

    const calResult = {
        eventOp: eventOp,
        calcRecord: calcRecord as T
    };

    return calResult;
}
