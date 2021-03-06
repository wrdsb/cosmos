export interface GoogleCalendar {
    id?: string;
    searchID?: string;

    kind?: string;

    summary?: string;
    description?: string;
    location?: string;
    timezone?: string;

    conferenceProperties?: GoogleCalendarConferenceProperties
}

export interface GoogleCalendarConferenceProperties {
    allowedConferenceSolutionTypes: string[]
}
