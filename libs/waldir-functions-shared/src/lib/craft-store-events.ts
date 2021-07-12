import { FunctionInvocation } from "@cosmos/types";
import { WRDSBEvent, WRDSBEventData } from "@cosmos/types";
import { WRDSBWALDIREventSubject, WRDSBWALDIREventType, WRDSBWALDIREventTag } from "@cosmos/types";
import { StoreFunctionEvent } from "@cosmos/types";
import { WALDIRUser, WPUser } from "@cosmos/types";


export function craftStoreCreateEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubjectDataType = extractEventSubjectDataType(functionInvocation);
    const tagsRoot = extractTagsRoot(functionInvocation);

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/store/create` as WRDSBWALDIREventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Store.Create` as WRDSBWALDIREventType;
    const operation: StoreFunctionEvent = 'create';
    const label = `${functionInvocation.functionDataType} record created.`;
    const tags = [
        "waldir",
        "store",
        "waldir_store",
        "store_create",
        `${tagsRoot}_change`
    ] as WRDSBWALDIREventTag[];

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

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/store/update` as WRDSBWALDIREventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Store.Update` as WRDSBWALDIREventType;
    const operation: StoreFunctionEvent = 'update';
    const label = `${functionInvocation.functionDataType} record updated.`;
    const tags = [
        "waldir",
        "store",
        "waldir_store",
        "store_update",
        `${tagsRoot}_change`
    ] as WRDSBWALDIREventTag[];

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

    const eventSubject = `/wrdsb/flenderson/${eventSubjectDataType}/store/delete` as WRDSBWALDIREventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Store.Delete` as WRDSBWALDIREventType;
    const operation: StoreFunctionEvent = 'delete';
    const label = `${functionInvocation.functionDataType} record deleted.`;
    const tags = [
        "flenderson", 
        "store",
        "flenderson_store",
        "store_delete",
        `${tagsRoot}_change`
    ] as WRDSBWALDIREventTag[];

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
    eventSubject: WRDSBWALDIREventSubject;
    eventType: WRDSBWALDIREventType;
    functionInvocation: FunctionInvocation;
    label: string;
    tags: WRDSBWALDIREventTag[];

    waldirUser?: WALDIRUser;

    wpUser?: WPUser;
}


function craftStoreEvent(args: CraftStoreEventArgs): WRDSBEvent {

    const eventData: WRDSBEventData = {
        source: `${args.eventSubject}/${args.recordID}`,
        functionInvocationID: args.functionInvocation.functionInvocationID,
        label: args.label,
        tags: args.tags,
        contentType: "application/json"
    };

    if (args.waldirUser)   { eventData.waldirUser = args.waldirUser };
    if (args.wpUser)       { eventData.wpUser = args.wpUser };

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
        case 'WALDIRUser':
            craftEventArgs.waldirUser = newRecord;
            return craftEventArgs;
            break;

        case 'WPUser':
            craftEventArgs.wpUser = newRecord;
            return craftEventArgs;
            break;

        default:
            break;
    }
}

function extractEventSubjectDataType(functionInvocation: FunctionInvocation): CraftStorageEventSubjectDataType{
    switch (functionInvocation.functionDataType) {
        case 'WALDIRUser':
            return 'waldir-user';
            break;
    
        case 'WPUser':
            return 'wp-user';
            break;
    
        default:
            break;
    }
} 

function extractTagsRoot(functionInvocation: FunctionInvocation): CraftStorageEventTagsRoot{
    switch (functionInvocation.functionDataType) {
        case 'WALDIRUser':
            return 'waldir_user';
            break;
    
        case 'WPUser':
            return 'wp_user';
            break;
    
        default:
            break;
    }
} 

type CraftStorageEventSubjectDataType =
'waldir-user' |
'wp-user';


type CraftStorageEventTagsRoot =
'waldir_user' |
'wp_user';