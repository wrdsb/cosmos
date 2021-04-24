import { FridayCommandJobType, FridayCommandOperation, FridayCommandFunctionRequestPayload } from "@cosmos/types";

export function jobTypeEnqueue(jobType: FridayCommandJobType, operation: FridayCommandOperation, payload: FridayCommandFunctionRequestPayload) {
    switch (jobType) {
        case 'Quartermaster.DeviceLoanSubmissions.Copy.ProdDev':
            return {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.DeviceLoanSubmissions.Copy.ProdTest':
            return {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.DeviceLoanSubmissions.Refresh.Dev':
            return {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;

        case 'Quartermaster.DeviceLoanSubmissions.Refresh.Prod':
            return {
                jobType: jobType,
                operation: operation,
                payload: payload
            };
            break;
    
        default:
            break;
    }
}