export interface GoogleGroupMembershipIdeal {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    deleted: boolean;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
    group: string;
    user: string;
    role: string;
    type: string;
    status: string;
    isManaged: boolean;
    isCalculated: boolean;
    calculationSource: string;
    isOverride: boolean;
    overrideTier: string;
}