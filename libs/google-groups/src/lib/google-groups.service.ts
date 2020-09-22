import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MessagesService } from '@cosmos/messages';
import { CodexService } from "@cosmos/codex-service";
import { IGORService } from "@cosmos/igor-service";

import { GoogleGroup, GroupQueryFunctionRequestPayload } from "@cosmos/types";
import { IGORGroup } from "@cosmos/types";

import { GROUPS } from "@cosmos/mocks";

@Injectable({
  providedIn: 'root'
})
export class GoogleGroupsService {
  private groups: GoogleGroup[] = [];

  constructor(
    private messagesService: MessagesService,
    private codexService: CodexService,
    private igorService: IGORService
  ) { }

  getMock(): IGORGroup {
    let group = {
      business_owner: 'some_one@wrdsb.ca',

      membership_automation_active: true,
      automate_mangers: true,
      automate_members: true,
      automate_owners: true,

      managers_people_sets: [],
      members_people_sets: [],
      owners_people_sets: [],

      configuration_automation_active: true,
      configuration_templates: [],

      google_id: '017dp8vu2oqr4lq',
      etag: '"nM32qckM4XsKqhG-zylXvkNQRY8/UiI5pz7y-TQVoLQLz8rK-yrKCoc"',
      email: 'eds-students@wrdsb.ca',
      name: 'EDSS Students',
      description: 'A private notifications group for all EDSS students.',
      adminCreated: true,
      nonEditableAliases: [ 'eds-students@wrdsb.on.ca' ],
      whoCanJoin: 'INVITED_CAN_JOIN',
      whoCanViewMembership: 'ALL_MANAGERS_CAN_VIEW',
      whoCanViewGroup: 'ALL_MEMBERS_CAN_VIEW',
      whoCanInvite: 'ALL_OWNERS_CAN_INVITE',
      whoCanAdd: 'ALL_OWNERS_CAN_ADD',
      allowExternalMembers: 'false',
      whoCanPostMessage: 'ALL_MANAGERS_CAN_POST',
      allowWebPosting: 'false',
      primaryLanguage: 'en',
      maxMessageBytes: 26214400,
      isArchived: 'true',
      archiveOnly: 'false',
      messageModerationLevel: 'MODERATE_NONE',
      spamModerationLevel: 'ALLOW',
      replyTo: 'REPLY_TO_LIST',
      customReplyTo: 'eds-students@wrdsb.ca',
      includeCustomFooter: 'false',
      customFooterText: '\'',
      sendMessageDenyNotification: 'true',
      defaultMessageDenyNotificationText: 'You do not have permission to post to eds-students@wrdsb.ca.',
      showInGroupDirectory: 'false',
      allowGoogleCommunication: 'false',
      membersCanPostAsTheGroup: 'true',
      messageDisplayFont: 'DEFAULT_FONT',
      includeInGlobalAddressList: 'true',
      whoCanLeaveGroup: 'NONE_CAN_LEAVE',
      whoCanContactOwner: 'ANYONE_CAN_CONTACT',
      whoCanAddReferences: 'NONE',
      whoCanAssignTopics: 'OWNERS_AND_MANAGERS',
      whoCanUnassignTopic: 'OWNERS_AND_MANAGERS',
      whoCanTakeTopics: 'OWNERS_AND_MANAGERS',
      whoCanMarkDuplicate: 'OWNERS_AND_MANAGERS',
      whoCanMarkNoResponseNeeded: 'OWNERS_AND_MANAGERS',
      whoCanMarkFavoriteReplyOnAnyTopic: 'OWNERS_AND_MANAGERS',
      whoCanMarkFavoriteReplyOnOwnTopic: 'NONE',
      whoCanUnmarkFavoriteReplyOnAnyTopic: 'OWNERS_AND_MANAGERS',
      whoCanEnterFreeFormTags: 'OWNERS_AND_MANAGERS',
      whoCanModifyTagsAndCategories: 'OWNERS_AND_MANAGERS',
      favoriteRepliesOnTop: 'true',
      whoCanApproveMembers: 'ALL_OWNERS_CAN_APPROVE',
      whoCanBanUsers: 'OWNERS_ONLY',
      whoCanModifyMembers: 'OWNERS_ONLY',
      whoCanApproveMessages: 'OWNERS_AND_MANAGERS',
      whoCanDeleteAnyPost: 'OWNERS_AND_MANAGERS',
      whoCanDeleteTopics: 'OWNERS_AND_MANAGERS',
      whoCanLockTopics: 'OWNERS_AND_MANAGERS',
      whoCanMoveTopicsIn: 'OWNERS_AND_MANAGERS',
      whoCanMoveTopicsOut: 'OWNERS_AND_MANAGERS',
      whoCanPostAnnouncements: 'OWNERS_AND_MANAGERS',
      whoCanHideAbuse: 'OWNERS_AND_MANAGERS',
      whoCanMakeTopicsSticky: 'OWNERS_AND_MANAGERS',
      whoCanModerateMembers: 'OWNERS_ONLY',
      whoCanModerateContent: 'OWNERS_AND_MANAGERS',
      whoCanAssistContent: 'OWNERS_AND_MANAGERS',
      customRolesEnabledForSettingsToBeMerged: 'false',
      enableCollaborativeInbox: 'false',
      whoCanDiscoverGroup: 'ALL_MEMBERS_CAN_DISCOVER'
    } as IGORGroup;

    return group;
  }

}
