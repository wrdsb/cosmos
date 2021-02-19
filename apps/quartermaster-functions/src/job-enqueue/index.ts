import { AzureFunction, Context } from "@azure/functions"
import { DeviceLoanSubmissionStoreFunctionRequest } from "@cosmos/types";

const jobEnqueue: AzureFunction = async function (context: Context, triggerMessage): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const jobType = triggerMessage.jobType;
    const operation = triggerMessage.operation;
    const payload = triggerMessage.payload;

    if (jobType) {
        switch (jobType) {
            case "Quartermaster.DeviceLoanSubmission.Store":
                context.bindings.deviceLoanSubmissionStore = {
                    operation: operation,
                    payload: payload
                } as DeviceLoanSubmissionStoreFunctionRequest;

                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.DeviceLoanSubmission.Store job."
                });

                break;

            case "Quartermaster.View.ATSAsset.Process":
                context.bindings.viewATSAssetProcessTrigger = createViewATSAssetProcessJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.View.ATSAsset.Process job."
                });

                break;

            case "Quartermaster.View.ATSAssetClass.Process":
                context.bindings.viewATSAssetClassProcessTrigger = createViewATSAssetClassProcessJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.View.ATSAssetClass.Process job."
                });

                break;

            case "Quartermaster.View.ATSAssetType.Process":
                context.bindings.viewATSAssetTypeProcessTrigger = createViewATSAssetTypeProcessJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.View.ATSAssetType.Process job."
                });

                break;

            case "Quartermaster.View.ATSAssetClassType.Process":
                context.bindings.viewATSAssetClassTypeProcessTrigger = createViewATSAssetClassTypeProcessJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.View.ATSAssetClassType.Process job."
                });

                break;

            case "Quartermaster.View.ATSAsset.Extract.Asset":
                context.bindings.viewATSAssetExtractAssetsTrigger = createViewATSAssetExtractAssetJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.View.ATSAsset.Extract.Asset job."
                });

                break;

            case "Quartermaster.View.ATSAssetClass.Extract.AssetClass":
                context.bindings.viewATSAssetClassExtractAssetClassesTrigger = createViewATSAssetClassExtractAssetClassJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.View.ATSAssetClass.Extract.AssetClass job."
                });

                break;

            case "Quartermaster.View.ATSAssetType.Extract.AssetType":
                context.bindings.viewATSAssetTypeExtractAssetTypesTrigger = createViewATSAssetTypeExtractAssetTypeJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Quartermaster.View.ATSAssetType.Extract.AssetType job."
                });

                break;

            case "Quartermaster.View.ATSAssetClassType.Extract.AssetClassType":
                context.bindings.viewATSAssetClassTypeExtractAssetClassTypesTrigger = createViewATSAssetClassTypeExtractAssetClassTypeJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.View.ATSAssetClassType.Extract.AssetClassType job."
                });

                break;

            case "Quartermaster.ATS.Assets.Reconcile":
                context.bindings.atsAssetsReconcileTrigger = createQuartermasterATSAssetsReconcileJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.ATS.Assets.Reconcile job."
                });

                break;

            case "Quartermaster.ATS.AssetClasses.Reconcile":
                context.bindings.atsAssetClassesReconcileTrigger = createQuartermasterATSAssetClassesReconcileJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.ATS.AssetClasses.Reconcile job."
                });

                break;

            case "Quartermaster.ATS.AssetTypes.Reconcile":
                context.bindings.atsAssetTypesReconcileTrigger = createQuartermasterATSAssetTypesReconcileJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.ATS.AssetTypes.Reconcile job."
                });

                break;

            case "Quartermaster.ATS.AssetClassTypes.Reconcile":
                context.bindings.atsAssetClassTypesReconcileTrigger = createQuartermasterATSAssetClassTypesReconcileJob();
                
                context.bindings.invocationPostProcessor = JSON.stringify({
                    status: 202,
                    body: "Accepted. Queued Quartermaster.ATS.AssetClassTypes.Reconcile job."
                });

                break;

            default:
                context.bindings.callbackMessage = JSON.stringify({
                    status: 422,
                    body: "Unprocessable Entity. Cannot find the specified jobType."
                });

                break;
        }
    }
    else {
        context.bindings.callbackMessage = JSON.stringify({
            status: 400,
            body: "Please pass a valid jobType in the request body."
        });
    }

    function createSkinnerViewSkinnerAssignmentsProcessJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetProcessJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetClassProcessJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetTypeProcessJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetClassTypeProcessJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetExtractAssetJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetClassExtractAssetClassJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetTypeExtractAssetTypeJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createViewATSAssetClassTypeExtractAssetClassTypeJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createQuartermasterATSAssetsReconcileJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createQuartermasterATSAssetClassesReconcileJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createQuartermasterATSAssetTypesReconcileJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }

    function createQuartermasterATSAssetClassTypesReconcileJob(): string {
        let triggerMessage = {};
        return JSON.stringify(triggerMessage);
    }
};

export default jobEnqueue;
