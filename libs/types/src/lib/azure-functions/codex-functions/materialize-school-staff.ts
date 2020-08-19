import * as Cosmos from "../common";

interface CodexMaterializeSchoolStaffFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: CodexMaterializeSchoolStaffFunctionRequestPayload;
}

interface CodexMaterializeSchoolStaffFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: CodexMaterializeSchoolStaffFunctionResponsePayload;
}

interface CodexMaterializeSchoolStaffFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: CodexMaterializeSchoolStaffFunctionResponsePayload;
}

interface CodexMaterializeSchoolStaffFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface CodexMaterializeSchoolStaffFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: CodexMaterializeSchoolStaffFunctionInvocationEventPayload;
}

interface CodexMaterializeSchoolStaffFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface CodexMaterializeSchoolStaffFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface CodexMaterializeSchoolStaffFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface CodexMaterializeSchoolStaffFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface CodexMaterializeSchoolStaffFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    CodexMaterializeSchoolStaffFunctionRequest,
    CodexMaterializeSchoolStaffFunctionResponse,
    CodexMaterializeSchoolStaffFunctionLogObject,
    CodexMaterializeSchoolStaffFunctionCallbackMessage,
    CodexMaterializeSchoolStaffFunctionInvocationEvent,
    CodexMaterializeSchoolStaffFunctionRequestPayload,
    CodexMaterializeSchoolStaffFunctionResponsePayload,
    CodexMaterializeSchoolStaffFunctionLogObjectPayload,
    CodexMaterializeSchoolStaffFunctionCallbackMessagePayload,
    CodexMaterializeSchoolStaffFunctionInvocationEventPayload
}
