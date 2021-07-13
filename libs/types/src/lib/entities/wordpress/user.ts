import { CosmosCoreFields } from "@cosmos/types";

interface WPUser extends CosmosCoreFields {
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

    siteURL?: string;
    siteDomain?: string;
    siteSlug?: string;
    siteLink?: string;

    username?: string;
    email?: string;

    name?: string;
    firstName?: string;
    lastName?: string;
    nickname?: string;

    description?: string;
    link?: string;
    slug?: string;
    url?: string;

    locale?: string;
    registeredDate?: string;

    password?: string;

    roles?: string[];

    capabilities?: any;
    extraCapabilities?: any;
    avatarURLs?: any;
    meta?: any;
}

export { WPUser };