import { FridayJobType } from '@cosmos/types';

interface FridayCosmosDBCollectionCopyFunctionRequest {
    jobType: FridayCosmosDBCollectionCopyJobType;
    payload: FridayCosmosDBCollectionCopyFunctionRequestPayload;
}

type FridayCosmosDBCollectionCopyJobType = FridayJobType;

interface FridayCosmosDBCollectionCopyFunctionRequestPayload {
    sourceDB: string;
    sourceCollection: string;
    sinkDB: string;
    sinkCollection: string;
}

export {
    FridayCosmosDBCollectionCopyFunctionRequest,
    FridayCosmosDBCollectionCopyJobType,
    FridayCosmosDBCollectionCopyFunctionRequestPayload
}
