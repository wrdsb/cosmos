import { DeviceLoanSubmission } from "./device-loan-submission";
import { DeviceReturnSubmission } from "./device-return-submission";

export interface DeviceLoan {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    assetID?: string;

    deviceType?: string;
    locationName?: string;

    loans?: any;
    returns?: any;
}