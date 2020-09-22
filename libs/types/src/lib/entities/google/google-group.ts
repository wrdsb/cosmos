import { PeopleSetDefinition } from "../sorting-hat";

export interface GoogleGroup {
    id?: string;

    business_owner?: string;
    businessOwner?: string;

    membership_automation_active?: boolean;
    automate_managers?: boolean;
    automate_members?: boolean;
    automate_owners?: boolean;

    managers_people_sets?: PeopleSetDefinition[];
    members_people_sets?: PeopleSetDefinition[];
    owners_people_sets?: PeopleSetDefinition[];

    configuration_automation_active?: boolean;
    configuration_templates?: string[];

    owners?: string[];
    managers?: string[];
    members?: string[];
    
    staffOwned?: boolean;
    studentOwned?: boolean;
    
    staffManaged?: boolean;
    studentManaged?: boolean;

    staffMembership?: boolean;
    studentMembership?: boolean;

    isOpen?: boolean;

    google_id?: string;
    etag?: string;

    email?: string;
    name?: string;
    description?: string;
    aliases?: string[];
    nonEditableAliases?: string[];

    adminCreated?: boolean;

    allowExternalMembers?: AllowExternalMembers;
    allowWebPosting?: AllowWebPosting;
    archiveOnly?: ArchiveOnly;
    customFooterText?: string;
    customReplyTo?: string;
    customRolesEnabledForSettingsToBeMerged?: CustomRolesEnabledForSettingsToBeMerged;
    defaultMessageDenyNotificationText?: string;
    enableCollaborativeInbox?: EnableCollaborativeInbox;
    favoriteRepliesOnTop?: FavoriteRepliesOnTop;
    includeCustomFooter?: IncludeCustomFooter;
    includeInGlobalAddressList?: IncludeInGlobalAddressList;
    isArchived?: IsArchived;
    membersCanPostAsTheGroup?: MembersCanPostAsTheGroup;
    messageModerationLevel?: MessageModerationLevel;
    primaryLanguage?: PrimaryLanguage;
    replyTo?: ReplyTo;
    sendMessageDenyNotification?: SendMessageDenyNotification;
    spamModerationLevel?: SpamModerationLevel;
    whoCanApproveMembers?: WhoCanApproveMembers;
    whoCanAssistContent?: WhoCanAssistContent;
    whoCanContactOwner?: WhoCanContactOwner;
    whoCanDiscoverGroup?: WhoCanDiscoverGroup;
    whoCanJoin?: WhoCanJoin;
    whoCanLeaveGroup?: WhoCanLeaveGroup;
    whoCanModerateContent?: WhoCanModerateContent;
    whoCanModerateMembers?: WhoCanModerateMembers;
    whoCanPostMessage?: WhoCanPostMessage;
    whoCanViewGroup?: WhoCanViewGroup;
    whoCanViewMembership?: WhoCanViewMembership;

    // Deprecated
    allowGoogleCommunication?: AllowGoogleCommunication;
    maxMessageBytes?: number;
    messageDisplayFont?: MessageDisplayFont;
    showInGroupDirectory?: ShowInGroupDirectory;
    whoCanAdd?: string;
    whoCanAddReferences?: string;
    whoCanApproveMessages?: string;
    whoCanAssignTopics?: string;
    whoCanBanUsers?: string;
    whoCanDeleteAnyPost?: string;
    whoCanDeleteTopics?: string;
    whoCanEnterFreeFormTags?: string;
    whoCanHideAbuse?: string;
    whoCanInvite?: string;
    whoCanLockTopics?: string;
    whoCanMakeTopicsSticky?: string;
    whoCanMarkDuplicate?: string;
    whoCanMarkFavoriteReplyOnAnyTopic?: string;
    whoCanMarkFavoriteReplyOnOwnTopic?: string;
    whoCanMarkNoResponseNeeded?: string;
    whoCanModifyMembers?: string;
    whoCanModifyTagsAndCategories?: string;
    whoCanMoveTopicsIn?: string;
    whoCanMoveTopicsOut?: string;
    whoCanPostAnnouncements?: string;
    whoCanTakeTopics?: string;
    whoCanUnassignTopic?: string;
    whoCanUnmarkFavoriteReplyOnAnyTopic?: string;

