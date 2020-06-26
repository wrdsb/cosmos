module.exports = function (context) {
    var timestamp = (new Date()).toJSON();
    var queue_message = context.bindings.queueMessage;
    var job =  context.bindings.originalJob;

    var async = require('async');
    var request = require('request');
    var azure = require('azure-storage');

    var tableService = azure.createTableService();
    var queueService = azure.createQueueService();

    // TODO: job object validation

    // Parse job object for API service request URL
    var service = job.service;
    var operation = job.operation;
    var service_key = '';
    var payload = JSON.parse(job.payload); // Table storage provides a string

    // Assign key for API service
    switch (service) {
        case 'wrdsb-igor':
            service_key = process.env['igor_key'];
            break;    
        default:
            break;
    }

    // Prepare HTTP request options for calling API service
    var request_options = {
        method: 'POST',
        url: `https://${service}.azurewebsites.net/api/${operation}?code=${service_key}&clientId=crankcase`,
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'User-Agent': 'wrdsb-crankcase'
        },
        json: payload
    };

    // Use a waterfall to avoid async I/O issues
    async.waterfall([

        // Kickoff waterfall
        function(callback) {
            callback(null, job, request_options);
        },

        // Make our HTTP request to API service
        function(job, request_options, callback) {

            // Increment tracking fields in job object
            job.total_attempts = job.total_attempts + 1;
            job.updated_at = timestamp;
            if (!job.first_attempt_at) {job.first_attempt_at = timestamp;}
            job.last_attempt_at = timestamp;

            // Make the request
            request.post(request_options, function (error, response, body) {
                if (error) {
                    context.log('error:', error);
                } else {
                    context.log('statusCode:', response && response.statusCode);
                    context.log('body:', body);
                }
                // Pass along results for further handling, regardless of success/failure.
                var api_result = {error: error, response: response, body: body};
                callback(null, job, api_result);
            });
        },

        // Process results of HTTP request
        function(job, api_result, callback) {

            // HTTP request success? Mark job a success in table.
            if (api_result.response && api_result.response.statusCode == 200) {
                job.status = "successful";

            // If not success, determine consequences
            } else {

                // Are we out of retries? Mark job as failed.
                if (job.max_attempts != 0 && job.total_attempts >= job.max_attempts) { // Allow infinite retries by setting max to zero.
                    job.status = "failed";
                    job.next_attempt_at = null;

                // Retries remaining. Mark job as pending; requeue, with backoff.
                } else {
                    job.status = "pending";

                    // Determine backoff value
                    var next_attempt = new Date();
                    switch (total_attempts) {
                        case 1:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 1);
                            break;
                        case 2:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 2);
                            break;
                        case 3:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 5);
                            break;
                        case 4:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 10);
                            break;
                        case 5:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 15);
                            break;
                        case 6:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 20);
                            break;
                        case 7:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 30);
                            break;
                        case 8:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 45);
                            break;
                        default:
                            job.next_attempt_at = next_attempt.setMinutes(next_attempt.getMinutes() + 60);
                            break;
                    }
                }
            }
            // Pass along job object, with status et al updated.
            callback(null, job);
        },

        // Store our updated job in the activeJobs table
        function(job, callback) {
            tableService.replaceEntity('activeJobs', job, function(error, result, response) {
                if (error) {
                    callback(error);
                } else {
                    callback(null, job);
                }
            });
        },

        // Queue either job_callback (job successful or failed), or job_dispatch (job pending)
        function(job, callback) {

            // If job has run its course, queue it for job_callback
            if (job.status == "successful" || job.status == "failed") {
                var queue_message = Buffer.from(job.job_number).toString('base64');
                queueService.createMessage('callbacks', queue_message, function(error) {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null, job);
                    }
                });

            // If job still pending, requeue it for job_dispatch, with delay
            } else {
                var queue_message = Buffer.from(job.job_number).toString('base64');
                var options = {};
                var diff = Math.abs(job.next_attempt_at - new Date());
                options.visibilityTimeout =  diff / 1000; // offset from current time, in seconds
                context.log(options.visibilityTimeout);
                queueService.createMessage('jobs', queue_message, options, function(error) {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null, job);
                    }
                });
            }
        }
    ], 

        // Close waterfall, and function, by returning error or job object
        function (err, job) {
            if (err) {
                context.done(err);
            } else {
                context.log(job);
                context.done(null, job);
            }
        }
    );
};

    //context.log('queueTrigger = ', context.bindingData.queueTrigger);
    //context.log('expirationTime = ', context.bindingData.expirationTime);
    //context.log('insertionTime = ', context.bindingData.insertionTime);
    //context.log('nextVisibleTime = ', context.bindingData.nextVisibleTime);
    //context.log('id = ', context.bindingData.id);
    //context.log('popReceipt = ', context.bindingData.popReceipt);
    //context.log('dequeueCount = ', context.bindingData.dequeueCount);
    
    // if success: call callback

    // else failure: re-queue

