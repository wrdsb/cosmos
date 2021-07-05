import { FunctionInvocation, WRDSBEvent, WRDSBEventData } from "@cosmos/types";
import { StoreFunctionEvent } from "@cosmos/types";
import { WRDSBFlendersonEventSubject, WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types";
import { FlendersonPerson, FlendersonPosition, IPPSDirectory, IPPSEmployeeGroup, IPPSJob, IPPSLocation, IPPSPal, IPPSPerson, IPPSPosition } from "@cosmos/types";

export interface CraftEventArgs {
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


export function craftEvent(args: CraftEventArgs): WRDSBEvent {

    const eventData: WRDSBEventData = {
        source: `/${args.eventSubject}/${args.recordID}`,
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
