type GoogleResourceType = "admin#directory#group" | "groupsSettings#groups";

interface GoogleGroupsGroupSettings {
    id: string;
    email: string;

    kind: GoogleResourceType;

    name: string;
    description: string;

    whoCanJoin: string;
    whoCanViewMembership: string;
    whoCanViewGroup: string;
    whoCanInvite: string;
    whoCanAdd: string;
    allowExternalMembers: string;
    whoCanPostMessage: string;
    allowWebPosting: string;
    primaryLanguage: string;
    maxMessageBytes: number;
    isArchived: string;
    archiveOnly: string;
    messageModerationLevel: string;
    spamModerationLevel: string;
    replyTo: string;
    customReplyTo: string;
    includeCustomFooter: string;
    customFooterText: string;
    sendMessageDenyNotification: string;
    defaultMessageDenyNotificationText: string;
    showInGroupDirectory: string;
    allowGoogleCommunication: string;
    membersCanPostAsTheGroup: string;
    messageDisplayFont: string;
    includeInGlobalAddressList: string;
    whoCanLeaveGroup: string;
    whoCanContactOwner: string;
    whoCanAddReferences: string;
    whoCanAssignTopics: string;
    whoCanUnassignTopic: string;
    whoCanTakeTopics: string;
    whoCanMarkDuplicate: string;
    whoCanMarkNoResponseNeeded: string;
    whoCanMarkFavoriteReplyOnAnyTopic: string;
    whoCanMarkFavoriteReplyOnOwnTopic: string;
    whoCanUnmarkFavoriteReplyOnAnyTopic: string;
    whoCanEnterFreeFormTags: string;
    whoCanModifyTagsAndCategories: string;
    favoriteRepliesOnTop: string;
    whoCanApproveMembers: string;
    whoCanBanUsers: string;
    whoCanModifyMembers: string;
    whoCanApproveMessages: string;
    whoCanDeleteAnyPost: string;
    whoCanDeleteTopics: string;
    whoCanLockTopics: string;
    whoCanMoveTopicsIn: string;
    whoCanMoveTopicsOut: string;
    whoCanPostAnnouncements: string;
    whoCanHideAbuse: string;
    whoCanMakeTopicsSticky: string;
    whoCanModerateMembers: string;
    whoCanModerateContent: string;
    whoCanAssistContent: string;
    customRolesEnabledForSettingsToBeMerged: string;
    enableCollaborativeInbox: string;
    whoCanDiscoverGroup: string;
}

interface GoogleAdminDirectoryGroup {
    id: string;
    email: string;

    adminCreated: boolean;

    name: string;
    description: string;

    aliases: string[];
    nonEditableAliases: string[];

    kind: GoogleResourceType;
    etag: string;
    directMembersCount: number;
}
