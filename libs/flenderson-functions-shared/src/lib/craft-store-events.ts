import { craftEvent, CraftEventArgs } from "@cosmos/flenderson-functions-shared";
import { StoreFunctionEvent } from "@cosmos/types";
import { WRDSBFlendersonEventSubject, WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types";

export function craftCreateEvent(oldRecord, newRecord, functionInvocation, args: CraftStorageEventArgs) {
    const eventSubject = `/wrdsb/flenderson/${args.eventSubjectDataType}/create` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Create` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'create';
    const label = `${functionInvocation.functionDataType} record created.`;
    const tags = [
        "flenderson", 
        "create_record",
        `${args.tagsRoot}_change`
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


export function craftUpdateEvent(oldRecord, newRecord, functionInvocation, args: CraftStorageEventArgs) {
    const eventSubject = `/wrdsb/flenderson/${args.eventSubjectDataType}/update` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Update` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'update';
    const label = `${functionInvocation.functionDataType} record updated.`;
    const tags = [
        "flenderson",
        "update_record",
        `${args.tagsRoot}_change`
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


export function craftDeleteEvent(oldRecord, newRecord, functionInvocation, args: CraftStorageEventArgs) {
    const eventSubject = `/wrdsb/flenderson/${args.eventSubjectDataType}/delete` as WRDSBFlendersonEventSubject;
    const eventType = `Flenderson.${functionInvocation.functionDataType}.Delete` as WRDSBFlendersonEventType;
    const operation: StoreFunctionEvent = 'delete';
    const label = `${functionInvocation.functionDataType} record deleted.`;
    const tags = [
        "flenderson", 
        "delete_record",
        `${args.tagsRoot}_change`
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
    eventSubjectDataType: string;
    tagsRoot: string;
};