    // TODO: setter for archiveOnly to handle API rules
    // TODO: setter for customReplyTo to handle API rules
    // TODO: setter for defaultMessageDenyNotificationText to handle API rules, length
    // TODO: setter for messageModerationLevel to handle API rules
    // TODO: setter for name to handle max length
    // TODO: setter for description to handle max length
    // TODO: setter for replyTo to handle API rules
    // TODO: setter for whoCanPostMessage to handle API rules
    // https://developers.google.com/admin-sdk/groups-settings/v1/reference/groups#resource
}

type AllowExternalMembers = "true" | "false";
type AllowGoogleCommunication = "true" | "false";
type AllowWebPosting = "true" | "false";
type ArchiveOnly = "true" | "false";
type CustomRolesEnabledForSettingsToBeMerged = "true" | "false";
type EnableCollaborativeInbox = "true" | "false";
type FavoriteRepliesOnTop = "true" | "false";
type IncludeCustomFooter = "true" | "false";
type IncludeInGlobalAddressList = "true" | "false";
type IsArchived = "true" | "false";
type MembersCanPostAsTheGroup = "true" | "false";
type MessageDisplayFont = "DEFAULT_FONT";
type MessageModerationLevel = "MODERATE_ALL_MESSAGES" | "MODERATE_NON_MEMBERS" | "MODERATE_NEW_MEMBERS" | "MODERATE_NONE";
type PrimaryLanguage = 'en';
type ReplyTo = "REPLY_TO_CUSTOM" | "REPLY_TO_SENDER" | "REPLY_TO_LIST" | "REPLY_TO_OWNER" | "REPLY_TO_IGNORE" | "REPLY_TO_MANAGERS";
type SendMessageDenyNotification = "true" | "false";
type ShowInGroupDirectory = "true" | "false";
type SpamModerationLevel = "ALLOW" | "MODERATE" | "SILENTLY_MODERATE" | "REJECT";
type WhoCanApproveMembers = "ALL_OWNERS_CAN_APPROVE" | "ALL_MANAGERS_CAN_APPROVE" | "ALL_MEMBERS_CAN_APPROVE" | "NONE_CAN_APPROVE";
type WhoCanAssistContent = "ALL_MEMBERS" | "OWNERS_AND_MANAGERS" | "MANAGERS_ONLY" | "OWNERS_ONLY" | "NONE";
type WhoCanContactOwner = "ALL_IN_DOMAIN_CAN_CONTACT" | "ALL_MANAGERS_CAN_CONTACT" | "ALL_MEMBERS_CAN_CONTACT" | "ANYONE_CAN_CONTACT";
type WhoCanDiscoverGroup = "ANYONE_CAN_DISCOVER" | "ALL_IN_DOMAIN_CAN_DISCOVER" | "ALL_MEMBERS_CAN_DISCOVER";
type WhoCanJoin = "ANYONE_CAN_JOIN" | "ALL_IN_DOMAIN_CAN_JOIN" | "INVITED_CAN_JOIN" | "CAN_REQUEST_TO_JOIN";
type WhoCanLeaveGroup = "ALL_MANAGERS_CAN_LEAVE" | "ALL_MEMBERS_CAN_LEAVE" | "NONE_CAN_LEAVE";
type WhoCanModerateContent = "ALL_MEMBERS" | "OWNERS_AND_MANAGERS" | "OWNERS_ONLY" | "NONE";
type WhoCanModerateMembers = "ALL_MEMBERS" | "OWNERS_AND_MANAGERS" | "OWNERS_ONLY" | "NONE";
type WhoCanPostMessage = "NONE_CAN_POST" | "ALL_MANAGERS_CAN_POST" | "ALL_MEMBERS_CAN_POST" | "ALL_OWNERS_CAN_POST" | "ALL_IN_DOMAIN_CAN_POST" | "ANYONE_CAN_POST";
type WhoCanViewGroup = "ANYONE_CAN_VIEW" | "ALL_IN_DOMAIN_CAN_VIEW" | "ALL_MEMBERS_CAN_VIEW" | "ALL_MANAGERS_CAN_VIEW";
type WhoCanViewMembership = "ALL_IN_DOMAIN_CAN_VIEW" | "ALL_MEMBERS_CAN_VIEW" | "ALL_MANAGERS_CAN_VIEW";
