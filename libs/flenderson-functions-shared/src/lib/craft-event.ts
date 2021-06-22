import { FunctionInvocation, WRDSBEvent, WRDSBEventData } from "@cosmos/types";
import { StoreFunctionEvent } from "@cosmos/types";
import { WRDSBFlendersonEventSubject, WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types";

export interface CraftEventArgs {
    recordID: string,
    operation: StoreFunctionEvent,
    eventSubject: WRDSBFlendersonEventSubject,
    eventType: WRDSBFlendersonEventType,
    functionInvocation: FunctionInvocation,
    label: string,
    tags: WRDSBFlendersonEventTag[]
}


export function craftEvent(args: CraftEventArgs): WRDSBEvent {

    const eventData: WRDSBEventData = {
        source: `/flenderson/ipps-person/${args.operation}/${args.recordID}`,
        functionInvocation: args.functionInvocation,
        label: args.label,
        tags: args.tags,
        contentType: "application/json"
    };

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
