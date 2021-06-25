import { WRDSBFlendersonEventType, WRDSBFlendersonEventTag } from "@cosmos/types"
import { FunctionInvocation } from "@cosmos/types";
import { FlendersonPerson, FlendersonPosition, IPPSDirectory, IPPSEmployeeGroup, IPPSJob, IPPSLocation, IPPSPal, IPPSPerson, IPPSPosition } from "../entities";
import { WRDSBFlendersonEventSubject } from "./flenderson";

export type WRDSBEventSubject =
    WRDSBFlendersonEventSubject;

export type WRDSBEventType =
    WRDSBFlendersonEventType;

export type WRDSBEventTag =
    WRDSBFlendersonEventTag;

// "2017-06-26T18:41:00.9584103Z"
export type UTCDateTime = string;

export type WRDSBEventID = string;
    
export type WRDSBEventSchemaVersion = "1.0";
export type EventGridMetadataVersion = "1";

export interface WRDSBEvent {
    // topic: string; // provided by Event Grid
    subject: WRDSBEventSubject;
    eventType: WRDSBEventType;
    eventTime: UTCDateTime;
    id: WRDSBEventID;
    data: WRDSBEventData;
    dataVersion: WRDSBEventSchemaVersion;
    // metadataVersion: EventGridMetadataVersion; // provided by Event Grid
}

export interface WRDSBEventData {
    // api": "PutBlockList",
    // clientRequestId": "6d79dbfb-0e37-4fc4-981f-442c9ca65760",
    // requestId": "831e1650-001e-001b-66ab-eeb76e000000",
    // eTag": "0x8D4BCC2E4835CD0",
    // contentType": "application/octet-stream",
    // contentLength": 524288,
    // blobType": "BlockBlob",
    // url": "https://oc2d2817345i60006.blob.core.windows.net/oc2d2817345i200097container/oc2d2817345i20002296blob",
    // source: `/flenderson/ipps-person/${recordID}/${source}`,
    // schemaURL?: `ca.wrdsb.flenderson.ipps-person.${schema}.json`,
    // label?: `${oldRecord.email}'s IPPS record deleted.`;

    functionInvocation?: FunctionInvocation,

    ippsDirectory?: IPPSDirectory;
    ippsEmployeeGroup?: IPPSEmployeeGroup;
    ippsJob?: IPPSJob;
    ippsLocation?: IPPSLocation;
    ippsPal?: IPPSPal;
    ippsPerson?: IPPSPerson;
    ippsPostiion?: IPPSPosition;

    flendersonPerson?: FlendersonPerson;
    flendersonPostiion?: FlendersonPosition;

    api?: string;
    clientRequestId?: string;
    requestId?: string;
    eTag?: string;
    contentType: "application/json";
    contentLength?: string;
    blobType?: string;
    url?: string;
    source?: string;
    label?: string;
    tags?: WRDSBEventTag[];
}