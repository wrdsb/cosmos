import { FridayJobType } from '@cosmos/types';

interface FridayCosmosDBCollectionEmptyFunctionRequest {
    jobType: FridayCosmosDBCollectionEmptyJobType;
    payload: FridayCosmosDBCollectionEmptyFunctionRequestPayload;
}

type FridayCosmosDBCollectionEmptyJobType = FridayJobType;

interface FridayCosmosDBCollectionEmptyFunctionRequestPayload {
    sourceDB: string;
    sourceCollection: string;
}

export {
    FridayCosmosDBCollectionEmptyFunctionRequest,
    FridayCosmosDBCollectionEmptyJobType,
    FridayCosmosDBCollectionEmptyFunctionRequestPayload
}
