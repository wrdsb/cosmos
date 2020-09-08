import { AzureFunction, Context } from "@azure/functions"

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const jobType = triggerMessage.job_type;
    const alpha = triggerMessage.alpha;

    if (jobType) {
        switch (jobType) {
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
                
            case "Skinner.View.SkinnerStaff.Process":
                context.bindings.viewSkinnerStaffProcessTrigger = createSkinnerViewSkinnerStaffProcessJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.View.SkinnerStaff.Process job."
                });

                break;

            case "Skinner.Assignment.Differences.Reconcile":
                context.bindings.sisAssignmentsReconcileTrigger = createSkinnerAssignmentsDifferencesReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Assignment.Differences.Reconcile job."
                });

                break;
    
            case "Skinner.Class.Differences.Reconcile":
                context.bindings.sisClassesReconcileTrigger = createSkinnerClassDifferencesReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Class.Differences.Reconcile job."
                });

                break;
    
            case "Skinner.Enrolment.Differences.Reconcile.Alpha":
                context.bindings.sisEnrolmentsReconcileTrigger = createSkinnerEnrolmentDifferencesReconcileAlphaJob(alpha);

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Enrolment.Differences.Reconcile.Alpha job."
                });

                break;

            case "Skinner.Enrolment.Differences.Reconcile.All":
                context.bindings.sisEnrolmentsReconcileTrigger = createSkinnerEnrolmentDifferencesReconcileAllJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Enrolment.Differences.Reconcile.All job."
                });

                break;

            case "Skinner.Staff.Differences.Reconcile":
                context.bindings.sisStaffReconcileTrigger = createSkinnerStaffDifferencesReconcileJob();

                context.bindings.callbackMessage = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Skinner.Staff.Differences.Reconcile.All job."
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

    function createSkinnerViewGClassroomProcessJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractClassesJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractEnrolmentsJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractStudentsJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewGClassroomExtractTeachersJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerViewSkinnerStaffProcessJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerAssignmentsDifferencesReconcileJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerClassDifferencesReconcileJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerEnrolmentDifferencesReconcileAlphaJob(alpha: string): string
    {
        let triggerMessage = {
            alpha: alpha
        };

        return JSON.stringify(triggerMessage);
    }

    function createSkinnerEnrolmentDifferencesReconcileAllJob(): string
    {
        let triggerMessages = [];

        for (let i = 0; i < 26; i++) {
            let triggerMessage = {
                alpha: (i+10).toString(36)
            };

            triggerMessages.push(triggerMessage);
        }

        return JSON.stringify(triggerMessages);
    }

    function createSkinnerStaffDifferencesReconcileJob(): string
    {
        let triggerMessage = {};

        return JSON.stringify(triggerMessage);
    }
};

export default jobEnqueue;
