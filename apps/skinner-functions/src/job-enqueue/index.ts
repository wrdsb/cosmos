import { AzureFunction, Context } from "@azure/functions"

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const jobType = triggerMessage.job_type;
    const alpha = triggerMessage.alpha;

    if (jobType) {
        switch (jobType) {
            case "Skinner.View.SkinnerAssignments.Process":
                context.bindings.viewSkinnerAssignmentsProcessTrigger = createSkinnerViewSkinnerAssignmentsProcessJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.SkinnerAssignments.Process job."
                });

                break;

            case "Skinner.View.SkinnerAssignments.Extract.Assignments":
                context.bindings.viewSkinnerAssignmentsExtractAssignmentsTrigger = createSkinnerViewSkinnerAssignmentsExtractAssignmentsJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.SkinnerAssignments.Extract.Assignments job."
                });

                break;

            case "Skinner.View.SkinnerStaff.Process":
                context.bindings.viewSkinnerStaffProcessTrigger = createSkinnerViewSkinnerStaffProcessJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.SkinnerStaff.Process job."
                });

                break;

            case "Skinner.View.SkinnerStaff.Extract.Staff":
                context.bindings.viewSkinnerStaffExtractStaffTrigger = createSkinnerViewSkinnerStaffExtractStaffJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.SkinnerStaff.Extract.Staff job."
                });

                break;

            case "Skinner.View.GClassroom.Process":
                context.bindings.viewGClassroomProcessTrigger = createSkinnerViewGClassroomProcessJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.GClassroom.Process job."
                });

                break;

            case "Skinner.View.GClassroom.Extract.Classes":
                context.bindings.viewGClassroomExtractClassesTrigger = createSkinnerViewGClassroomExtractClassesJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.GClassroom.Extract.Classes job."
                });

                break;
    
            case "Skinner.View.GClassroom.Extract.Enrolments":
                context.bindings.viewGClassroomExtractEnrolmentsTrigger = createSkinnerViewGClassroomExtractEnrolmentsJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.GClassroom.Extract.Enrolments job."
                });

                break;

            case "Skinner.View.GClassroom.Extract.Schools":
                context.bindings.viewGClassroomExtractSchoolsTrigger = createSkinnerViewGClassroomExtractSchoolsJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.GClassroom.Extract.Schools job."
                });

                break;
    
            case "Skinner.View.GClassroom.Extract.Students":
                context.bindings.viewGClassroomExtractStudentsTrigger = createSkinnerViewGClassroomExtractStudentsJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.GClassroom.Extract.Students job."
                });

                break;
            
            case "Skinner.View.GClassroom.Extract.Teachers":
                context.bindings.viewGClassroomExtractTeachersTrigger = createSkinnerViewGClassroomExtractTeachersJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.GClassroom.Extract.Teachers job."
                });

                break;
                
            case "Skinner.Trillium.Assignments.Reconcile":
                context.bindings.trilliumAssignmentsReconcileTrigger = createSkinnerTrilliumAssignmentsReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Assignments.Reconcile job."
                });

                break;
    
            case "Skinner.Trillium.Classes.Reconcile":
                context.bindings.trilliumClassesReconcileTrigger = createSkinnerTrilliumClassesReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Classes.Reconcile job."
                });

                break;
    
            case "Skinner.Trillium.Enrolments.Reconcile.Alpha":
                context.bindings.trilliumEnrolmentsReconcileAlphaTrigger = createSkinnerTrilliumEnrolmentsReconcileAlphaJob(alpha);

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Enrolments.Reconcile.Alpha job."
                });

                break;

            case "Skinner.Trillium.Enrolments.Reconcile.All":
                context.bindings.trilliumEnrolmentsReconcileAllTrigger = createSkinnerTrilliumEnrolmentsReconcileAllJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Enrolments.Reconcile.All job."
                });

                break;

            case "Skinner.Trillium.Schools.Reconcile":
                context.bindings.trilliumSchoolsReconcileTrigger = createSkinnerTrilliumSchoolsReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Schools.Reconcile job."
                });

                break;
    
            case "Skinner.Trillium.Staff.Reconcile":
                context.bindings.trilliumStaffReconcileTrigger = createSkinnerTrilliumStaffReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Staff.Reconcile job."
                });

                break;

            case "Skinner.Trillium.Students.Reconcile":
                context.bindings.trilliumStudentsReconcileTrigger = createSkinnerTrilliumStudentsReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Students.Reconcile job."
                });

                break;

            case "Skinner.Trillium.Teachers.Reconcile":
                context.bindings.trilliumTeachersReconcileTrigger = createSkinnerTrilliumTeachersReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Trillium.Teachers.Reconcile job."
                });

                break;

            default:
                context.bindings.callbackMessage = JSON.stringify({
                    status: 422,
                    body: "Unprocessable Entity. Cannot find the specified job_type."
                });

                break;
        }
    }
    else {
        context.bindings.callbackMessage = JSON.stringify({
            status: 400,
            body: "Please pass a valid job_type in the request body."
        });
    }

    function createSkinnerViewSkinnerAssignmentsProcessJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewSkinnerAssignmentsExtractAssignmentsJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewSkinnerStaffProcessJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewSkinnerStaffExtractStaffJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomProcessJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractClassesJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractEnrolmentsJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractSchoolsJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractStudentsJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractTeachersJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumAssignmentsReconcileJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumClassesReconcileJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumEnrolmentsReconcileAlphaJob(alpha: string): string {
        let triggerMessage = {
            payload: {
                alpha: alpha
            }
        };

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumEnrolmentsReconcileAllJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumSchoolsReconcileJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumStaffReconcileJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumStudentsReconcileJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerTrilliumTeachersReconcileJob(): string {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }
};

export default jobEnqueue;
