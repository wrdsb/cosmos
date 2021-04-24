import { FridayJobType } from '@cosmos/types';

interface FridayCosmosDBCollectionRefreshFunctionRequest {
    jobType: FridayCosmosDBCollectionRefreshJobType;
    payload: FridayCosmosDBCollectionRefreshFunctionRequestPayload;
}

type FridayCosmosDBCollectionRefreshJobType = FridayJobType;

interface FridayCosmosDBCollectionRefreshFunctionRequestPayload {

}

export {
    FridayCosmosDBCollectionRefreshFunctionRequest,
    FridayCosmosDBCollectionRefreshJobType,
    FridayCosmosDBCollectionRefreshFunctionRequestPayload
}
