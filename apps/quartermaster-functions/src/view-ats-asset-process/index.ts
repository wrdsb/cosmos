import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, ViewATSAssetProcessFunctionRequest, ViewATSAssetProcessFunctionRequestPayload, ViewATSAssetRecord } from "@cosmos/types";

const viewATSAssetProcess: AzureFunction = async function (context: Context, triggerMessage: ViewATSAssetProcessFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'ViewATSAsset',
        functionDataOperation: 'Process',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as ViewATSAssetProcessFunctionRequest;
    const payload = triggerObject.payload as ViewATSAssetProcessFunctionRequestPayload;

    const rows = context.bindings.panamaBlob;

    const rowsArray = [];

    rows.forEach(function(row) {
        const asset_id = row.ASSET_ID ? Math.floor(row.ASSET_ID).toString().trim() : "";
        const asset_class_code = row.ASSET_CLASS_CODE ? row.ASSET_CLASS_CODE.trim() : "";
        const asset_type_code = row.ASSET_TYPE_CODE ? row.ASSET_TYPE_CODE.trim() : "";
        const manufacturer_code = row.MANUFACTURER_CODE ? row.MANUFACTURER_CODE.trim() : "";
        const model_name = row.MODEL_NAME ? row.MODEL_NAME.trim() : "";
        const status = row.STATUS ? row.STATUS.trim() : "";
        const add_username = row.ADD_USERNAME ? row.ADD_USERNAME.trim() : "";
        const add_datetime = row.ADD_DATETIME ? row.ADD_DATETIME.trim() : "";
        const purchase_order_number = row.PURCHASE_ORDER_NUMBER ? row.PURCHASE_ORDER_NUMBER.trim() : "";
        const location_code = row.LOCATION_CODE ? row.LOCATION_CODE.trim() : "";
        const school_department_code = row.SCHOOL_DEPARTMENT_CODE ? row.SCHOOL_DEPARTMENT_CODE.trim() : "";
        const program_code = row.PROGRAM_CODE ? row.PROGRAM_CODE.trim() : "";
        const project_code = row.PROJECT_CODE ? row.PROJECT_CODE.trim() : "";
        const engraved_id = row.ENGRAVED_ID ? row.ENGRAVED_ID.trim() : "";
        const purchase_date = row.PURCHASE_DATE ? row.PURCHASE_DATE.trim() : "";
        const shipping_date = row.SHIPPING_DATE ? row.SHIPPING_DATE.trim() : "";
        const serial_number = row.SERIAL_NUMBER ? row.SERIAL_NUMBER.trim() : "";
        const donated = row.DONATED ? row.DONATED.trim() : "";
        const used = row.USED ? row.USED.trim() : "";
        const replaced = row.REPLACED ? row.REPLACED.trim() : "";
        const replacement_reason = row.REPLACEMENT_REASON ? row.REPLACEMENT_REASON.trim() : "";
        const service_level = row.SERVICE_LEVEL ? row.SERVICE_LEVEL.trim() : "";
        const assigned_to = row.ASSIGNED_TO ? row.ASSIGNED_TO.trim() : "";
        const note = row.NOTE ? row.NOTE.trim() : "";
        const change_datetime = row.CHANGE_DATETIME ? row.CHANGE_DATETIME.trim() : "";
        const change_username = row.CHANGE_USERNAME ? row.CHANGE_USERNAME.trim() : "";
        const ethernet_address = row.ETHERNET_ADDRESS ? row.ETHERNET_ADDRESS.trim() : "";
        const useage_type = row.USEAGE_TYPE ? row.USEAGE_TYPE.trim() : "";
        const model_id = row.MODEL_ID ? row.MODEL_ID.trim() : "";
        const private_purchase = row.PRIVATE_PURCHASE ? row.PRIVATE_PURCHASE.trim() : "";
        const non_replaceable_ind = row.NON_REPLACEABLE_IND ? row.NON_REPLACEABLE_IND.trim() : "";
        const employee_id = row.EMPLOYEE_ID ? row.EMPLOYEE_ID.trim() : "";
        const position_code = row.POSITION_CODE ? row.POSITION_CODE.trim() : "";
        const tpm_id = row.TPM_ID ? row.TPM_ID.trim() : "";
        const bitlocker_id = row.BITLOCKER_ID ? row.BITLOCKER_ID.trim() : "";
        const room = row.ROOM ? row.ROOM.trim() : "";
    
        // Extract the 'class' object from the row
        const rowObject = {
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
        } as ViewATSAssetRecord;

        rowsArray.push(rowObject);
    });

    // Write out Quartermaster's local copy of Panama's raw data
    context.bindings.viewRaw = JSON.stringify(rowsArray);

    const view_ats_asset_extract_asset_job =  {
        jobType: "WRDSB.Quartermaster.View.Asset.Extract.Asset",
    };
    context.bindings.triggerJobs = [JSON.stringify(view_ats_asset_extract_asset_job)];

    const logPayload = "";
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default viewATSAssetProcess;