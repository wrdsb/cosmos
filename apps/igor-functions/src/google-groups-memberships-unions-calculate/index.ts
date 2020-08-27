import { AzureFunction, Context } from "@azure/functions";
import { createLogObject } from "@cosmos/azure-functions-shared";
import { storeLogBlob } from "@cosmos/azure-functions-shared";
import { createCallbackMessage } from "@cosmos/azure-functions-shared";
import { createEvent } from "@cosmos/azure-functions-shared";
import { GoogleGroupsMembershipsUnionsCalculateFunctionRequest, GoogleGroupsMembershipsUnionsCalculateFunctionRequestPayload } from "@cosmos/types";

const GoogleGroupsMembershipsUnionsCalculate: AzureFunction = async function (context: Context, triggerMessage: GoogleGroupsMembershipsUnionsCalculateFunctionRequest): Promise<void> {
    const functionInvocationID = context.executionContext.invocationId;
    const functionInvocationTime = new Date();
    const functionInvocationTimestamp = functionInvocationTime.toJSON();  // format: 2012-04-23T18:25:43.511Z

    const functionName = context.executionContext.functionName;
    const functionEventType = 'WRDSB.IGOR.Google.Group.Memberships.Roles.Calculate';
    const functionEventID = `hagar-functions-${functionName}-${functionInvocationID}`;
    const functionLogID = `${functionInvocationTime.getTime()}-${functionInvocationID}`;

    const logStorageAccount = process.env['storageAccount'];
    const logStorageKey = process.env['storageKey'];
    const logStorageContainer = 'function-google-groups-memberships-unions-calculate-logs';

    const eventLabel = '';
    const eventTags = [
        "igor", 
    ];

    const triggerObject = triggerMessage as GoogleGroupsMembershipsUnionsCalculateFunctionRequest;
    const payload = triggerObject.payload as GoogleGroupsMembershipsUnionsCalculateFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.iamwpRaw;

    const excluded_job_codes = ['6106', '6118'];
    const activity_codes = ['ACTIVE', 'ONLEAVE'];

    const camaGroupCodes = context.bindings.camaGroupCodes.group_codes;
    const cywJobCodes = context.bindings.cywJobCodes.job_codes;
    const deceGroupCodes = context.bindings.deceGroupCodes.group_codes;
    const deceExcludedJobCodes = context.bindings.deceExcludedJobCodes.job_codes;
    const deceObserverJobCodes = context.bindings.deceObserverJobCodes.job_codes;
    const eaaGroupCodes = context.bindings.eaaGroupCodes.group_codes;
    const eaaExcludedJobCodes = context.bindings.eaaExcludedJobCodes.job_codes;
    const essGroupCodes = context.bindings.essGroupCodes.group_codes;
    const etfoGroupCodes = context.bindings.etfoGroupCodes.group_codes;
    const osstfContractGroupCodes = context.bindings.osstfContractGroupCodes.group_codes;
    const osstfOTGroupCodes = context.bindings.osstfOtGroupCodes.group_codes;
    const psspGroupCodes = context.bindings.psspGroupCodes.group_codes;
    const smacaGroupCodes = context.bindings.smacaGroupCodes.group_codes;
    const smacaElementaryGroupCodes = context.bindings.smacaElementaryGroupCodes.group_codes;
    const smacaSecondaryGroupCodes = context.bindings.smacaSecondaryGroupCodes.group_codes;

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.camaOutputBlob = calculatedMembers.cama;
    context.bindings.cywOutputBlob = calculatedMembers.cyw;
    context.bindings.cywElementaryOutputBlob = calculatedMembers.cywElementary;
    context.bindings.cywSecondaryOutputBlob = calculatedMembers.cywSecondary;
    context.bindings.deceOutputBlob = calculatedMembers.dece;
    context.bindings.deceInfoOutputBlob = calculatedMembers.deceInfo;
    context.bindings.eaaOutputBlob = calculatedMembers.eaa;
    context.bindings.eaaElementaryOutputBlob = calculatedMembers.eaaElementary;
    context.bindings.eaaSecondaryOutputBlob = calculatedMembers.eaaSecondary;
    context.bindings.essOutputBlob = calculatedMembers.ess;
    context.bindings.etfoOutputBlob = calculatedMembers.etfo;
    context.bindings.osstfContractOutputBlob = calculatedMembers.osstfContract;
    context.bindings.osstfOTOutputBlob = calculatedMembers.osstfOT;
    context.bindings.psspOutputBlob = calculatedMembers.pssp;
    context.bindings.smacaOutputBlob = calculatedMembers.smaca;
    context.bindings.smacaElementaryOutputBlob = calculatedMembers.smacaElementary;
    context.bindings.smacaSecondaryOutputBlob = calculatedMembers.smacaSecondary;

    const memberCounts = {
        cama: Object.getOwnPropertyNames(calculatedMembers.cama).length,
        cyw: Object.getOwnPropertyNames(calculatedMembers.cyw).length,
        cywElementary: Object.getOwnPropertyNames(calculatedMembers.cywElementary).length,
        cywSecondary: Object.getOwnPropertyNames(calculatedMembers.cywSecondary).length,
        dece: Object.getOwnPropertyNames(calculatedMembers.dece).length,
        deceInfo: Object.getOwnPropertyNames(calculatedMembers.deceInfo).length,
        eaa: Object.getOwnPropertyNames(calculatedMembers.eaa).length,
        eaaElementary: Object.getOwnPropertyNames(calculatedMembers.eaaElementary).length,
        eaaSecondary: Object.getOwnPropertyNames(calculatedMembers.eaaSecondary).length,
        ess: Object.getOwnPropertyNames(calculatedMembers.ess).length,
        etfo: Object.getOwnPropertyNames(calculatedMembers.etfo).length,
        osstfContract: Object.getOwnPropertyNames(calculatedMembers.osstfContract).length,
        osstfOT: Object.getOwnPropertyNames(calculatedMembers.osstfOT).length,
        pssp: Object.getOwnPropertyNames(calculatedMembers.pssp).length,
        smaca: Object.getOwnPropertyNames(calculatedMembers.smaca).length,
        smacaElementary: Object.getOwnPropertyNames(calculatedMembers.smacaElementary).length,
        smacaSecondary: Object.getOwnPropertyNames(calculatedMembers.smacaSecondary).length
    }

    const logPayload = {
        memberCounts: memberCounts
    };
    context.log(logPayload);

    const logObject = await createLogObject(functionInvocationID, functionInvocationTime, functionName, logPayload);
    const logBlob = await storeLogBlob(logStorageAccount, logStorageKey, logStorageContainer, logObject);
    context.log(logBlob);

    const callbackMessage = await createCallbackMessage(logObject, 200);
    context.bindings.callbackMessage = JSON.stringify(callbackMessage);
    context.log(callbackMessage);

    const invocationEvent = await createEvent(
        functionInvocationID,
        functionInvocationTime,
        functionInvocationTimestamp,
        functionName,
        functionEventType,
        functionEventID,
        functionLogID,
        logStorageAccount,
        logStorageContainer,
        eventLabel,
        eventTags
    );
    context.bindings.flynnEvent = JSON.stringify(invocationEvent);
    context.log(invocationEvent);

    context.done(null, logBlob);


    async function calculateMembers (rows) {
        let members = {
            cama: {},
            cyw: {},
            cywElementary: {},
            cywSecondary: {},
            dece: {},
            deceInfo: {},
            eaa: {},
            eaaElementary: {},
            eaaSecondary: {},
            ess: {},
            etfo: {},
            osstfContract: {},
            osstfOT: {},
            pssp: {},
            smaca: {},
            smacaElementary: {},
            smacaSecondary: {}
        };

        rows.forEach(function(row) {
            let email = (row.EMAIL_ADDRESS) ? row.EMAIL_ADDRESS : null;
            let jobCode = (row.JOB_CODE) ? row.JOB_CODE : null;
            let groupCode = (row.EMP_GROUP_CODE) ? row.EMP_GROUP_CODE : null;
            let locationCode = (row.LOCATION_CODE) ? row.LOCATION_CODE : null;
            let schoolCode = (row.SCHOOL_CODE) ? row.SCHOOL_CODE.toLowerCase() : null;
            let panel = (row.PANEL) ? row.PANEL : null;
            let activityCode = (row.ACTIVITY_CODE ) ? row.ACTIVITY_CODE : null;

            if (row.EMAIL_ADDRESS
                && !excluded_job_codes.includes(row.JOB_CODE)
                && activity_codes.includes(row.ACTIVITY_CODE)
            ) {
                if (camaGroupCodes.includes(groupCode)) {
                    members.cama[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'cama@wrdsb.ca'
                    };
                }

                if (cywJobCodes.includes(jobCode)) {
                    members.cyw[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'cyw@wrdsb.ca'
                    };
                }

                if (cywJobCodes.includes(jobCode) && panel == 'E') {
                    members.cywElementary[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'cyw-elementary@wrdsb.ca'
                    };
                }

                if (cywJobCodes.includes(jobCode) && panel == 'S') {
                    members.cywSecondary[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'cyw-secondary@wrdsb.ca'
                    };
                }
        
                //if (deceGroupCodes.includes(groupCode) && !deceExcludedJobCodes.includes(jobCode)) {
                    //members.dece[email] = {
                        //email:          email,
                        //role:           "MEMBER",
                        //status:         "ACTIVE",
                        //type:           "USER",
                        //groupKey:       'dece@wrdsb.ca'
                    //};
                //}

                if (deceGroupCodes.includes(groupCode) && !deceExcludedJobCodes.includes(jobCode)) {
                    members.deceInfo[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'dece-info@wrdsb.ca'
                    };
                }

                if (deceObserverJobCodes.includes(jobCode)) {
                    members.deceInfo[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'dece-info@wrdsb.ca'
                    };
                }

                if (eaaGroupCodes.includes(groupCode) && !eaaExcludedJobCodes.includes(jobCode)) {
                    members.eaa[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'eaa@wrdsb.ca'
                    };
                    if (panel == 'E') {
                        members.eaaElementary[email] = {
                            email:          email,
                            role:           "MEMBER",
                            status:         "ACTIVE",
                            type:           "USER",
                            groupKey:       'eaa-elementary@wrdsb.ca'
                        };
                    }
                    if (panel == 'S') {
                        members.eaaSecondary[email] = {
                            email:          email,
                            role:           "MEMBER",
                            status:         "ACTIVE",
                            type:           "USER",
                            groupKey:       'eaa-secondary@wrdsb.ca'
                        };
                    }
                }

                if (essGroupCodes.includes(groupCode)) {
                    members.ess[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'ess@wrdsb.ca'
                    };
                }

                if (etfoGroupCodes.includes(groupCode)) {
                    members.etfo[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'etfo@wrdsb.ca'
                    };
                }

                if (osstfContractGroupCodes.includes(groupCode)) {
                    members.osstfContract[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'osstf-contract@wrdsb.ca'
                    };
                }

                if (osstfOTGroupCodes.includes(groupCode)) {
                    members.osstfOT[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'osstf-ot@wrdsb.ca'
                    };
                }

                if (psspGroupCodes.includes(groupCode)) {
                    members.pssp[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'pssp@wrdsb.ca'
                    };
                }

                if (smacaGroupCodes.includes(groupCode)) {
                    members.smaca[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'smaca@wrdsb.ca'
                    };
                }

                if (smacaElementaryGroupCodes.includes(groupCode) && panel == 'E') {
                    members.smacaElementary[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'smaca-elementary@wrdsb.ca'
                    };
                }

                if (smacaSecondaryGroupCodes.includes(groupCode) && panel == 'S') {
                    members.smacaSecondary[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'smaca-secondary@wrdsb.ca'
                    };
                }
            }
        });
        return members;
    }
}

export default GoogleGroupsMembershipsUnionsCalculate;