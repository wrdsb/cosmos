interface AADGroup {
    // https://docs.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties

    // Indicates if people external to the organization can send messages to the group. 
    // Default value is false.
    // Returned only on $select.
    allowExternalSenders?: boolean;

    // The licenses that are assigned to the group. 
    // Returned only on $select. Read-only.
    assignedLicenses?: AssignedLicense[];

    // Indicates if new members added to the group will be auto-subscribed to receive email notifications.
    // You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group.
    // Default value is false.
    // Returned only on $select.
    autoSubscribeNewMembers?: boolean;
        
    // Describes a classification for the group (such as low, medium or high business impact).
    // Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.
    // Returned by default.
    classification?: string;

    // Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created.
    // The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.
    // For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'.
    // Returned by default. Read-only.
    createdDateTime?: string;

    // For some Azure Active Directory objects (user, group, application), if the object is deleted, it is first logically deleted,
    // and this property is updated with the date and time when the object was deleted.
    // Otherwise this property is null. If the object is restored, this property is updated to null.
    deletedDateTime?: string;

    // An optional description for the group.
    // Returned by default.
    description?: string;
    
    // The display name for the group. This property is required when a group is created and cannot be cleared during updates.
    // Returned by default. Supports $filter and $orderby.
    displayName?: string;
    
    // Specifies the group type and its membership.
    // If the collection contains Unified then the group is a Microsoft 365 group; otherwise it's a security group.
    // If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static.
    // Returned by default. Supports $filter.
    groupTypes?: string[];

    // Indicates whether there are members in this group that have license errors from its group-based license assignment.
    // This property is never returned on a GET operation. 
    // You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true). See an example.
    hasMembersWithLicenseErrors?: boolean;

    // True if the group is not displayed in certain parts of the Outlook UI: 
    // the Address Book, address lists for selecting message recipients, and the Browse Groups dialog for searching groups; otherwise, false.
    // Default value is false.
    // Returned only on $select.
    hideFromAddressLists?: boolean;

    // True if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web; otherwise, false.
    // Default value is false.
    // Returned only on $select.
    hideFromOutlookClients?: boolean;

    // The unique identifier for the group.
    // Returned by default. 
    // Inherited from directoryObject. Key. Not nullable.
    // Read-only.
    id?: string;

    // Indicates whether the signed-in user is subscribed to receive email conversations.
    // Default value is true.
    // Returned only on $select.
    isSubscribedByMail?: boolean;

    // Indicates status of the group license assignment to all members of the group.
    // Default value is false.
    // Read-only.
    // Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete.
    // Returned only on $select.
    // Read-only.
    licenseProcessingState?: LicenseProcessingStateType;

    // The SMTP address for the group, for example, "serviceadmins@contoso.onmicrosoft.com".
    // Returned by default.
    // Read-only.
    // Supports $filter.
    mail?: string;

    // Specifies whether the group is mail-enabled.
    // Returned by default.
    mailEnabled?: boolean; 

    // The mail alias for the group, unique in the organization. This property must be specified when a group is created.
    // Returned by default.
    // Supports $filter.
    mailNickname?: string;

    // Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory.
    // The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.
    // Returned by default.
    // Read-only.
    onPremisesDomainName?: string;

    // Indicates the last time at which the group was synced with the on-premises directory.
    // The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'.
    // Returned by default.
    // Read-only.
    // Supports $filter.
    onPremisesLastSyncDateTime?: string;

    // Contains the on-premises netBios name synchronized from the on-premises directory.
    // The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.
    // Returned by default.
    // Read-only.
    onPremisesNetBiosName?: string;

    // Errors when using Microsoft synchronization product during provisioning.
    // Returned by default.
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];

    // Contains the on-premises SAM account name synchronized from the on-premises directory.
    // The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.
    // Returned by default.
    // Read-only.
    onPremisesSamAccountName?: string;

    // Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud.
    // Returned by default.
    // Read-only.
    onPremisesSecurityIdentifier?: string;

    // true if this group is synced from an on-premises directory; 
    // false if this group was originally synced from an on-premises directory but is no longer synced; 
    // null if this object has never been synced from an on-premises directory (default).
    // Returned by default.
    // Read-only.
    // Supports $filter.
    onPremisesSyncEnabled?: boolean;

    // The preferred data location for the group. For more information, see OneDrive Online Multi-Geo.
    // Returned by default.
    preferredDataLocation?: string;

    // Email addresses for the group that direct to the same group mailbox. 
    // For example: ["SMTP: bob@contoso.com", "smtp: bob@sales.contoso.com"]. The any operator is required to filter expressions on multi-valued properties.
    // Returned by default.
    // Read-only. Not nullable.
    // Supports $filter.
    proxyAddresses?: string[];

    // Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. 
    // The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'.
    // Returned by default.
    // Read-only.
    renewedDateTime?: string;

    // Specifies whether the group is a security group.
    // Returned by default.
    // Supports $filter.
    securityEnabled?: boolean;

    // Security identifier of the group, used in Windows scenarios.
    // Returned by default.
    securityIdentifier?: string;

    // Count of conversations that have received new posts since the signed-in user last visited the group.
    // Returned only on $select.
    unseenCount?: number;

    // Specifies the visibility of a Microsoft 365 group.
    // Possible values are: Private, Public, or Hiddenmembership; blank values are treated as public. See group visibility options to learn more.
    // Visibility can be set only when a group is created; it is not editable.
    // Visibility is supported only for unified groups; it is not supported for security groups.
    // Returned by default.
    visibility?: VisibilityType;

    // TODO: These fields came back from AAD in our query and we guessed at their types
    creationOptions?: string[];
    expirationDateTime?: string;
    isAssignableToRole?: boolean;
    membershipRule?: string;
    membershipRuleProcessingState?: string;
    preferredLanguage?: string;
    resourceBehaviorOptions?: string[];
    resourceProvisioningOptions?: string[];
    theme?: string;
}

interface AssignedLicense {

    // A collection of the unique identifiers for plans that have been disabled.
    // Guid collection
    disabledPlans?: string[];

    // The unique identifier for the SKU.
    // Guid
    skuId?: string;
}

interface OnPremisesProvisioningError {
    
    // Category of the provisioning error.
    // Note: Currently, there is only one possible value. 
    // Possible value: PropertyConflict - indicates a property value is not unique.
    // Other objects contain the same value for the property.
    category?: OnPremisesProvisioningErrorCategory;

    // The date and time at which the error occurred.
    occurredDateTime?: string;

    // Name of the directory property causing the error.
    // Current possible values: UserPrincipalName or ProxyAddress
    propertyCausingError?: PropertyCausingErrorValue;

    // Value of the property causing the error.
    value?: string;
}

type LicenseProcessingStateType = 'QueuedForProcessing' | 'ProcessingInProgress' | 'ProcessingComplete';
type VisibilityType = 'Private' | 'Public' | 'Hiddenmembership';
type OnPremisesProvisioningErrorCategory = 'PropertyConflict';
type PropertyCausingErrorValue = 'UserPrincipalName' | 'ProxyAddress';

export {
    AADGroup
};