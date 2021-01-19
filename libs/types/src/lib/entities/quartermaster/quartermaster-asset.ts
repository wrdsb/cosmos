export interface QuartermasterAsset {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    deleted?: boolean;

    id?: string;
    changeDetectionHash?: string;

    asset_id: string;
    asset_class_code: string;
    asset_type_code: string;
    manufacturer_code: string;
    model_name: string;
    status: string;
    add_username: string;
    add_datetime: string;
    purchase_order_number: string;
    location_code: string;
    school_department_code: string;
    program_code: string;
    project_code: string;
    engraved_id: string;
    purchase_date: string;
    shipping_date: string;
    serial_number: string;
    donated: string;
    used: string;
    replaced: string;
    replacement_reason: string;
    service_level: string;
    assigned_to: string;
    note: string;
    change_datetime: string;
    change_username: string;
    ethernet_address: string;
    useage_type: string;
    model_id: string;
    private_purchase: string;
    non_replaceable_ind: string;
    employee_id: string;
    position_code: string;
    tpm_id: string;
    bitlocker_id: string;
    room: string;
}