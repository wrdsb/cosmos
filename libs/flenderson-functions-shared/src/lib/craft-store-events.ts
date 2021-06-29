import { craftEvent, CraftEventArgs } from "@cosmos/flenderson-functions-shared";
import { StoreFunctionEvent } from "@cosmos/types";
import { WRDSBFlendersonEventSubject, WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types";

export function craftCreateEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubject: WRDSBFlendersonEventSubject = '/wrdsb/flenderson/ipps-person/create';
    const eventType: WRDSBFlendersonEventType = 'Flenderson.IPPSPerson.Create';
    const operation: StoreFunctionEvent = 'create';
    const label = `${newRecord?.email}'s IPPS record created.`;
    const tags: WRDSBFlendersonEventTag[] = [
        "flenderson", 
        "ipps_person_change",
        "person_change"
    ];

    const args: CraftEventArgs = {
        recordID: oldRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags,
    }

    const event = craftEvent(args);
    return event;
}


export function craftUpdateEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubject: WRDSBFlendersonEventSubject = '/wrdsb/flenderson/ipps-person/update';
    const eventType: WRDSBFlendersonEventType = 'Flenderson.IPPSPerson.Update';
    const operation: StoreFunctionEvent = 'update';
    const label = `${newRecord?.email}'s IPPS record updated.`;
    const tags: WRDSBFlendersonEventTag[] = [
        "flenderson", 
        "ipps_person_change",
        "person_change"
    ];

    const args: CraftEventArgs = {
        recordID: oldRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags,
    }

    const event = craftEvent(args);
    return event;
}


export function craftDeleteEvent(oldRecord, newRecord, functionInvocation) {
    const eventSubject: WRDSBFlendersonEventSubject = '/wrdsb/flenderson/ipps-person/delete';
    const eventType: WRDSBFlendersonEventType = 'Flenderson.IPPSPerson.Delete';
    const operation: StoreFunctionEvent = 'delete';
    const label = `${oldRecord?.email}'s IPPS record deleted.`;
    const tags: WRDSBFlendersonEventTag[] = [
        "flenderson", 
        "ipps_person_change",
        "person_change"
    ];

    const args: CraftEventArgs = {
        recordID: oldRecord?.id,
        eventSubject: eventSubject,
        eventType: eventType,
        functionInvocation: functionInvocation,
        operation: operation,
        label: label,
        tags: tags,
    }

    const event = craftEvent(args);
    return event;
}
