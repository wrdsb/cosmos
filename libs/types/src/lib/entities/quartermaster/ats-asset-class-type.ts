export interface ATSAssetClassType {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    asset_class_code: string;
    asset_type_code: string;
    engraved_id_prefix: string;
}