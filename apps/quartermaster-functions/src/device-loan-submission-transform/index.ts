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

    const assetAssignment = {
        id: deviceLoanSubmission['id'],

        createdAt: deviceLoanSubmission['createdAt'],
        updatedAt: deviceLoanSubmission['updatedAt'],
        deletedAt: deviceLoanSubmission['deletedAt'],
        deleted:   deviceLoanSubmission['deleted'],

        createdBy: deviceLoanSubmission['loanedBy'],
        updatedBy: '',
        deletedBy: '',

        assignedBy:           deviceLoanSubmission['loanedBy'],
        assignedFromLocation: deviceLoanSubmission['schoolCode'],
    
        assetSerialNumber: deviceLoanSubmission['serialNumber'],
        assetType:         deviceLoanSubmission['deviceType'],
        assetLocation:     deviceLoanSubmission['locationCode'],

        assignedToPerson:         deviceLoanSubmission['loanedToName'],
        assignedToPersonEmail:    deviceLoanSubmission['loanedToEmail'],
        assignedToPersonNumber:   deviceLoanSubmission['loanedToNumber'],
        assignedToPersonLocation: deviceLoanSubmission['schoolCode'],
    
        assignedToBusinessUnit:   deviceLoanSubmission['locationName'],
    
        wasReceivedByAssignee: true,
        receivedBy:            deviceLoanSubmission['receivedBy'],
        receivedByRole:        deviceLoanSubmission['loanedToRole'],
    
        isTemporary: true,
        startDate:   startDate,
        endDate:     '',
    
        wasReturned: deviceLoanSubmission['wasReturned'],
        returnedAt:  deviceLoanSubmission['returnedAt'],
        returnedBy:  deviceLoanSubmission['returnedBy'],

        untrackedAssestsIncluded: deviceLoanSubmission['peripheralsProvided'],
        notes:                    deviceLoanSubmission['notes'],
    } as AssetAssignment;
   
    if (deviceLoanSubmission['correctedAssetID'].length > 1 && deviceLoanSubmission['correctedAssetID'] !== 'FALSE') {
        assetAssignment['assetID'] = deviceLoanSubmission['correctedAssetID']
    } else {
        assetAssignment['assetID'] = deviceLoanSubmission['submittedAssetID']
    }

    //context.bindings.recordOut = {
        //operation: 'replace',
        //payload: assetAssignment
    //}

    const logPayload = {
        oldRecord: deviceLoanSubmission,
        newRecord: assetAssignment
    }
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);
    
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default deviceLoanSubmissionTransform;