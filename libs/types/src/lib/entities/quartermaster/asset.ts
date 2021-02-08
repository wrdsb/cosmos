export interface Asset {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;
 
    id?: string;
    changeDetectionHash?: string;
}