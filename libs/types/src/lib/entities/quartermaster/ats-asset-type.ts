export interface ATSAssetType {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    asset_type_code: string;
    full_description: string;
    short_description: string;
    engraved_id_type: string;
}