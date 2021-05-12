import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, AssetAssignment, DeviceLoanSubmission } from "@cosmos/types";

const deviceLoanSubmissionTransform: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoanSubmission',
        functionDataOperation: 'Transform',
        eventLabel: ''
    } as FunctionInvocation;

    const deviceLoanSubmission = context.bindings.recordIn as DeviceLoanSubmission;
    const startDate = new Date(deviceLoanSubmission['timestamp']).toJSON();

    let createdAt = '';
    if (deviceLoanSubmission['createdAt'] && deviceLoanSubmission['createdAt'].length > 1) {
        createdAt = deviceLoanSubmission['createdAt'];
    } else if (deviceLoanSubmission['created_at'] && deviceLoanSubmission['created_at'].length > 1) {
        createdAt = deviceLoanSubmission['created_at'];
    } else {
        createdAt = startDate;
    }

    const updatedAt = deviceLoanSubmission['updatedAt'] ?? deviceLoanSubmission['updated_at'];
    const deletedAt = deviceLoanSubmission['deletedAt'] ?? deviceLoanSubmission['deleted_at'];

    const schoolCode = (deviceLoanSubmission['schoolCode'].length > 0) ? deviceLoanSubmission['schoolCode'] : getSchoolCode(deviceLoanSubmission['locationName']);

    let assetID = '';
    if (deviceLoanSubmission['correctedAssetID'] && deviceLoanSubmission['correctedAssetID'].length > 1 && deviceLoanSubmission['correctedAssetID'] !== 'FALSE') {
        assetID = deviceLoanSubmission['correctedAssetID']
    } else {
        assetID = deviceLoanSubmission['submittedAssetID']
    }

    let wasReceivedByAssignee = true;
    if (deviceLoanSubmission['receivedBy'] && deviceLoanSubmission['receivedBy'].length > 1) {
        wasReceivedByAssignee = false;
    } else {
        wasReceivedByAssignee = true;
    }

    const assetAssignment = {
        id: '',
        legacyID: deviceLoanSubmission['id'],

        createdAt: createdAt,
        updatedAt: updatedAt,
        deletedAt: deletedAt,
        deleted:   deviceLoanSubmission['deleted'],

        createdBy: deviceLoanSubmission['loanedBy'],
        updatedBy: '',
        deletedBy: '',

        assignedBy:           deviceLoanSubmission['loanedBy'],
        assignedFromLocation: schoolCode,
    
        assetID:           assetID,
        assetSerialNumber: deviceLoanSubmission['serialNumber'],
        assetType:         deviceLoanSubmission['deviceType'],
        assetLocation:     deviceLoanSubmission['locationCode'],

        assignedToPerson:         deviceLoanSubmission['loanedToName'],
        assignedToPersonEmail:    deviceLoanSubmission['loanedToEmail'],
        assignedToPersonNumber:   deviceLoanSubmission['loanedToNumber'],
        assignedToPersonLocation: schoolCode,
    
        assignedToBusinessUnit:   schoolCode,
    
        wasReceivedByAssignee: wasReceivedByAssignee,
        receivedBy:            deviceLoanSubmission['receivedBy'],
        receivedByRole:        deviceLoanSubmission['loanedToRole'],
    
        isTemporary: true,
        startDate:   startDate,
        endDate:     '2021-06-30T00:00:00.000Z',
    
        wasReturned: deviceLoanSubmission['wasReturned'],
        returnedAt:  deviceLoanSubmission['returnedAt'],
        returnedBy:  deviceLoanSubmission['returnedBy'],

        untrackedAssestsIncluded: deviceLoanSubmission['peripheralsProvided'],
        notes:                    deviceLoanSubmission['notes'],
    } as AssetAssignment;
   
    context.bindings.recordOut = {
        operation: 'create',
        payload: assetAssignment
    }

    const logPayload = {
        oldRecord: deviceLoanSubmission,
        newRecord: assetAssignment
    }
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);
    
    context.log(functionInvocation);
    context.done(null, functionInvocation);


    function getSchoolCode(fullName: string): string {
        const codes = {
            'DSPS': 'DSPS',
            'GNSS': 'GNSS',
            'ECPP': 'ECPP',
            '151 Weber': 'ECPP',
            '7th Inning' : 'ECPP',
            'Foundations' : 'ECPP',
            'Hatts Off' : 'ECPP',
            'Lutherwood' : 'ECPP',
            'Pinegrove' : 'ECPP',
            'ROH-Altern Education Centre' : 'ECPP',
            'ROH-Secure' : 'ECPP',
            'ROH-Yth Add-Day Treatment' : 'ECPP',
            'ROH-Yth Add-Residential' : 'ECPP',
            'St. Monica' : 'ECPP',
            'Sunbeam Centre' : 'ECPP',
            'Temenos' : 'ECPP',
            'The Forte' : 'ECPP',
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
            'St. Andrews': 'STA',
            'St. Jacobs': 'STJ',
            'Stanley Park': 'STN',
            'Stewart Ave': 'STW',
            'STSWR': '',
            'Suddaby': 'SUD',
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
        const code = (codes[fullName]) ? codes[fullName] : '';
        
        return code;
    }
};

export default deviceLoanSubmissionTransform;