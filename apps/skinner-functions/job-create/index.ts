import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const jobCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const execution_timestamp = (new Date()).toJSON();  // format: 2012-04-23T18:25:43.511Z

    const body = req.body;
    const jobType = body.job_type;
    const alpha = body.alpha;

    if (jobType) {
        let triggerMessage = {};

        if (alpha) {
            triggerMessage['alpha'] = alpha;
        }

        context.bindings.jobQueueMessage = JSON.stringify(triggerMessage);

        context.res = {
            status: 202,
            body: "Accepted. Job queued."
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a valid job_type in the request body."
        };
    }
};

export default jobCreate;
