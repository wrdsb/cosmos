import { AzureFunction, Context } from "@azure/functions";
import { createHash } from "crypto";
import { FunctionInvocation, DeviceLoanSubmissionStoreFunctionRequest, DeviceLoanSubmissionStoreFunctionRequestPayload, DeviceLoanSubmission } from "@cosmos/types";

const deviceLoanSubmissionStore: AzureFunction = async function (context: Context, triggerMessage: DeviceLoanSubmissionStoreFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoanSubmission',
        functionDataOperation: 'Store',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as DeviceLoanSubmissionStoreFunctionRequest;
    const operation = triggerObject.operation;
    const payload = triggerObject.payload as DeviceLoanSubmissionStoreFunctionRequestPayload;

    const oldRecord = context.bindings.recordIn;

    let newRecord = {
        created_at: '',
        updated_at: '',
        deleted_at: '',
        deleted: false,

        id: '',
        powerAppsId: '',
        changeDetectionHash: '',

        serialNumber: '',
        submittedAssetID: '',
        correctedAssetID: '',
        deviceType: '',

        locationName: '',
        locationCode: '',
        schoolCode: '',

        loanedBy: '',
        loanedToName: '',
        loanedToNumber: '',
        loanedToEmail: '',
        loanedToRole: '',
        receivedBy: '',

        isSEADevice: false,
        addedToSchoolInventory: false,
        peripheralsProvided: '',
        timestamp: '',
        notes: '',

        wasReturned: false,
        returnedAt: '',
        returnedBy: ''
    } as DeviceLoanSubmission;

    let result;
    let statusCode;
    let statusMessage;

    switch (operation) {
        case 'delete':
            result = doDelete(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Marked record deleted.';
            break;
        case 'patch':
            result = doPatch(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Patched record.';
            break;
        case 'replace':
            result = doReplace(oldRecord, newRecord, payload);
            statusCode = '200';
            statusMessage = 'Success: Replaced record.';
            break;
        default:
            break;
    }

    if (result.changedDetected) {
        context.bindings.recordOut = result.newRecord;

        const logPayload = result.event;
        functionInvocation.logPayload = logPayload;
        context.log(logPayload);
    } else {
        const logPayload = {};
        functionInvocation.logPayload = logPayload;
        context.log('No change detected.');
    }
    
    context.log(functionInvocation);
    context.done(null, functionInvocation);

    function doDelete(oldRecord, newRecord, payload) {
        let event = {};
        let changedDetected = true;

        // check for existing record
        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            newRecord.schoolCode = getSchoolCode(newRecord.locationName);
            newRecord.changeDetectionHash = makeHash(newRecord);
            
            event = craftDeleteEvent(oldRecord, newRecord);

        } else {
            newRecord = Object.assign(newRecord, oldRecord);

            // mark the record as deleted
            newRecord.deleted_at = functionInvocation.functionInvocationTimestamp;
            newRecord.deleted = true;

            newRecord.schoolCode = getSchoolCode(newRecord.locationName);
            newRecord.changeDetectionHash = makeHash(newRecord);

            event = craftDeleteEvent(oldRecord, newRecord);
        }

        return {changedDetected: changedDetected, event: event, newRecord: newRecord};
    }

    function doPatch(oldRecord, newRecord, payload) {
        let event = {};
        let changedDetected = false;

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            newRecord.schoolCode = getSchoolCode(newRecord.locationName);
            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = true;
            event = craftCreateEvent(newRecord);

        } else {
            // Merge request object into current record
            newRecord = Object.assign(newRecord, oldRecord, payload);
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;
    
            // patching a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            newRecord.schoolCode = getSchoolCode(newRecord.locationName);
            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = (oldRecord.changeDetectionHash === newRecord.changeDetectionHash) ? false : true;

            if (changedDetected) {
                event = craftUpdateEvent(oldRecord, newRecord);
            } else {
                newRecord = oldRecord;
                event = false;
            }
        }

        return {changedDetected: changedDetected, event: event, newRecord: newRecord};
    }
    
    function doReplace(oldRecord, newRecord, payload) {
        let event = {};
        let changedDetected = false;

        if (!oldRecord) {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = functionInvocation.functionInvocationTimestamp;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            newRecord.schoolCode = getSchoolCode(newRecord.locationName);
            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = true;
            event = craftCreateEvent(newRecord);

        } else {
            newRecord = Object.assign(newRecord, payload);
            newRecord.created_at = oldRecord.created_at;
            newRecord.updated_at = functionInvocation.functionInvocationTimestamp;

            // replacing a record implicitly undeletes it
            newRecord.deleted_at = '';
            newRecord.deleted = false;

            newRecord.schoolCode = getSchoolCode(newRecord.locationName);
            newRecord.changeDetectionHash = makeHash(newRecord);

            changedDetected = (oldRecord.changeDetectionHash === newRecord.changeDetectionHash) ? false : true;
    
            if (changedDetected) {
                event = craftUpdateEvent(oldRecord, newRecord);
            } else {
                newRecord = oldRecord;
                event = false;
            }
        }

        return {changedDetected: changedDetected, event: event, newRecord: newRecord};
    }

    function craftCreateEvent(new_record) {
        let event_type = 'Quartermaster.DeviceLoanSubmission.Create';
        let source = 'create';
        let schema = 'create';
        let label = `DeviceLoanSubmission ${new_record.id} created.`;
        let payload = {
            record: new_record
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }
    
    function craftUpdateEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.DeviceLoanSubmission.Update';
        let source = 'update';
        let schema = 'update';
        let label = `DeviceLoanSubmission ${new_record.id} updated.`;
        let payload = {
            old_record: old_record,
            new_record: new_record,
        };

        let event = craftEvent(new_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftDeleteEvent(old_record, new_record)
    {
        let event_type = 'Quartermaster.DeviceLoanSubmission.Delete';
        let source = 'delete';
        let schema = 'delete';
        let label = `DeviceLoanSubmission ${new_record.id} deleted.`;
        let payload = {
            record: old_record
        };

        let event = craftEvent(old_record.id, source, schema, event_type, label, payload);
        return event;
    }

    function craftEvent(recordID, source, schema, event_type, label, payload) {
        let event = {
            id: `${event_type}-${context.executionContext.invocationId}`,
            time: functionInvocation.functionInvocationTimestamp,

            type: event_type,
            source: `/quartermaster/device-loan-submission/${recordID}/${source}`,
            schemaURL: `ca.wrdsb.quartermaster.device-loan-submission.${schema}.json`,

            label: label,
            tags: [
                "quartermaster", 
                "device_loan_submission_change"
            ], 

            data: {
                function_name: context.executionContext.functionName,
                invocation_id: context.executionContext.invocationId,
                result: {
                    payload: payload 
                },
            },

            eventTypeVersion: "0.1",
            specversion: "0.2",
            contentType: "application/json"
        };

        // TODO: check message length
        return event;
    }

    function makeHash(deviceLoanSubmission: DeviceLoanSubmission): string {
        const objectForHash = JSON.stringify({
            serialNumber:           deviceLoanSubmission.serialNumber,
            submittedAssetID:       deviceLoanSubmission.submittedAssetID,
            correctedAssetID:       deviceLoanSubmission.correctedAssetID,
            deviceType:             deviceLoanSubmission.deviceType,
            locationName:           deviceLoanSubmission.locationName,
            locationCode:           deviceLoanSubmission.locationCode,
            schoolCode:             deviceLoanSubmission.schoolCode,
            loanedBy:               deviceLoanSubmission.loanedBy,
            loanedToName:           deviceLoanSubmission.loanedToName,
            loanedToNumber:         deviceLoanSubmission.loanedToNumber,
            loanedToEmail:          deviceLoanSubmission.loanedToEmail,
            loanedToRole:           deviceLoanSubmission.loanedToRole,
            receivedBy:             deviceLoanSubmission.receivedBy,
            isSEADevice:            deviceLoanSubmission.isSEADevice,
            addedToSchoolInventory: deviceLoanSubmission.addedToSchoolInventory,
            peripheralsProvided:    deviceLoanSubmission.peripheralsProvided,
            timestamp:              deviceLoanSubmission.timestamp,
            notes:                  deviceLoanSubmission.notes,
            wasReturned:            deviceLoanSubmission.wasReturned,
            returnedAt:             deviceLoanSubmission.returnedAt,
            returnedBy:             deviceLoanSubmission.returnedBy
        });
        const objectHash = createHash('md5').update(objectForHash).digest('hex');
        return objectHash;
    }

    function getSchoolCode(fullName: string): string {
        let codes = {
            '151 Weber': '',
            '256 Hespeler': '',
            'Abraham Erb': 'ABE',
            'Alpine': 'ALP',
            'AR Kaufman': 'ARK',
            'BCI': 'BCI',
            'Avenue Road': 'AVE',
            'Blair OEC': 'BOC',
            'Ayr': 'AYR',
            'Baden': 'BDN',
            'Breslau': 'BRE',
            'Blairview': '',
            'Blair Road': 'BLR',
            'Bridgeport North': '',
            'Brigadoon': 'BGD',
            'Bridgeport': 'BRP',
            'BridgesN(WCI)': '',
            'BridgesS(PHS)': '',
            'CAMA': '',
            'Camp Heidelberg': 'CAH',
            'Cedar Creek': 'CDC',
            'Cedarbrae': 'CED',
            'Centennial (C)': 'CNC',
            'Centennial (W)': 'CNW',
            'Central': 'CTR',
            'Chalmers Street': 'CHA',
            'CHCI': 'CHC',
            'Chicopee Hills': 'CHI',
            'Clemens Mill': 'CLE',
            'Communications': '',
            'Conestogo': 'CON',
            'Coronation': 'COR',
            'Country Hills': 'COH',
            'Courtland Ave': 'CRL',
            'Crestview': 'CRE',
            'Doon': 'DOO',
            'Driftwood Park': 'DPK',
            'Elizabeth Ziegler': 'ELZ',
            'ECI': 'ECI',
            'Edna Staebler': 'EST',
            'EDSS': 'EDS',
            'Education Centre': '',
            'Elgin Street': 'ELG',
            'Empire': 'EMP',
            'Erbsville': '',
            'Facility Services': '',
            'FHCI': 'FHC',
            'Finance': '',
            'Floradale': 'FLO',
            'Forest Glen': 'FGL',
            'Forest Hill': 'FHL',
            'Franklin': 'FRA',
            'Glencairn': 'GCP',
            'GPSS': 'GPS',
            'Grand View (C)': 'GVC',
            'Grand View (NH)': 'GVN',
            'Grandview Hills': '',
            'GRCI': 'GRC',
            'GROH': 'GRO',
            'GCI': 'GCI',
            'Hatts Off': '',
            'Hespeler': 'HES',
            'HHSS': 'HRH',
            'Highland': 'HIG',
            'Hillcrest': 'HIL',
            'Howard Robertson': 'HOW',
            'Human Resources': '',
            'ITS': '',
            'JW Gerth': 'JWG',
            'Janet Metcalfe': 'JME',
            'Jean Steckle': 'JST',
            'JF Carmichael': 'JFC',
            'JHSS': 'JHS',
            'John Darling': 'JDP',
            'John Mahood': 'JMA',
            'KCI & VS': 'KCI',
            'Keatsway': 'KEA',
            'King Edward': 'KED',
            'Lackner Woods': 'LKW',
            'Laurel OEC': '',
            'Laurelwood': 'LRW',
            'Laurentian': 'LAU',
            'Lester B Pearson': 'LBP',
            'Lexington': 'LEX',
            'Lincoln Heights': 'LNH',
            'Linwood': 'LIN',
            'Macgregor': 'MCG',
            'Mackenzie King': 'MCK',
            'Manchester': 'MAN',
            'Margaret Ave': 'MRG',
            'Mary Johnston': 'MJP',
            'Meadowlane': 'MEA',
            'Millen Woods': 'MIL',
            'Moffat Creek': 'MOF',
            'New Dundee': 'NDD',
            'N. A. MacEachern': 'NAM',
            'Northlake Woods': 'NLW',
            'Park Manor': 'PKM',
            'Parkway': 'PKW',
            'PHS': 'PHS',
            'Pinegrove': '',
            'Pioneer Park': 'PIO',
            'Preston': 'PRE',
            'Learning Services': '',
            'Prueter': 'PRU',
            'Queen Elizabeth': 'QEL',
            'Queensmount': 'QSM',
            'Ray of Hope - YJS': '',
            'Riverside': 'RIV',
            'Rockway': 'ROC',
            'Rosemount': 'RMT',
            'Ryerson': 'RYE',
            'Health & Wellness': '',
            'Saginaw': 'SAG',
            'Sandhills': 'SHL',
            'Sandowne': 'SND',
            'Security': '',
            'Sheppard': 'SHE',
            'Silverheights': 'SIL',
            'Sir Adam Beck': 'SAB',
            'SJAMSS': 'JAM',
            'Smithson': 'SMI',
            'St Andrews': 'STA',
            'St Jacobs': 'STJ',
            'Southridge': 'SRG',
            'Special Education': '',
            'SSS': 'SSS',
            'St. Andrews': '',
            'St. Jacobs': 'STJ',
            'St. Monica': '',
            'Stanley Park': 'STN',
            'Stewart Ave': 'STW',
            'STSWR': '',
            'Suddaby': 'SUD',
            'Sunbeam Centre': '',
            'Sunnyside': 'SUN',
            'Tait Street': 'TAI',
            'Trillium': 'TRI',
            'Vista Hills': 'VIS',
            'Winston Churchill': 'WCP',
            'WCI': 'WCI',
            'Wellesley': 'WEL',
            'Westheights': 'WSH',
            'Westmount': 'WSM',
            'Westvale': 'WSV',
            'Williamsburg': 'WLM',
            'Wilson Ave': 'WLS',
            'William G. Davis': 'WGD',
            'WODSS': 'WOD',
            'Woodland Park': 'WPK',
            'Wrigley OEC': '',
            'WT Townshend': 'WTT',
        };
        let code = (codes[fullName]) ? codes[fullName] : '';
        
        return code;
    }
};

export default deviceLoanSubmissionStore;