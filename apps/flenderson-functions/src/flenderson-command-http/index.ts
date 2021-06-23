import { AzureFunction, Context } from "@azure/functions"
import { FunctionInvocation, FlendersonCommand, FlendersonCommandFunctionRequest, FlendersonCommandFunctionRequestBody, FlendersonJobType, FlendersonCommandOperation, FlendersonCommandFunctionRequestPayload } from '@cosmos/types';
import { generateResponseObject, validateFlendersonCommand } from "@cosmos/flenderson-functions-shared";

const flendersonCommandHTTP: AzureFunction = async function (context: Context, req: FlendersonCommandFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'Flenderson',
        functionName: context.executionContext.functionName,
        functionDataType: 'Command',
        functionDataOperation: 'HTTP',
        eventLabel: ''
    } as FunctionInvocation;

    const request = req as FlendersonCommandFunctionRequest;
    const requestBody = request.body as FlendersonCommandFunctionRequestBody;
    const command = requestBody.command as FlendersonCommand;

    const jobType = command.jobType as FlendersonJobType;
    const operation = command.operation as FlendersonCommandOperation;
    const payload = command.payload as FlendersonCommandFunctionRequestPayload;

    const validatedCommand = validateFlendersonCommand(jobType, operation, payload);
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
    context.log(functionInvocation);
    context.done(null, functionInvocation);
};

export default flendersonCommandHTTP;
