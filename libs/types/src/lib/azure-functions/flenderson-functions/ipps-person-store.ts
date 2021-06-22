import { IPPSPerson } from "../../entities";
import * as Cosmos from "../common";

interface IPPSPersonStoreFunctionRequest {
    readonly operation: Cosmos.StoreFunctionOperation;
    readonly payload: IPPSPerson;
}

interface IPPSPersonStoreFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: IPPSPersonStoreFunctionResponsePayload;
}

interface IPPSPersonStoreFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: IPPSPersonStoreFunctionResponsePayload;
}

interface IPPSPersonStoreFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface IPPSPersonStoreFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: IPPSPersonStoreFunctionInvocationEventPayload;
}

interface IPPSPersonStoreFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface IPPSPersonStoreFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface IPPSPersonStoreFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface IPPSPersonStoreFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    IPPSPersonStoreFunctionRequest,
    IPPSPersonStoreFunctionResponse,
    IPPSPersonStoreFunctionLogObject,
    IPPSPersonStoreFunctionCallbackMessage,
    IPPSPersonStoreFunctionInvocationEvent,
    IPPSPersonStoreFunctionResponsePayload,
    IPPSPersonStoreFunctionLogObjectPayload,
    IPPSPersonStoreFunctionCallbackMessagePayload,
    IPPSPersonStoreFunctionInvocationEventPayload
}
