import { AzureFunction, Context } from "@azure/functions";
import { FunctionInvocation } from "@cosmos/types";

const membershipsABCCalculate: AzureFunction = async function (context: Context, triggerMessage: any): Promise<void> {
    const functionInvocation = {
        functionInvocationID: context.executionContext.invocationId,
        functionInvocationTimestamp: new Date().toJSON(),
        functionApp: 'SortingHat',
        functionName: context.executionContext.functionName,
        functionDataType: 'ABCStaffMembership',
        functionDataOperation: 'Calculate',
        eventLabel: ''
    } as FunctionInvocation;

    const triggerObject = triggerMessage;
    const payload = triggerObject.payload;

    context.log(payload);

    const requestedSchoolCode = payload.schoolCode.toLowerCase();
    const rows = context.bindings.iamwpRaw;

    const excludedJobCodes = ['6106', '6118'];
    const activityCodes = ['ACTIVE', 'ONLEAVE'];

    const admin_job_codes = context.bindings.abcAdminJobCodes.definition[0];
    const attendance_job_codes = context.bindings.abcAttendanceJobCodes.definition[0];
    const beforeafter_job_codes = context.bindings.abcBeforeafterJobCodes.definition[0];
    const courier_job_codes = context.bindings.abcCourierJobCodes.definition[0];
    const easyconnect_job_codes = context.bindings.abcEasyconnectJobCodes.definition[0];
    const its_job_codes = context.bindings.abcItsJobCodes.definition[0];
    const itunes_job_codes = context.bindings.abcItunesJobCodes.definition[0];
    const office_job_codes = context.bindings.abcOfficeJobCodes.definition[0];
    const orders_job_codes = context.bindings.abcOrdersJobCodes.definition[0];
    const public_job_codes = context.bindings.abcPublicJobCodes.definition[0];
    const registrations_job_codes = context.bindings.abcRegistrationsJobCodes.definition[0];
    const s4s_job_codes = context.bindings.abcS4sJobCodes.definition[0];
    const stswr_job_codes = context.bindings.abcStwrJobCodes.definition[0];

    let calculatedMembers = await calculateMembers(rows);

    context.bindings.staffOutputBlob = calculatedMembers.staff;
    context.bindings.staffDiscussionOutputBlob = calculatedMembers.staffDiscussion;
    context.bindings.adminOutputBlob = calculatedMembers.admin;
    context.bindings.attendanceOutputBlob = calculatedMembers.attendance;
    context.bindings.beforeafterOutputBlob = calculatedMembers.beforeafter;
    context.bindings.courierOutputBlob = calculatedMembers.courier;
    context.bindings.easyconnectOutputBlob = calculatedMembers.easyconnect;
    context.bindings.itsOutputBlob = calculatedMembers.its;
    context.bindings.itunesOutputBlob = calculatedMembers.itunes;
    context.bindings.officeOutputBlob = calculatedMembers.office;
    context.bindings.ordersOutputBlob = calculatedMembers.orders;
    context.bindings.publicOutputBlob = calculatedMembers.public;
    context.bindings.registrationsOutputBlob = calculatedMembers.registrations;
    context.bindings.s4sOutputBlob = calculatedMembers.s4s;
    context.bindings.stswrOutputBlob = calculatedMembers.stswr;
  
    const memberCounts = {
        staff: Object.getOwnPropertyNames(calculatedMembers.staff).length,
        staffDiscussion: Object.getOwnPropertyNames(calculatedMembers.staffDiscussion).length,
        admin: Object.getOwnPropertyNames(calculatedMembers.admin).length,
        attendance: Object.getOwnPropertyNames(calculatedMembers.attendance).length,
        beforeafter: Object.getOwnPropertyNames(calculatedMembers.beforeafter).length,
        courier: Object.getOwnPropertyNames(calculatedMembers.courier).length,
        easyconnect: Object.getOwnPropertyNames(calculatedMembers.easyconnect).length,
        its: Object.getOwnPropertyNames(calculatedMembers.its).length,
        itunes: Object.getOwnPropertyNames(calculatedMembers.itunes).length,
        office: Object.getOwnPropertyNames(calculatedMembers.office).length,
        orders: Object.getOwnPropertyNames(calculatedMembers.orders).length,
        public: Object.getOwnPropertyNames(calculatedMembers.public).length,
        registrations: Object.getOwnPropertyNames(calculatedMembers.registrations).length,
        s4s: Object.getOwnPropertyNames(calculatedMembers.s4s).length,
        stswr: Object.getOwnPropertyNames(calculatedMembers.stswr).length,
    }

    const logPayload = {
        memberCounts: memberCounts
    };
    functionInvocation.logPayload = logPayload;
    context.log(logPayload);

    context.log(functionInvocation);
    context.done(null, functionInvocation);


    async function calculateMembers(rows) {
        let members = {
            staff: {},
            staffDiscussion: {},
            admin: {},
            attendance: {},
            beforeafter: {},
            courier: {},
            easyconnect: {},
            its: {},
            itunes: {},
            office: {},
            orders: {},
            public: {},
            registrations: {},
            s4s: {},
            stswr: {}
        }
    
        rows.forEach(function(row) {
            let ein = (row.EMPLOYEE_ID) ? row.EMPLOYEE_ID : null;
            let email = (row.EMAIL_ADDRESS) ? row.EMAIL_ADDRESS : null;
            let username = (row.USERNAME) ? row.USERNAME : null;
            let jobCode = (row.JOB_CODE) ? 'JC-' + row.JOB_CODE : null;
            let groupCode = (row.EMP_GROUP_CODE) ? 'GC-' + row.EMP_GROUP_CODE : null;
            let locationCode = (row.LOCATION_CODE) ? 'LC-' + row.LOCATION_CODE : null;
            let schoolCode = (row.SCHOOL_CODE) ? 'SC-' + row.SCHOOL_CODE.toUpperCase() : null;
            let panel = (row.PANEL) ? row.PANEL : null;
            let activityCode = (row.ACTIVITY_CODE ) ? row.ACTIVITY_CODE : null;

            if (row.EMAIL_ADDRESS
                && !excludedJobCodes.includes(jobCode)
                && activityCodes.includes(activityCode)
                && requestedSchoolCode == schoolCode
            ) {
                let person = {
                    ein: ein,
                    email: email,
                    username: username
                };

                members.staff[email] = person;
                members.staffDiscussion[email] = person;

                if (admin_job_codes.includes(jobCode)) {
                    members.admin[email] = person;
                }

                if (attendance_job_codes.includes(jobCode)) {
                    members.attendance[email] = person;
                }
            
                if (beforeafter_job_codes.includes(jobCode)) {
                    members.beforeafter[email] = person;
                }
            
                if (courier_job_codes.includes(jobCode)) {
                    members.courier[email] = person;
                }
            
                if (easyconnect_job_codes.includes(jobCode)) {
                    members.easyconnect[email] = person;
                }
            
                if (its_job_codes.includes(jobCode)) {
                    members.its[email] = person;
                }
            
                if (itunes_job_codes.includes(jobCode)) {
                    members.itunes[email] = person;
                }

                if (office_job_codes.includes(jobCode)) {
                    members.office[email] = person;
                }
            
                if (orders_job_codes.includes(jobCode)) {
                    members.orders[email] = person;
                }
            
                if (public_job_codes.includes(jobCode)) {
                    members.public[email] = person;
                }

                if (registrations_job_codes.includes(jobCode)) {
                    members.registrations[email] = person;
                }

                if (s4s_job_codes.includes(jobCode)) {
                    members.s4s[email] = person;
                }

                if (stswr_job_codes.includes(jobCode)) {
                    members.stswr[email] = person;
                }
            }
        });
        return members;
    }
};

export default membershipsABCCalculate;
