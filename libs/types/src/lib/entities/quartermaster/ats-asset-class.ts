export interface ATSAssetClass {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    asset_class_code: string;
    full_description: string;
    short_description: string;
}