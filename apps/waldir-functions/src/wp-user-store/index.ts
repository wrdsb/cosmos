import { AzureFunction, Context } from "@azure/functions";
import { UTCDateTime, FunctionInvocation, WALDIRJobType, WPUserStoreFunctionRequest, StoreFunctionOperation, WPUser } from "@cosmos/types";
import { CalcArgs, CalcResult } from "@cosmos/waldir-functions-shared";
import { calcPatch, calcReplace, calcDelete, makeHashWPUser } from "@cosmos/waldir-functions-shared";
import { craftStoreCreateEvent, craftStoreUpdateEvent, craftStoreDeleteEvent } from "@cosmos/waldir-functions-shared";

const wpUserStore: AzureFunction = async function (context: Context, triggerMessage: WPUserStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON() as UTCDateTime,
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'WPUser',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const jobType: WALDIRJobType = 'WRDSB.WALDIR.WPUser.Store';
    functionInvocation.jobType = jobType;
    
    const triggerObject = triggerMessage as WPUserStoreFunctionRequest;
    const operation = triggerObject.operation as StoreFunctionOperation;
    const payload = triggerObject.payload as WPUser;

    const oldRecord = context.bindings.recordIn;

    const newRecord = {
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        deleted: false,

        createdBy: '',
        updatedBy: '',
        deletedBy: '',

        id: '',

        siteURL: '',
        siteDomain: '',
        siteSlug: '',
        siteLink: '',
    
        username: '',
        email: '',
    
        name: '',
        first_name: '',
        last_name: '',
        nickname: '',
    
        description: '',
        link: '',
        slug: '',
        url: '',
    
        locale: '',
        registered_date: '',
    
        roles: [],

        capabilities: {},
        extra_capabilities: {},
        avatar_urls: {},
        meta: [],
    
        ipps_activity_code: [],
        ipps_employee_group_category: [],
        ipps_employee_group_code: [],
        ipps_employee_group_description: [],
        ipps_extension: [],
        ipps_home_loc: [],
        ipps_job_code: [],
        ipps_job_desc: [],
        ipps_location_code: [],
        ipps_location_desc: [],
        ipps_panel: [],
        ipps_phone_no: [],
        ipps_school_code: [],
        ipps_school_type: [],
        wrdsb_id_number: [],
        wrdsb_school: [],
        wrdsb_baksheesh: [],
        wrdsb_supervisor: [],
        wrdsb_section: [],
        wrdsb_physical_location: '',
        wrdsb_voicemail: '',
        wrdsb_job_title: '',
        wrdsb_display_in_staff_list: false,
        wrdsb_contact_options: '',
        wrdsb_website_url: '',
        wrdsb_phone_extension: '',
        wrdsb_regular_hours: '',
        wrdsb_is_in_today: false,
        wrdsb_is_available_now: false,
    } as WPUser;

    const calcArgs: CalcArgs<WPUser> = {
        oldRecord: oldRecord,
        newRecord: newRecord,
        payload: payload,
        functionInvocation: functionInvocation
    };

    let result: CalcResult<WPUser>;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = calcDelete<WPUser>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = calcPatch<WPUser>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = calcReplace<WPUser>(calcArgs);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        default:
            break;
    }

    const calcRecord = result.calcRecord;
    const eventOp = result.eventOp;

    calcRecord.changeDetectionHash = makeHashWPUser(calcRecord);
    let changeDetected = false;
    let event;
    
    switch (eventOp) {
        case 'create':
            changeDetected = true;
            event = craftStoreCreateEvent(oldRecord, calcRecord, functionInvocation);
            break;
        case 'update':
            changeDetected = (oldRecord.changeDetectionHash === calcRecord.changeDetectionHash) ? false : true;
            event = craftStoreUpdateEvent(oldRecord, calcRecord, functionInvocation);
            break;
        case 'delete':
            changeDetected = true;
            event = craftStoreDeleteEvent(oldRecord, calcRecord, functionInvocation);
            break;
    }

    if (changeDetected) {
        context.bindings.recordOut = calcRecord;
        context.bindings.eventCascade = event;
        context.bindings.changeParse = {
            "payload": {
                functionInvocationID: functionInvocation.functionInvocationID,
                functionInvocationTimestamp: functionInvocation.functionInvocationTimestamp,
                oldRecord: (oldRecord) ? oldRecord : null,
                newRecord: calcRecord
            }
        };

        const logPayload = event;
        logPayload['jobType'] = jobType;
        logPayload['statusCode'] = statusCode;
        logPayload['statusMessage'] = statusMessage;
        functionInvocation.logPayload = logPayload;
        context.log(logPayload);
    } else {
        const logPayload = {};
        logPayload['jobType'] = jobType;
        logPayload['statusCode'] = statusCode;
        logPayload['statusMessage'] = 'No change detected.';
        logPayload['recordID'] = calcRecord.id;
        logPayload['newRecordChangeDetectionHash'] = calcRecord.changeDetectionHash;
        logPayload['oldRecordChangeDetectionHash'] = oldRecord.changeDetectionHash;
        functionInvocation.logPayload = logPayload;
    }
    
    context.bindings.invocationPostProcessor = functionInvocation;
    context.done(null, functionInvocation);
};

export default wpUserStore;
