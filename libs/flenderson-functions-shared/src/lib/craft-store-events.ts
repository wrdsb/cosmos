import { FunctionInvocation } from "@cosmos/types";
import { WRDSBEvent, WRDSBEventData } from "@cosmos/types";
import { WRDSBFlendersonEventSubject, WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types";
import { StoreFunctionEvent } from "@cosmos/types";
import { FlendersonPerson, FlendersonPosition, IPPSDirectory, IPPSEmployeeGroup, IPPSJob, IPPSLocation, IPPSPal, IPPSPerson, IPPSPosition } from "@cosmos/types";


export function craftStoreCreateEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubjectDataType = extractEventSubjectDataType(functionInvocation);
    const tagsRoot = extractTagsRoot(functionInvocation);

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/store/create` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Store.Create` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'create';
    const label = `${functionInvocation.functionDataType} record created.`;
    const tags = [
        "flenderson",
        "store",
        "flenderson_store",
        "store_create",
        `${tagsRoot}_change`
    ] as WRDSBFlendersonEventTag[];

    let craftEventArgs: CraftStoreEventArgs = {
        recordID: newRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags
    }
    craftEventArgs = addEventData(newRecord, craftEventArgs);

    const event = craftStoreEvent(craftEventArgs);
    return event;
}


export function craftStoreUpdateEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubjectDataType = extractEventSubjectDataType(functionInvocation);
    const tagsRoot = extractTagsRoot(functionInvocation);

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/store/update` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Store.Update` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'update';
    const label = `${functionInvocation.functionDataType} record updated.`;
    const tags = [
        "flenderson",
        "store",
        "flenderson_store",
        "store_update",
        `${tagsRoot}_change`
    ] as WRDSBFlendersonEventTag[];

    let craftEventArgs: CraftStoreEventArgs = {
        recordID: newRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags
    }
    craftEventArgs = addEventData(newRecord, craftEventArgs);

    const event = craftStoreEvent(craftEventArgs);
    return event;
}


export function craftStoreDeleteEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubjectDataType = extractEventSubjectDataType(functionInvocation);
    const tagsRoot = extractTagsRoot(functionInvocation);

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/store/delete` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Store.Delete` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'delete';
    const label = `${functionInvocation.functionDataType} record deleted.`;
    const tags = [
        "flenderson", 
        "store",
        "flenderson_store",
        "store_delete",
        `${tagsRoot}_change`
    ] as WRDSBFlendersonEventTag[];

    let craftEventArgs: CraftStoreEventArgs = {
        recordID: newRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags
    }
    craftEventArgs = addEventData(newRecord, craftEventArgs);

    const event = craftStoreEvent(craftEventArgs);
    return event;
}


interface CraftStoreEventArgs {
    recordID: string;
    operation: StoreFunctionEvent;
    eventSubject: WRDSBFlendersonEventSubject;
    eventType: WRDSBFlendersonEventType;
    functionInvocation: FunctionInvocation;
    label: string;
    tags: WRDSBFlendersonEventTag[];

    flendersonPerson?: FlendersonPerson;
    flendersonPostiion?: FlendersonPosition;

    ippsDirectory?: IPPSDirectory;
    ippsEmployeeGroup?: IPPSEmployeeGroup;
    ippsJob?: IPPSJob;
    ippsLocation?: IPPSLocation;
    ippsPal?: IPPSPal;
    ippsPerson?: IPPSPerson;
    ippsPostiion?: IPPSPosition;
}


function craftStoreEvent(args: CraftStoreEventArgs): WRDSBEvent {

    const eventData: WRDSBEventData = {
        source: `${args.eventSubject}/${args.recordID}`,
        functionInvocationID: args.functionInvocation.functionInvocationID,
        label: args.label,
        tags: args.tags,
        contentType: "application/json"
    };

    if (args.flendersonPerson)   { eventData.flendersonPerson = args.flendersonPerson };
    if (args.flendersonPostiion) { eventData.flendersonPostiion = args.flendersonPostiion };
    if (args.ippsDirectory)      { eventData.ippsDirectory = args.ippsDirectory };
    if (args.ippsEmployeeGroup)  { eventData.ippsEmployeeGroup = args.ippsEmployeeGroup };
    if (args.ippsJob)            { eventData.ippsJob = args.ippsJob };
    if (args.ippsLocation)       { eventData.ippsLocation = args.ippsLocation };
    if (args.ippsPal)            { eventData.ippsPal = args.ippsPal };
    if (args.ippsPerson)         { eventData.ippsPerson = args.ippsPerson };
    if (args.ippsPostiion)       { eventData.ippsPostiion = args.ippsPostiion };

    const event: WRDSBEvent = {
        subject: args.eventSubject,
        eventType: args.eventType,
        eventTime: args.functionInvocation.functionInvocationTimestamp,
        id: `${args.eventType}-${args.functionInvocation.functionInvocationID}`,
        data: eventData,
        dataVersion: "1.0",
    };

    // TODO: check message length
    return event;
}


function addEventData(newRecord, craftEventArgs: CraftStoreEventArgs): CraftStoreEventArgs {
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

type CraftStorageEventSubjectDataType =
'flenderson-person' |
'flenderson-position' |
'ipps-directory' |
'ipps-employee-group' |
'ipps-job' |
'ipps-location' |
'ipps-pal' |
'ipps-person' |
'ipps-position' ;


type CraftStorageEventTagsRoot =
'flenderson_person' |
'flenderson_position' |
'ipps_directory' |
'ipps_employee_group' |
'ipps_job' |
'ipps_location' |
'ipps_pal' |
'ipps_person' |
'ipps_position';