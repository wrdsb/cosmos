import * as Cosmos from "../common";

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequest extends Cosmos.FunctionRequest {
    readonly payload: GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequestPayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionResponse extends Cosmos.FunctionResponse {
    readonly payload: GoogleGroupsMembershipsStudentsGradeCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionLogObject extends Cosmos.FunctionLogObject {
    readonly payload: GoogleGroupsMembershipsStudentsGradeCalculateFunctionResponsePayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionCallbackMessage extends Cosmos.FunctionCallbackMessage {}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionInvocationEvent extends Cosmos.FunctionInvocationEvent {
    readonly data: GoogleGroupsMembershipsStudentsGradeCalculateFunctionInvocationEventPayload;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequestPayload extends Cosmos.FunctionRequestPayload {
    readonly grade: string;
}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionResponsePayload extends Cosmos.FunctionResponsePayload {
}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionLogObjectPayload extends Cosmos.FunctionLogObjectPayload {}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionCallbackMessagePayload extends Cosmos.FunctionCallbackMessagePayload {}

interface GoogleGroupsMembershipsStudentsGradeCalculateFunctionInvocationEventPayload extends Cosmos.FunctionInvocationEventPayload {}

export {
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequest,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionResponse,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionLogObject,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionCallbackMessage,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionInvocationEvent,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionRequestPayload,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionResponsePayload,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionLogObjectPayload,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionCallbackMessagePayload,
    GoogleGroupsMembershipsStudentsGradeCalculateFunctionInvocationEventPayload
}
