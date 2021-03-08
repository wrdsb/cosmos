export interface DeviceLoan {
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    deleted?: boolean;

    id?: string;
    powerAppsId?: string;
    changeDetectionHash?: string;

    serialNumber?: string;
    submittedAssetID?: string;
    correctedAssetID?: string;
    deviceType?: string;

    locationName?: string;
    locationCode?: string;
    schoolCode?: string;

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

    wasReturned?: boolean;
    returnedAt?: string;
    returnedBy?: string;
}