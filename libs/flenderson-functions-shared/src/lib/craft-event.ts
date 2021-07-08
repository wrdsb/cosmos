import { FunctionInvocation } from "@cosmos/types";
import { WRDSBEvent, WRDSBEventData } from "@cosmos/types";
import { WRDSBFlendersonEventSubject, WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types";

export interface CraftEventArgs {
    eventSubject: WRDSBFlendersonEventSubject;
    eventType: WRDSBFlendersonEventType;
    label: string;
    tags: WRDSBFlendersonEventTag[];

    functionInvocationID: string;
    functionInvocationTimestamp: string;
    newRecord?;
    oldRecord?;
}


export function craftEvent(args: CraftEventArgs): WRDSBEvent {

    const eventData: WRDSBEventData = {
        source: `${args.eventSubject}/${args.functionInvocationID}`,
        functionInvocationID: args.functionInvocationID,
        label: args.label,
        tags: args.tags,
        contentType: "application/json",
        oldRecord: args.oldRecord,
        newRecord: args.newRecord
    };

    const event: WRDSBEvent = {
        subject: args.eventSubject,
        eventType: args.eventType,
        eventTime: args.functionInvocationTimestamp,
        id: `${args.eventType}-${args.functionInvocationID}`,
        data: eventData,
        dataVersion: "1.0",
    };

    // TODO: check message length
    return event;
}


