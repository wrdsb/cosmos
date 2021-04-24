import { HttpRequest } from "@azure/functions";
import { FridayJobType } from '@cosmos/types';

interface FridayCommandFunctionRequest extends HttpRequest {
    body: FridayCommandFunctionRequestBody;
}

interface FridayCommandFunctionRequestBody {
    jobType: FridayCommandJobType;
    operation: FridayCommandOperation;
    payload: FridayCommandFunctionRequestPayload;
}

type FridayCommandJobType = FridayJobType;

interface FridayCommandOperation {

}

interface FridayCommandFunctionRequestPayload {

}

export {
    FridayCommandFunctionRequest,
    FridayCommandFunctionRequestBody,
    FridayCommandJobType,
    FridayCommandOperation,
    FridayCommandFunctionRequestPayload
}