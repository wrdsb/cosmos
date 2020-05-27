export interface GoogleAdminDirectoryGroupStoreTrigger {
    operation: string;
    payload: GoogleAdminDirectoryGroup;
}

export interface GoogleGroupsGroupSettingsStoreTrigger {
    operation: string;
    payload: GoogleGroupsGroupSettings;
}

export interface IGORGroupsGroupMaterializedStoreTrigger {
    operation: string;
    payload: IGORGroupsGroupMaterialized;
}

export interface IGORGroupsGroupMetaStoreTrigger {
    operation: string;
    payload: IGORGroupsGroupMeta;
}
