type DomainEventSpecVersion = '0.3';
type DomainEventDataContentType = 'application/json';

type DomainEventType = string;
type DomainEventTypeURL = string;
type DomainEventTypeVersion = string;

type DomainEventID = string;
type DomainEventTimestamp = string;
type DomainEventSource = string;

type DomainEventLabel = string;
type DomainEventTags = string[];

interface DomainEvent {
    specversion: DomainEventSpecVersion;
    datacontenttype: DomainEventDataContentType;

    type: DomainEventType,
    typeURL: DomainEventTypeURL,
    typeVersion : DomainEventTypeVersion,

    id : DomainEventID,
    time : DomainEventTimestamp,
    source : DomainEventSource,

    label: DomainEventLabel;
    tags: DomainEventTags;

    payload: DomainEventPayload;
}

interface DomainEventPayload {
}    
