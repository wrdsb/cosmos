import * as Cosmos from "../common";

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequestPayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionResponsePayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionResponsePayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequest,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionResponse,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionLogObject,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionCallbackMessage,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionInvocationEvent,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionRequestPayload,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionResponsePayload,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionLogObjectPayload,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsStudentsGradeCalculateAllFunctionInvocationEventPayload
}