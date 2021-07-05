import { craftEvent, CraftEventArgs } from "@cosmos/flenderson-functions-shared";
import { FunctionInvocation, StoreFunctionEvent } from "@cosmos/types";
import { WRDSBFlendersonEventSubject, WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types";

export function craftCreateEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubjectDataType = extractEventSubjectDataType(functionInvocation);
    const tagsRoot = extractTagsRoot(functionInvocation);

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/create` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Create` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'create';
    const label = `${functionInvocation.functionDataType} record created.`;
    const tags = [
        "flenderson", 
        "create_record",
        `${tagsRoot}_change`
    ] as WRDSBFlendersonEventTag[];

    const craftEventArgs: CraftEventArgs = {
        recordID: oldRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags,
    }

    const event = craftEvent(craftEventArgs);
    return event;
}


export function craftUpdateEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubjectDataType = extractEventSubjectDataType(functionInvocation);
    const tagsRoot = extractTagsRoot(functionInvocation);

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/update` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Update` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'update';
    const label = `${functionInvocation.functionDataType} record updated.`;
    const tags = [
        "flenderson",
        "update_record",
        `${tagsRoot}_change`
    ] as WRDSBFlendersonEventTag[];

    const craftEventArgs: CraftEventArgs = {
        recordID: oldRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags,
    }

    const event = craftEvent(craftEventArgs);
    return event;
}


export function craftDeleteEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubjectDataType = extractEventSubjectDataType(functionInvocation);
    const tagsRoot = extractTagsRoot(functionInvocation);

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/delete` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Delete` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'delete';
    const label = `${functionInvocation.functionDataType} record deleted.`;
    const tags = [
        "flenderson", 
        "delete_record",
        `${tagsRoot}_change`
    ] as WRDSBFlendersonEventTag[];

    const craftEventArgs: CraftEventArgs = {
        recordID: oldRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags,
    }

    const event = craftEvent(craftEventArgs);
    return event;
}

export interface CraftStorageEventArgs {
    eventSubjectDataType: CraftStorageEventSubjectDataType;
    tagsRoot: CraftStorageEventTagsRoot;
};

function extractEventSubjectDataType(functionInvocation: FunctionInvocation): CraftStorageEventSubjectDataType{
    switch (functionInvocation.functionDataType) {
        case 'IPPSPerson':
            return 'ipps-person';
            break;
    
        default:
            break;
    }
} 

function extractTagsRoot(functionInvocation: FunctionInvocation): CraftStorageEventTagsRoot{
    switch (functionInvocation.functionDataType) {
        case 'IPPSPerson':
            return 'ipps_person';
            break;
    
        default:
            break;
    }
} 

export type CraftStorageEventSubjectDataType = 'ipps-person';

export type CraftStorageEventTagsRoot = 'ipps_person';