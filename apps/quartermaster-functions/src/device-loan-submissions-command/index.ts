import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import jwt_decode from 'jwt-decode';
import { FunctionInvocation, DeviceLoanSubmissionCommandFunctionRequest } from "@cosmos/types";

const deviceLoanSubmissionsCommand: AzureFunction = async function (context: Context, req: DeviceLoanSubmissionCommandFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Quartermaster',
        functionName: context.executionContext.functionName,
        functionDataType: 'DeviceLoanSubmission',
        functionDataOperation: 'Command',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req.body;
    const jobType = request.jobType;
    const operation = request.operation;
    const payload = request.payload;

    switch (jobType) {
        case 'Quartermaster.DeviceLoanSubmission.Store':
            context.bindings.jobEnqueue = {
                jobType: 'Quartermaster.DeviceLoanSubmission.Store',
                operation: operation,
                payload: payload
            };

            break;

        case 'Quartermaster.DeviceLoanSubmission.Return':
            context.bindings.jobEnqueue = {
                jobType: 'Quartermaster.DeviceLoanSubmission.Store',
                operation: operation,
                payload: payload
            };

            break;

        default:
            break;
    }

    let response = {
        header: {
            status: 202,
            message: "",
            chatter: "",
            timestamp: functionInvocation.functionInvocationTimestamp,
        },
        status: 202,
        jobType: jobType,
        operation: operation,
        payload: payload
    };

    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.log(functionInvocation);

    context.done(null, functionInvocation);
};

export default deviceLoanSubmissionsCommand;
