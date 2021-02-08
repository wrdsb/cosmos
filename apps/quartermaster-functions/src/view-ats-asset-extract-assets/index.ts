import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewATSAssetExtractAssetsFunctionRequest, ViewATSAssetExtractAssetsFunctionRequestPayload, ViewATSAssetRecord, ATSAsset } from "@cosmos/types";

const viewATSAssetExtractAssets: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetExtractAssetsFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAsset',
        functionDataOperation: 'ExtractAssets',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewATSAssetExtractAssetsFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetExtractAssetsFunctionRequestPayload;

    const objects = context.bindings.viewRaw;

    let recordsArray = [];
    let recordsObject = {};

    objects.forEach(function(record: ViewATSAssetRecord) {
        const asset_id = record.asset_id ? record.asset_id : "";
        const asset_class_code = record.asset_class_code ? record.asset_class_code : "";
        const asset_type_code = record.asset_type_code ? record.asset_type_code : "";
        const manufacturer_code = record.manufacturer_code ? record.manufacturer_code : "";
        const model_name = record.model_name ? record.model_name : "";
        const status = record.status ? record.status : "";
        const add_username = record.add_username ? record.add_username : "";
        const add_datetime = record.add_datetime ? record.add_datetime : "";
        const purchase_order_number = record.purchase_order_number ? record.purchase_order_number : "";
        const location_code = record.location_code ? record.location_code : "";
        const school_department_code = record.school_department_code ? record.school_department_code : "";
        const program_code = record.program_code ? record.program_code : "";
        const project_code = record.project_code ? record.project_code : "";
        const engraved_id = record.engraved_id ? record.engraved_id : "";
        const purchase_date = record.purchase_date ? record.purchase_date : "";
        const shipping_date = record.shipping_date ? record.shipping_date : "";
        const serial_number = record.serial_number ? record.serial_number : "";
        const donated = record.donated ? record.donated : "";
        const used = record.used ? record.used : "";
        const replaced = record.replaced ? record.replaced : "";
        const replacement_reason = record.replacement_reason ? record.replacement_reason : "";
        const service_level = record.service_level ? record.service_level : "";
        const assigned_to = record.assigned_to ? record.assigned_to : "";
        const note = record.note ? record.note : "";
        const change_datetime = record.change_datetime ? record.change_datetime : "";
        const change_username = record.change_username ? record.change_username : "";
        const ethernet_address = record.ethernet_address ? record.ethernet_address : "";
        const useage_type = record.useage_type ? record.useage_type : "";
        const model_id = record.model_id ? record.model_id : "";
        const private_purchase = record.private_purchase ? record.private_purchase : "";
        const non_replaceable_ind = record.non_replaceable_ind ? record.non_replaceable_ind : "";
        const employee_id = record.employee_id ? record.employee_id : "";
        const position_code = record.position_code ? record.position_code : "";
        const tpm_id = record.tpm_id ? record.tpm_id : "";
        const bitlocker_id = record.bitlocker_id ? record.bitlocker_id : "";
        const room = record.room ? record.room : "";

        if (asset_id !== "") {
            let thisObjectID = asset_id;

            let thisObject = {
                id: thisObjectID,
                asset_id: asset_id,
                asset_class_code: asset_class_code,
                asset_type_code: asset_type_code,
                manufacturer_code: manufacturer_code,
                model_name: model_name,
                status: status,
                add_username: add_username,
                add_datetime: add_datetime,
                purchase_order_number: purchase_order_number,
                location_code: location_code,
                school_department_code: school_department_code,
                program_code: program_code,
                project_code: project_code,
                engraved_id: engraved_id,
                purchase_date: purchase_date,
                shipping_date: shipping_date,
                serial_number: serial_number,
                donated: donated,
                used: used,
                replaced: replaced,
                replacement_reason: replacement_reason,
                service_level: service_level,
                assigned_to: assigned_to,
                note: note,
                change_datetime: change_datetime,
                change_username: change_username,
                ethernet_address: ethernet_address,
                useage_type: useage_type,
                model_id: model_id,
                private_purchase: private_purchase,
                non_replaceable_ind: non_replaceable_ind,
                employee_id: employee_id,
                position_code: position_code,
                tpm_id: tpm_id,
                bitlocker_id: bitlocker_id,
                room: room
            } as ATSAsset;

            recordsArray.push(thisObject);
            recordsObject[thisObjectID] = thisObject;
        }
    });

    // Write out arrays and objects to blobs
    context.bindings.recordsNowArray = JSON.stringify(recordsArray);
    context.bindings.recordsNowObject = JSON.stringify(recordsObject);

    const quartermaster_ats_assets_reconcile_job = {
        "jobType": "Quartermaster.ATS.Assets.Reconcile"
    };
    context.bindings.triggerJobs = [JSON.stringify(quartermaster_ats_assets_reconcile_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetExtractAssets;