import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { FunctionInvocation } from "@cosmos/types";

const commandHTTP: AzureFunction = async function (context: Context, req: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Panama',
        functionName: context.executionContext.functionName,
        functionDataType: 'Command',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req.body;
    const jobType = (request.jobType) ? request.jobType : null;
    const operation = (request.operation) ? request.operation : null;
    const payload = (request.payload) ? request.payload : null;

    let job = {
        jobID: null,
        jobType: null,
        operation: null,
        payload: null
    };
    let statusCode = 0;
    let response = {};

    switch (jobType) {
        case 'WRDSB.Panama.View.AssetChecksum.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.AssetChecksum.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.Asset.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.Asset.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'wRDSB.Panama.View.Asset.Copy50k':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'wRDSB.Panama.View.Asset.Copy50k',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.Asset.Copy100k':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.Asset.Copy100k',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.Asset.Copy150k':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.Asset.Copy150k',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.Asset.Copy200k':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.Asset.Copy200k',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.Asset.Copy250k':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.Asset.Copy250k',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.Asset.Copy300k':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.Asset.Copy300k',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.Asset.Copy350k':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.Asset.Copy350k',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.AssetClass.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.AssetClass.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.AssetClassType.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.AssetClassType.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.AssetType.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.AssetType.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.GClassroom.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.GClassroom.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.IAMWP.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.IAMWP.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.IPPSGroups.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.IPPSGroups.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.IPPSJobs.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.IPPSJobs.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.IPPSLocations.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.IPPSLocations.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.IPPSPeople.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.IPPSPeople.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.IPPSPositions.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.IPPSPositions.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.SkinnerAssignments.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.SkinnerAssignments.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;
                                                        
        case 'WRDSB.Panama.View.SkinnerStaff.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.SkinnerStaff.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        case 'WRDSB.Panama.View.StaffDir.Copy':
            job = {
                jobID: functionInvocation.functionInvocationID,
                jobType: 'WRDSB.Panama.View.StaffDir.Copy',
                operation: null,
                payload: null
            };
            statusCode = 202;
            break;

        default:
            // Unprocessable Entity
            statusCode = 422;
            break;
    }

    switch (statusCode) {
        case 202:
            context.bindings.jobEnqueue = job;
            response = {
                header: {
                    status: 202,
                    message: `Accepted ${job.jobType} job for processing with ID ${job.jobID}.`,
                    chatter: `Wilco. I'm queueing the ${job.jobType} job for processing. The job's ID is ${job.jobID}`,
                    timestamp: functionInvocation.functionInvocationTimestamp,
                },
                status: 202,
                jobID: job.jobID,
                jobType: job.jobType,
                operation: job.operation,
                payload: job.payload
            };
            break;
    
        case 422:
            response = {
                header: {
                    status: 422,
                    message: `Unprocessable Entity. Cannot find jobType ${jobType}.`,
                    chatter: `Negative. ${jobType} is an unknown job type.`,
                    timestamp: functionInvocation.functionInvocationTimestamp,
                },
                status: 422,
                jobID: null,
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        default:
            response = {
                header: {
                    status: 400,
                    message: `Unknown error.`,
                    chatter: `Negative. I don't know what to do with that request.`,
                    timestamp: functionInvocation.functionInvocationTimestamp,
                },
                status: 400,
                jobID: null,
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
    }

    context.res = {
        status: response['status'],
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default commandHTTP;
