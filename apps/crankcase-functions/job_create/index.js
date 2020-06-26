module.exports = function (context) {
    var timestamp = (new Date()).toJSON();
    var job_request = context.bindings.queueMessage;

    var async = require('async');
    var azure = require('azure-storage');

    var tableService = azure.createTableService();
    var queueService = azure.createQueueService();

    // TODO: Better handling of malformed requests

    // Validate request object
    if (!job_request.service) {
        context.done('service is required');
        return;
    }
    if (!job_request.operation) {
        context.done('operation is required');
        return;
    }
    if (!job_request.payload) {
        context.done('payload is required');
        return;
    }

    // Create Job object ...
    var job = {
        job_number: context.executionContext.invocationId,
        job_type: job_request.service + ':' + job_request.operation,
        status: "created",
        service: job_request.service,
        operation: job_request.operation,
        payload: JSON.stringify(job_request.payload),
        total_attempts: 0,
        max_attempts: 0,
        first_attempt_at: null,
        last_attempt_at: null,
        next_attempt_at: null,
        created_at: timestamp,
        updated_at: timestamp
    };

    // ... add table keys ...
    job.PartitionKey = job.job_number;
    job.RowKey = 'job';

    // ... add callback property, if provided ...
    if (job_request.callback) {
        job.callback = job_request.callback;
    } else {
        job.callback = null;
    }

    // ...and log that sucker.
    context.log(job);


    // Use a waterfall to avoid async I/O issues
    async.waterfall([

        // Kickoff waterfall
        function(callback) {
            callback(null, job);
        },

        // Write job to table storage to track progress
        function(job, callback) {
            tableService.insertEntity('activeJobs', job, function(error, result, response) {
                if (error) {
                    callback(error);
                } else {
                    callback(null, job);
                }
            });
        },

        // Add queue message to trigger job dispatcher
        function(job, callback) {
            // Base64 encode message to keep queue happy
            var queue_message = Buffer.from(job.job_number).toString('base64');
            queueService.createMessage('jobs', queue_message, function(error) {
                if (error) {
                    callback(error);
                } else {
                    callback(null, job);
                }
            });
        }
    ],  
        // Close waterfall, and function, by returning error or job object
        function (err, job) {
            if (err) {
                context.done(err);
            } else {
                context.done(null, job);
            }
        }
    );
};
