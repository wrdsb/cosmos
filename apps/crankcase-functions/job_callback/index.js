module.exports = function (context, data) {
    var timestamp = (new Date()).toJSON();
    var queue_message = context.bindings.queueMessage;
    var job =  context.bindings.originalJob;

    var async = require('async');
    var request = require('request');
    var azure = require('azure-storage');

    var tableService = azure.createTableService();

    context.log(queue_message);
    context.log(job);
 
    async.waterfall([
        function(callback) {
            callback(null, job);
        },
        // Notification via HTTP callback
        function(job, callback) {
            if (job.callback) {
                var request_options = {
                    method: 'POST',
                    url: job.callback,
                    headers: {
                        'Content-Type':'application/json',
                        'Accept':'application/json',
                        'User-Agent': 'wrdsb-crankcase'
                    },
                    json: job
                };
                // TODO: Retry logic. Sigh.
                request.post(request_options, function (error, response, body) {
                    if (error) {
                        context.log('error:', error);
                        context.log('statusCode:', response && response.statusCode);
                        context.log('body:', body);
                        callback(null, job);
                    } else {
                        context.log('error:', error);
                        context.log('statusCode:', response && response.statusCode);
                        context.log('body:', body);
                        callback(null, job);
                    }
                });
            } else {
                callback(null, job);
            }
        },
        // Delete job from activeJobs table
        function(job, callback) {
            var job_to_delete = {
                PartitionKey: job.PartitionKey,
                RowKey: job.RowKey
            };
            var tableService = azure.createTableService();
            tableService.deleteEntity('activeJobs', job_to_delete, function(error, result, response) {
                if (error) {
                    callback(error);
                } else {
                    callback(null, job);
                }
            });
        },
        // Queue garbage collection of pastJobs job
        function(job, callback) {
            garbage_collection_message = Buffer.from(job.job_number).toString('base64');
            var options = {};
            options.visibilityTimeout =  600000; // offset from current time, in seconds. 6.94 days.
            var queueService = azure.createQueueService();
            queueService.createMessage('garbage-collection', garbage_collection_message, options, function(error) {
                if (error) {
                    callback(error);
                } else {
                    context.log('create queue entry');
                    callback(null, job);
                }
            });
        }
    ], function (err, job) {
        if (err) {
            context.done(err);
        } else {
            // Send job to pastJobs short term storage table
            context.bindings.pastJobs = job;
            // Feed job event back into Flynn Grid
            //context.bindings.flynnGrid
            context.done(null, job);
        }
    });
};
