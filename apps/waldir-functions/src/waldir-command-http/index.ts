import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, WALDIRCommand, WALDIRCommandFunctionRequest, WALDIRCommandFunctionRequestBody, WALDIRJobType, WALDIRCommandOperation, WALDIRCommandFunctionRequestPayload } from '@cosmos/types';
import { generateResponseObject, validateWALDIRCommand } from "@cosmos/waldir-functions-shared";

const waldirCommandHTTP: AzureFunction = async function (context: Context, req: WALDIRCommandFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'WALDIR',
        functionName: context.executionContext.functionName,
        functionDataType: 'Command',
        functionDataOperation: 'HTTP',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req as WALDIRCommandFunctionRequest;
    const requestBody = request.body as WALDIRCommandFunctionRequestBody;
    const command = requestBody.command as WALDIRCommand;

    const jobType = command.jobType as WALDIRJobType;
    const operation = command.operation as WALDIRCommandOperation;
    const payload = command.payload as WALDIRCommandFunctionRequestPayload;

    const validatedCommand = validateWALDIRCommand(jobType, operation, payload);
    const commandIsValid = validatedCommand.isValid;
    const jobEnqueueMessages = validatedCommand.jobEnqueueMessages;

    if (commandIsValid) {
        context.bindings.jobEnqueue = jobEnqueueMessages;
    }

    const response = generateResponseObject(functionInvocation, command, validatedCommand);
    
    context.res = {
        status: response.header.status,
        body: response
    }

    const logPayload = response;
    context.log(logPayload);

    functionInvocation.logPayload = logPayload;
    context.done(null, functionInvocation);
};

export default waldirCommandHTTP;
