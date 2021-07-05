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

    let craftEventArgs: CraftEventArgs = {
        recordID: newRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags
    }
    craftEventArgs = addEventData(newRecord, craftEventArgs);

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

    let craftEventArgs: CraftEventArgs = {
        recordID: newRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags
    }
    craftEventArgs = addEventData(newRecord, craftEventArgs);

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

    let craftEventArgs: CraftEventArgs = {
        recordID: newRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags
    }
    craftEventArgs = addEventData(newRecord, craftEventArgs);

    const event = craftEvent(craftEventArgs);
    return event;
}


export interface CraftStorageEventArgs {
    eventSubjectDataType: CraftStorageEventSubjectDataType;
    tagsRoot: CraftStorageEventTagsRoot;
};


function addEventData(newRecord, craftEventArgs: CraftEventArgs): CraftEventArgs {
    switch (craftEventArgs.functionInvocation.functionDataType) {
        case 'FlendersonPerson':
            craftEventArgs.flendersonPerson = newRecord;
            return craftEventArgs;
            break;

        case 'FlendersonPosition':
            craftEventArgs.flendersonPostiion = newRecord;
            return craftEventArgs;
            break;

        case 'IPPSDirectory':
            craftEventArgs.ippsDirectory = newRecord;
            return craftEventArgs;
            break;

        case 'IPPSEmployeeGroup':
            craftEventArgs.ippsEmployeeGroup = newRecord;
            return craftEventArgs;
            break;

        case 'IPPSJob':
            craftEventArgs.ippsJob = newRecord;
            return craftEventArgs;
            break;

        case 'IPPSLocation':
            craftEventArgs.ippsLocation = newRecord;
            return craftEventArgs;
            break;

        case 'IPPSPal':
            craftEventArgs.ippsPal = newRecord;
            return craftEventArgs;
            break;

        case 'IPPSPerson':
            craftEventArgs.ippsPerson = newRecord;
            return craftEventArgs;
            break;

        case 'IPPSPosition':
            craftEventArgs.ippsPostiion = newRecord;
            return craftEventArgs;
            break;

        default:
            break;
    }
}

function extractEventSubjectDataType(functionInvocation: FunctionInvocation): CraftStorageEventSubjectDataType{
    switch (functionInvocation.functionDataType) {
        case 'FlendersonPerson':
            return 'flenderson-person';
            break;
    
        case 'FlendersonPosition':
            return 'flenderson-position';
            break;
    
        case 'IPPSDirectory':
            return 'ipps-directory';
            break;
    
        case 'IPPSEmployeeGroup':
            return 'ipps-employee-group';
            break;
    
        case 'IPPSJob':
            return 'ipps-job';
            break;
    
        case 'IPPSLocation':
            return 'ipps-location';
            break;
    
        case 'IPPSPal':
            return 'ipps-pal';
            break;
    
        case 'IPPSPerson':
            return 'ipps-person';
            break;
    
        case 'IPPSPosition':
            return 'ipps-position';
            break;
    
        default:
            break;
    }
} 

function extractTagsRoot(functionInvocation: FunctionInvocation): CraftStorageEventTagsRoot{
    switch (functionInvocation.functionDataType) {
        case 'FlendersonPerson':
            return 'flenderson_person';
            break;
    
        case 'FlendersonPosition':
            return 'flenderson_position';
            break;
    
        case 'IPPSDirectory':
            return 'ipps_directory';
            break;
    
        case 'IPPSEmployeeGroup':
            return 'ipps_employee_group';
            break;
    
        case 'IPPSJob':
            return 'ipps_job';
            break;
    
        case 'IPPSLocation':
            return 'ipps_location';
            break;
    
        case 'IPPSPal':
            return 'ipps_pal';
            break;
    
        case 'IPPSPerson':
            return 'ipps_person';
            break;
    
        case 'IPPSPosition':
            return 'ipps_position';
            break;
    
        default:
            break;
    }
} 

export type CraftStorageEventSubjectDataType =
'flenderson-person' |
'flenderson-position' |
'ipps-directory' |
'ipps-employee-group' |
'ipps-job' |
'ipps-location' |
'ipps-pal' |
'ipps-person' |
'ipps-position' ;


export type CraftStorageEventTagsRoot =
'flenderson_person' |
'flenderson_position' |
'ipps_directory' |
'ipps_employee_group' |
'ipps_job' |
'ipps_location' |
'ipps_pal' |
'ipps_person' |
'ipps_position';