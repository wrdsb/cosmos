import { CosmosCoreFields } from "@cosmos/types";

interface WALDIRUser extends CosmosCoreFields {
    // Fields from CosmosCoreFields
    //createdAt?: DateTime;
    //updatedAt?: DateTime;
    //deletedAt?: DateTime;
    //deleted?: boolean;

    //createdBy?: PersonID;
    //updatedBy?: PersonID;
    //deletedBy?: PersonID;

    //id?: string;
    changeDetectionHash?: string;

    username?: string;
    email?: string;

    name?: string;
    firstName?: string;
    lastName?: string;
    nickname?: string;

    siteIDs?: string[];
    roles?: string[];

    siteMemberships: WPSiteMembership[];
}

interface WPSite {
    siteID?: string;
    siteURL?: string;
    siteDomain?: string;
    siteSlug?: string;
}

interface WPSiteMembership {

}

export { WALDIRUser };