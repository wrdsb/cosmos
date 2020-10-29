export interface DeviceReturnSubmission {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    powerAppsId?: string;
    changeDetectionHash?: string;

    serialNumber?: string;
    submittedAssetID?: string;
    correctedAssetID?: string;
    deviceType?: string;
    locationName?: string;

    loanedBy?: string;
    loanedToName?: string;
    loanedToNumber?: string;
    loanedToEmail?: string;
    loanedToRole?: string;
    receivedBy?: string;

    isSEADevice?: boolean;
    addedToSchoolInventory?: boolean;
    peripheralsProvided?: string;
    timestamp?: string;
    notes?: string;
}