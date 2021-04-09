import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation, GroupMembershipsOneOffsCalculateFunctionRequest, GroupMembershipsOneOffsCalculateFunctionRequestPayload } from "@cosmos/types";

const GroupMembershipsOneOffsCalculate: AzureFunction = async function (context: Context, triggerMessage: GroupMembershipsOneOffsCalculateFunctionRequest): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'IGOR',
        functionName: context.executionContext.functionName,
        functionDataType: 'GoogleGroupMembershipsOneOffs',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage as GroupMembershipsOneOffsCalculateFunctionRequest;
    const payload = triggerObject.payload as GroupMembershipsOneOffsCalculateFunctionRequestPayload;

    context.log(payload);

    const rows = context.bindings.iamwpRaw;

    const excludedJobCodes = ['6106', '6118'];
    const activityCodes = ['ACTIVE', 'ONLEAVE'];

    const admissionsQnaJobCodes = context.bindings.admissionsQnaJobCodes.job_codes;
    const deceStaffGroupCodes = context.bindings.deceStaffGroupCodes.group_codes;
    const eaStaffJobCodes = context.bindings.eaStaffJobCodes.job_codes;
    const edDeploymentManagerJobCodes = context.bindings.edDeploymentManagerJobCodes.job_codes;
    const edDeploymentMemberJobCodes = context.bindings.edDeploymentMemberJobCodes.job_codes;
    const edInquiriesJobCodes = context.bindings.edInquiriesJobCodes.job_codes;
    const edcLocationCodes = context.bindings.edcLocationCodes.location_codes;
    const elementarySertsJobCodes = context.bindings.elementarySertsJobCodes.job_codes;
    const financeJobCodes = context.bindings.financeJobCodes.job_codes;
    const financeLocationCodes = context.bindings.financeLocationCodes.location_codes;
    const googleWorkspaceEnterpriseAccessJobCodes = context.bindings.googleWorkspaceEnterpriseAccessJobCodes.job_codes;
    const googleWorkspaceEnterpriseAccessGroupCodes = context.bindings.googleWorkspaceEnterpriseAccessGroupCodes.group_codes;
    const googleWorkspaceEnterpriseAccessLocationCodes = context.bindings.googleWorkspaceEnterpriseAccessLocationCodes.location_codes;
    const grcHealthSafetyLocationCodes = context.bindings.grcHealthSafetyLocationCodes.location_codes;
    const itinerantSpecEdJobCodes = context.bindings.itinerantSpecEdJobCodes.job_codes;
    const itinerantSpecEdLocationCodes = context.bindings.itinerantSpecEdLocationCodes.location_codes;
    const itsJobCodes = context.bindings.itsJobCodes.job_codes;
    const itsLocationCodes = context.bindings.itsLocationCodes.job_codes;
    const itsStaffManagersJobCodes = context.bindings.itsManagerCodes.job_codes;
    const procurementQnaJobCodes = context.bindings.procurementQnaJobCodes.job_codes;
    const psychologistsJobCodes = context.bindings.psychologistsJobCodes.job_codes;
    const riskJobCodes = context.bindings.riskJobCodes.job_codes;
    const schoolDayJobCodes = context.bindings.schoolDayJobCodes.job_codes;
    const secondarySertsJobCodes = context.bindings.secondarySertsJobCodes.job_codes;
    const smacaElementaryGroupCodes = context.bindings.smacaElementaryGroupCodes.group_codes;
    const smacaSecondaryGroupCodes = context.bindings.smacaSecondaryGroupCodes.group_codes;
    const socialWorkersJobCodes = context.bindings.socialWorkersJobCodes.job_codes;
    const specialEducationLocationCodes = context.bindings.specialEducationLocationCodes.location_codes;
    const specialEducationConsultantsJobCodes = context.bindings.specialEducationConsultantsJobCodes.job_codes;
    const speechLanguageJobCodes = context.bindings.speechLanguageJobCodes.job_codes;
    const systemLeadersJobCodes = context.bindings.systemLeadersJobCodes.job_codes;
    const thrMessageBoardJobCodes = context.bindings.thrMessageBoardJobCodes.job_codes;
    const tweaJobCodes = context.bindings.tweaJobCodes.job_codes;
    const wciHealthSafetyLocationCodes = context.bindings.wciHealthSafetyLocationCodes.location_codes;
    const wrdsbManagersJobCodes = context.bindings.wrdsbManagersJobCodes.job_codes;
    const intranetItsLocationCodes = context.bindings.itsJobCodes.job_codes;
    const intranetLibraryJobCodes = context.bindings.intranetLibraryJobCodes.job_codes;
    const intranetTrilliumJobCodes = context.bindings.intranetTrilliumJobCodes.job_codes;

    const calculatedMembers = await calculateMembers(rows);

    context.bindings.admissionsQnaOutputBlob = calculatedMembers.admissionsQna;
    context.bindings.deceStaffOutputBlob = calculatedMembers.deceStaff;
    context.bindings.eaStaffOutputBlob = calculatedMembers.eaStaff;
    context.bindings.edDeploymentOutputBlob = calculatedMembers.edDeployment;
    context.bindings.edInquiriesOutputBlob = calculatedMembers.edInquiries;
    context.bindings.edcStaffOutputBlob = calculatedMembers.edcStaff;
    context.bindings.elementarySertsOutputBlob = calculatedMembers.elementarySerts;
    context.bindings.financeStaffOutputBlob = calculatedMembers.financeStaff;
    context.bindings.googleWorkspaceEnterpriseAccessOutputBlob = calculatedMembers.googleWorkspaceEnterpriseAccess;
    context.bindings.grcHealthSafetyOutputBlob = calculatedMembers.grcHealthSafety;
    context.bindings.intranetLibraryOutputBlob = calculatedMembers.intranetLibrary;
    context.bindings.intranetSpecialEducationOutputBlob = calculatedMembers.intranetSpecialEducation;
    context.bindings.intranetTrilliumOutputBlob = calculatedMembers.intranetTrillium;
    context.bindings.itinerantSpecEdOutputBlob = calculatedMembers.itinerantSpecEd;
    context.bindings.itsStaffOutputBlob = calculatedMembers.itsStaff;
    context.bindings.procurementQnaOutputBlob = calculatedMembers.procurementQna;
    context.bindings.psychologistsOutputBlob = calculatedMembers.psychologists;
    context.bindings.riskOutputBlob = calculatedMembers.risk;
    context.bindings.schoolDayOutputBlob = calculatedMembers.schoolDay;
    context.bindings.secondarySertsOutputBlob = calculatedMembers.secondarySerts;
    context.bindings.smacaElementaryQnaOutputBlob = calculatedMembers.smacaElementaryQna;
    context.bindings.smacaSecondaryQnaOutputBlob = calculatedMembers.smacaSecondaryQna;
    context.bindings.socialWorkersOutputBlob = calculatedMembers.socialWorkers;
    context.bindings.specialEducationOutputBlob = calculatedMembers.specialEducation;
    context.bindings.specialEducationConsultantsOutputBlob = calculatedMembers.specialEducationConsultants;
    context.bindings.speechLanguageOutputBlob = calculatedMembers.speechLanguage;
    context.bindings.systemLeadersOutputBlob = calculatedMembers.systemLeaders;
    context.bindings.thrMessageBoardOutputBlob = calculatedMembers.thrMessageBoard;
    context.bindings.tweaOutputBlob = calculatedMembers.twea;
    context.bindings.wciHealthSafetyOutputBlob = calculatedMembers.wciHealthSafety;
    context.bindings.wrdsbManagersOutputBlob = calculatedMembers.wrdsbManagers;

    const memberCounts = {
        admissionsQna: Object.getOwnPropertyNames(calculatedMembers.admissionsQna).length,
        deceStaff: Object.getOwnPropertyNames(calculatedMembers.deceStaff).length,
        eaStaff: Object.getOwnPropertyNames(calculatedMembers.eaStaff).length,
        edDeployment: Object.getOwnPropertyNames(calculatedMembers.edDeployment).length,
        edInquiries: Object.getOwnPropertyNames(calculatedMembers.edInquiries).length,
        edcStaff: Object.getOwnPropertyNames(calculatedMembers.edcStaff).length,
        elementarySerts: Object.getOwnPropertyNames(calculatedMembers.elementarySerts).length,
        financeStaff: Object.getOwnPropertyNames(calculatedMembers.financeStaff).length,
        googleWorkspaceEnterpriseAccess: Object.getOwnPropertyNames(calculatedMembers.googleWorkspaceEnterpriseAccess).length,
        grcHealthSafety: Object.getOwnPropertyNames(calculatedMembers.grcHealthSafety).length,
        intranetLibrary: Object.getOwnPropertyNames(calculatedMembers.intranetLibrary).length,
        intranetSpecialEducation: Object.getOwnPropertyNames(calculatedMembers.intranetSpecialEducation).length,
        intranetTrillium: Object.getOwnPropertyNames(calculatedMembers.intranetTrillium).length,
        itinerantSpecEd: Object.getOwnPropertyNames(calculatedMembers.itinerantSpecEd).length,
        itsStaff: Object.getOwnPropertyNames(calculatedMembers.itsStaff).length,
        procurementQna: Object.getOwnPropertyNames(calculatedMembers.procurementQna).length,
        psychologists: Object.getOwnPropertyNames(calculatedMembers.psychologists).length,
        risk: Object.getOwnPropertyNames(calculatedMembers.risk).length,
        schoolDay: Object.getOwnPropertyNames(calculatedMembers.schoolDay).length,
        secondarySerts: Object.getOwnPropertyNames(calculatedMembers.secondarySerts).length,
        smacaElementaryQna: Object.getOwnPropertyNames(calculatedMembers.smacaElementaryQna).length,
        smacaSecondaryQna: Object.getOwnPropertyNames(calculatedMembers.smacaSecondaryQna).length,
        socialWorkers: Object.getOwnPropertyNames(calculatedMembers.socialWorkers).length,
        specialEducation: Object.getOwnPropertyNames(calculatedMembers.specialEducation).length,
        specialEducationConsultants: Object.getOwnPropertyNames(calculatedMembers.specialEducationConsultants).length,
        speechLanguage: Object.getOwnPropertyNames(calculatedMembers.speechLanguage).length,
        systemLeaders: Object.getOwnPropertyNames(calculatedMembers.systemLeaders).length,
        thrMessageBoard: Object.getOwnPropertyNames(calculatedMembers.thrMessageBoard).length,
        twea: Object.getOwnPropertyNames(calculatedMembers.twea).length,
        wciHealthSafety: Object.getOwnPropertyNames(calculatedMembers.wciHealthSafety).length,
        wrdsbManagers: Object.getOwnPropertyNames(calculatedMembers.wrdsbManagers).length
    }
    
    const logPayload = {
        memberCounts: memberCounts
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function calculateMembers(rows) {
        const members = {
            admissionsQna: {},
            deceStaff: {},
            eaStaff: {},
            edDeployment: {},
            edInquiries: {},
            edcStaff: {},
            elementarySerts: {},
            financeStaff: {},
            googleWorkspaceEnterpriseAccess: {},
            grcHealthSafety: {},
            intranetLibrary: {},
            intranetSpecialEducation: {},
            intranetTrillium: {},
            itinerantSpecEd: {},
            itsStaff: {},
            procurementQna: {},
            psychologists: {},
            risk: {},
            schoolDay: {},
            secondarySerts: {},
            smacaElementaryQna: {},
            smacaSecondaryQna: {},
            socialWorkers: {},
            specialEducation: {},
            specialEducationConsultants: {},
            speechLanguage: {},
            systemLeaders: {},
            thrMessageBoard: {},
            twea: {},
            wciHealthSafety: {},
            wrdsbManagers: {}
        };

        rows.forEach(function(row) {
            const email = (row.EMAIL_ADDRESS) ? row.EMAIL_ADDRESS : null;
            const jobCode = (row.JOB_CODE) ? row.JOB_CODE : null;
            const groupCode = (row.EMP_GROUP_CODE) ? row.EMP_GROUP_CODE : null;
            const locationCode = (row.LOCATION_CODE) ? row.LOCATION_CODE : null;
            const schoolCode = (row.SCHOOL_CODE) ? row.SCHOOL_CODE.toLowerCase() : null;
            const panel = (row.PANEL) ? row.PANEL : null;
            const activityCode = (row.ACTIVITY_CODE ) ? row.ACTIVITY_CODE : null;

            if (row.EMAIL_ADDRESS
                && !excludedJobCodes.includes(jobCode)
                && activityCodes.includes(activityCode)
            ) {
                if (admissionsQnaJobCodes.includes(jobCode)) {
                    members.admissionsQna[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "admissions-qna@wrdsb.ca"
                    };
                }
                if (deceStaffGroupCodes.includes(groupCode)) {
                    members.deceStaff[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "dece-staff@wrdsb.ca"
                    };
                }
                if (eaStaffJobCodes.includes(jobCode)) {
                    members.eaStaff[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "ea-staff@wrdsb.ca"
                    };
                }
                if (edDeploymentManagerJobCodes.includes(jobCode)) {
                    members.edDeployment[email] = {
                        email:          email,
                        role:           "MANAGER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "ed-deployment@wrdsb.ca"
                    };
                }
                if (edDeploymentMemberJobCodes.includes(jobCode)) {
                    members.edDeployment[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "ed-deployment@wrdsb.ca"
                    };
                }
                if (edInquiriesJobCodes.includes(jobCode)) {
                    members.edInquiries[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "ed-inquiries@wrdsb.ca"
                    };
                }
                if (edcLocationCodes.includes(locationCode)) {
                    members.edcStaff[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'edc-staff@wrdsb.ca'
                    };
                }
                if (elementarySertsJobCodes.includes(jobCode) && panel == 'E') {
                    members.elementarySerts[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "elementary-serts@wrdsb.ca"
                    };
                }
                if ((financeJobCodes.includes(jobCode)) || (financeLocationCodes.includes(locationCode))) {
                    members.financeStaff[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'finance-staff@wrdsb.ca'
                    };
                }
                if ((googleWorkspaceEnterpriseAccessJobCodes.includes(jobCode)) || (googleWorkspaceEnterpriseAccessGroupCodes.includes(groupCode)) || (googleWorkspaceEnterpriseAccessLocationCodes.includes(locationCode))) {
                    members.googleWorkspaceEnterpriseAccess[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'google-workspace-enterprise-access@wrdsb.ca'
                    };
                }
                if (grcHealthSafetyLocationCodes.includes(locationCode)) {
                    members.grcHealthSafety[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'grc-health-safety@wrdsb.ca'
                    };
                }
                //if (intranetItsJobCodes.includes(jobCode)) {
                    //members.intranet-its[email] = {
                        //email:          email,
                        //role:           "MEMBER",
                        //status:         "ACTIVE",
                        //type:           "USER",
                        //groupKey:       'intranet-its@wrdsb.ca'
                    //};
                //}
                if (intranetLibraryJobCodes.includes(jobCode)) {
                    members.intranetLibrary[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "intranet-library@wrdsb.ca"
                    };
                }
                if (elementarySertsJobCodes.includes(jobCode)) {
                    members.intranetSpecialEducation[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "intranet-special-education@wrdsb.ca"
                    };
                }
                if (secondarySertsJobCodes.includes(jobCode)) {
                    members.intranetSpecialEducation[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "intranet-special-education@wrdsb.ca"
                    };
                }
                if (specialEducationConsultantsJobCodes.includes(jobCode)) {
                    members.intranetSpecialEducation[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "intranet-special-education@wrdsb.ca"
                    };
                }
                if (intranetTrilliumJobCodes.includes(jobCode)) {
                    members.intranetTrillium[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "intranet-trillium@wrdsb.ca"
                    };
                }
                if (itinerantSpecEdJobCodes.includes(jobCode) && itinerantSpecEdLocationCodes.includes(locationCode)) {
                    members.itinerantSpecEd[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "itinerant-spec-ed@wrdsb.ca"
                    };
                }
                if (itsJobCodes.includes(jobCode)) {
                    members.itsStaff[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'its-staff@wrdsb.ca'
                    };
                }
                if (itsLocationCodes.includes(locationCode)) {
                    members.itsStaff[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'its-staff@wrdsb.ca'
                    };
                }
                if (itsStaffManagersJobCodes.includes(jobCode)) {
                    members.itsStaff[email] = {
                        email:          email,
                        role:           "MANAGER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'its-staff@wrdsb.ca'
                    };
                }
                if (procurementQnaJobCodes.includes(jobCode)) {
                    members.procurementQna[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "procurement-qna@wrdsb.ca"
                    };
                }
                if (psychologistsJobCodes.includes(jobCode)) {
                    members.psychologists[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "psychologists@wrdsb.ca"
                    };
                }
                if (riskJobCodes.includes(jobCode)) {
                    members.risk[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "risk@wrdsb.ca"
                    };
                }
                if (schoolDayJobCodes.includes(jobCode)) {
                    members.schoolDay[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "school-day@wrdsb.ca"
                    };
                }
                if (secondarySertsJobCodes.includes(jobCode) && panel == 'S') {
                    members.secondarySerts[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "secondary-serts@wrdsb.ca"
                    };
                }
                if (smacaElementaryGroupCodes.includes(groupCode) && panel == 'E') {
                    members.smacaElementaryQna[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'smaca-elementary-qna@wrdsb.ca'
                    };
                }
                if (smacaSecondaryGroupCodes.includes(groupCode) && panel == 'S') {
                    members.smacaSecondaryQna[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'smaca-secondary-qna@wrdsb.ca'
                    }
                }
                if (socialWorkersJobCodes.includes(jobCode)) {
                    members.socialWorkers[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "social-workers@wrdsb.ca"
                    };
                }
                if (specialEducationLocationCodes.includes(locationCode)) {
                    members.specialEducation[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "special-education@wrdsb.ca"
                    };
                }
                if (specialEducationConsultantsJobCodes.includes(jobCode)) {
                    members.specialEducationConsultants[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "special-education-consultants@wrdsb.ca"
                    };
                }
                if (speechLanguageJobCodes.includes(jobCode)) {
                    members.speechLanguage[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "speech-language@wrdsb.ca"
                    };
                }
                if (systemLeadersJobCodes.includes(jobCode)) {
                    members.systemLeaders[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'system-leaders@wrdsb.ca'
                    };
                }
                if (thrMessageBoardJobCodes.includes(jobCode)) {
                    members.thrMessageBoard[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "thr-message-board@wrdsb.ca"
                    };
                }
                if (tweaJobCodes.includes(jobCode)) {
                    members.twea[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "twea@wrdsb.ca"
                    };
                }
                if (wciHealthSafetyLocationCodes.includes(locationCode)) {
                    members.wciHealthSafety[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       'wci-health-safety@wrdsb.ca'
                    };
                }
                if (wrdsbManagersJobCodes.includes(jobCode)) {
                    members.wrdsbManagers[email] = {
                        email:          email,
                        role:           "MEMBER",
                        status:         "ACTIVE",
                        type:           "USER",
                        groupKey:       "wrdsb-managers@wrdsb.ca"
                    };
                }
            }
        });
        return members;
    }
}

export default GroupMembershipsOneOffsCalculate;