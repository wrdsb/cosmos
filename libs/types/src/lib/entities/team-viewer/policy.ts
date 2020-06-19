/// <reference path="policy-setting.ts" />

namespace TeamViewer {
    export interface Policy {
        policy_id?: string;
        name?: string;
        settings?: PolicySetting[];
    }
}