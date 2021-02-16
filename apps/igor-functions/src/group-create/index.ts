import { AzureFunction, Context } from "@azure/functions";
import { admin_directory_v1 } from 'googleapis';
import { groupssettings_v1 } from 'googleapis';
import { FunctionInvocation, GoogleGroupCreateFunctionRequest, GoogleGroupCreateFunctionRequestPayload, GoogleGroup } from "@cosmos/types";

const groupCreate: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Group',
        functionDataOperation: 'Create',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GoogleGroupCreateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupCreateFunctionRequestPayload;
    const groupToCreate = payload as GoogleGroup;

    const directoryGroup = {
        email:         groupToCreate.email        ? groupToCreate.email        : '',
        name:          groupToCreate.name         ? groupToCreate.name         : '',
        description:   groupToCreate.description  ? groupToCreate.description  : '',
        adminCreated:  groupToCreate.adminCreated ? groupToCreate.adminCreated : true,
        aliases:       groupToCreate.aliases      ? groupToCreate.aliases      : []
    } as GoogleGroup;

    const groupSettings = {
        allowExternalMembers:                     groupToCreate.allowExternalMembers                     ? groupToCreate.allowExternalMembers                     : '',
        allowWebPosting:                          groupToCreate.allowWebPosting                          ? groupToCreate.allowWebPosting                          : '',
        archiveOnly:                              groupToCreate.archiveOnly                              ? groupToCreate.archiveOnly                              : '',
        customFooterText:                         groupToCreate.customFooterText                         ? groupToCreate.customFooterText                         : '',
        customReplyTo:                            groupToCreate.customReplyTo                            ? groupToCreate.customReplyTo                            : '',
        customRolesEnabledForSettingsToBeMerged:  groupToCreate.customRolesEnabledForSettingsToBeMerged  ? groupToCreate.customRolesEnabledForSettingsToBeMerged  : '',
        defaultMessageDenyNotificationText:       groupToCreate.defaultMessageDenyNotificationText       ? groupToCreate.defaultMessageDenyNotificationText       : '',
        enableCollaborativeInbox:                 groupToCreate.enableCollaborativeInbox                 ? groupToCreate.enableCollaborativeInbox                 : '',
        favoriteRepliesOnTop:                     groupToCreate.favoriteRepliesOnTop                     ? groupToCreate.favoriteRepliesOnTop                     : '',
        includeCustomFooter:                      groupToCreate.includeCustomFooter                      ? groupToCreate.includeCustomFooter                      : '',
        includeInGlobalAddressList:               groupToCreate.includeInGlobalAddressList               ? groupToCreate.includeInGlobalAddressList               : '',
        isArchived:                               groupToCreate.isArchived                               ? groupToCreate.isArchived                               : '',
        membersCanPostAsTheGroup:                 groupToCreate.membersCanPostAsTheGroup                 ? groupToCreate.membersCanPostAsTheGroup                 : '',
        messageModerationLevel:                   groupToCreate.messageModerationLevel                   ? groupToCreate.messageModerationLevel                   : '',
        primaryLanguage:                          groupToCreate.primaryLanguage                          ? groupToCreate.primaryLanguage                          : '',
        replyTo:                                  groupToCreate.replyTo                                  ? groupToCreate.replyTo                                  : '',
        sendMessageDenyNotification:              groupToCreate.sendMessageDenyNotification              ? groupToCreate.sendMessageDenyNotification              : '',
        spamModerationLevel:                      groupToCreate.spamModerationLevel                      ? groupToCreate.spamModerationLevel                      : '',
        whoCanApproveMembers:                     groupToCreate.whoCanApproveMembers                     ? groupToCreate.whoCanApproveMembers                     : '',
        whoCanAssistContent:                      groupToCreate.whoCanAssistContent                      ? groupToCreate.whoCanAssistContent                      : '',
        whoCanContactOwner:                       groupToCreate.whoCanContactOwner                       ? groupToCreate.whoCanContactOwner                       : '',
        whoCanDiscoverGroup:                      groupToCreate.whoCanDiscoverGroup                      ? groupToCreate.whoCanDiscoverGroup                      : '',
        whoCanJoin:                               groupToCreate.whoCanJoin                               ? groupToCreate.whoCanJoin                               : '',
        whoCanLeaveGroup:                         groupToCreate.whoCanLeaveGroup                         ? groupToCreate.whoCanLeaveGroup                         : '',
        whoCanModerateContent:                    groupToCreate.whoCanModerateContent                    ? groupToCreate.whoCanModerateContent                    : '',
        whoCanModerateMembers:                    groupToCreate.whoCanModerateMembers                    ? groupToCreate.whoCanModerateMembers                    : '',
        whoCanPostMessage:                        groupToCreate.whoCanPostMessage                        ? groupToCreate.whoCanPostMessage                        : '',
        whoCanViewGroup:                          groupToCreate.whoCanViewGroup                          ? groupToCreate.whoCanViewGroup                          : '',
        whoCanViewMembership:                     groupToCreate.whoCanViewMembership                     ? groupToCreate.whoCanViewMembership                     : '',

        allowGoogleCommunication:             groupToCreate.allowGoogleCommunication             ? groupToCreate.allowGoogleCommunication             : '',
        maxMessageBytes:                      groupToCreate.maxMessageBytes                      ? groupToCreate.maxMessageBytes                      : '',
        messageDisplayFont:                   groupToCreate.messageDisplayFont                   ? groupToCreate.messageDisplayFont                   : '',
        showInGroupDirectory:                 groupToCreate.showInGroupDirectory                 ? groupToCreate.showInGroupDirectory                 : '',
        whoCanAdd:                            groupToCreate.whoCanAdd                            ? groupToCreate.whoCanAdd                            : '',
        whoCanAddReferences:                  groupToCreate.whoCanAddReferences                  ? groupToCreate.whoCanAddReferences                  : '',
        whoCanApproveMessages:                groupToCreate.whoCanApproveMessages                ? groupToCreate.whoCanApproveMessages                : '',
        whoCanAssignTopics:                   groupToCreate.whoCanAssignTopics                   ? groupToCreate.whoCanAssignTopics                   : '',
        whoCanBanUsers:                       groupToCreate.whoCanBanUsers                       ? groupToCreate.whoCanBanUsers                       : '',
        whoCanDeleteAnyPost:                  groupToCreate.whoCanDeleteAnyPost                  ? groupToCreate.whoCanDeleteAnyPost                  : '',
        whoCanDeleteTopics:                   groupToCreate.whoCanDeleteTopics                   ? groupToCreate.whoCanDeleteTopics                   : '',
        whoCanEnterFreeFormTags:              groupToCreate.whoCanEnterFreeFormTags              ? groupToCreate.whoCanEnterFreeFormTags              : '',
        whoCanHideAbuse:                      groupToCreate.whoCanHideAbuse                      ? groupToCreate.whoCanHideAbuse                      : '',
        whoCanInvite:                         groupToCreate.whoCanInvite                         ? groupToCreate.whoCanInvite                         : '',
        whoCanLockTopics:                     groupToCreate.whoCanLockTopics                     ? groupToCreate.whoCanLockTopics                     : '',
        whoCanMakeTopicsSticky:               groupToCreate.whoCanMakeTopicsSticky               ? groupToCreate.whoCanMakeTopicsSticky               : '',
        whoCanMarkDuplicate:                  groupToCreate.whoCanMarkDuplicate                  ? groupToCreate.whoCanMarkDuplicate                  : '',
        whoCanMarkFavoriteReplyOnAnyTopic:    groupToCreate.whoCanMarkFavoriteReplyOnAnyTopic    ? groupToCreate.whoCanMarkFavoriteReplyOnAnyTopic    : '',
        whoCanMarkFavoriteReplyOnOwnTopic:    groupToCreate.whoCanMarkFavoriteReplyOnOwnTopic    ? groupToCreate.whoCanMarkFavoriteReplyOnOwnTopic    : '',
        whoCanMarkNoResponseNeeded:           groupToCreate.whoCanMarkNoResponseNeeded           ? groupToCreate.whoCanMarkNoResponseNeeded           : '',
        whoCanModifyMembers:                  groupToCreate.whoCanModifyMembers                  ? groupToCreate.whoCanModifyMembers                  : '',
        whoCanModifyTagsAndCategories:        groupToCreate.whoCanModifyTagsAndCategories        ? groupToCreate.whoCanModifyTagsAndCategories        : '',
        whoCanMoveTopicsIn:                   groupToCreate.whoCanMoveTopicsIn                   ? groupToCreate.whoCanMoveTopicsIn                   : '',
        whoCanMoveTopicsOut:                  groupToCreate.whoCanMoveTopicsOut                  ? groupToCreate.whoCanMoveTopicsOut                  : '',
        whoCanPostAnnouncements:              groupToCreate.whoCanPostAnnouncements              ? groupToCreate.whoCanPostAnnouncements              : '',
        whoCanTakeTopics:                     groupToCreate.whoCanTakeTopics                     ? groupToCreate.whoCanTakeTopics                     : '',
        whoCanUnassignTopic:                  groupToCreate.whoCanUnassignTopic                  ? groupToCreate.whoCanUnassignTopic                  : '',
        whoCanUnmarkFavoriteReplyOnAnyTopic:  groupToCreate.whoCanUnmarkFavoriteReplyOnAnyTopic  ? groupToCreate.whoCanUnmarkFavoriteReplyOnAnyTopic  : ''
    } as GoogleGroup;

    const { google } = require('googleapis');

    const clientEmail = process.env.client_email;
    const privateKey = process.env.private_key;
    const userAddress = 'igor@wrdsb.ca';

    // *sigh* because Azure Functions application settings can't handle newlines, let's add them ourselves:
    const apiKey = privateKey.split('\\n').join("\n");

    const scopes = [
        'https://www.googleapis.com/auth/admin.directory.group',
        'https://www.googleapis.com/auth/apps.groups.settings'
    ];

    let results = [];
    // stores our group in the end
    let groupCreated = {};

    // prep our credentials for G Suite APIs
    const auth = new google.auth.JWT({
        email: clientEmail,
        key: apiKey,
        scopes: scopes,
        subject: userAddress
    });
    
    // obtain the directory client
    const directory = await google.admin({
        version: 'directory_v1',
        auth
    });

    // obtain the groupsettings client
    const groupsSettings = await google.groupssettings({
        version: 'v1',
        auth
    })

    results[0] = await createGroup().catch();
    results[1] = await createGroupSettings().catch();
    context.log(results);

    groupCreated = await Object.assign(results[0], results[1]);
    context.log(groupCreated);

    const logPayload = results;
    functionInvocation.logPayload = logPayload;

    context.bindings.invocationPostProcessor = functionInvocation;
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function createGroup() {
        const result = await directory.groups.insert({
            requestBody: directoryGroup
        });

        context.log(result);
        return result;
    }

    async function createGroupSettings() {
        const result = await groupsSettings.groups.update({
            groupUniqueId: groupToCreate.email,
            requestBody: groupSettings
        });

        context.log(result);
        return result;
    }
};

export default groupCreate;
