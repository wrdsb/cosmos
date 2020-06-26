# Job Dispatch
Makes outbound HTTP requests based on job queue items, and updates jobs table items based on results.

2018-04-09T11:53:23.132 [Info] Function started (Id=d3331ceb-dad6-4e53-939e-c354d36611c3)
2018-04-09T11:53:23.600 [Info] queueMessage =  c58719da-5a90-4a30-a065-d1d4fb8e519e
2018-04-09T11:53:23.600 [Info] queueTrigger =  c58719da-5a90-4a30-a065-d1d4fb8e519e
2018-04-09T11:53:23.600 [Info] expirationTime =  4/16/2018 11:53:22 AM +00:00
2018-04-09T11:53:23.600 [Info] insertionTime =  4/9/2018 11:53:22 AM +00:00
2018-04-09T11:53:23.600 [Info] nextVisibleTime =  4/9/2018 12:03:23 PM +00:00
2018-04-09T11:53:23.600 [Info] id =  584b6e1f-c66b-4f1a-951e-16d1a3d1dc27
2018-04-09T11:53:23.600 [Info] popReceipt =  AgAAAAMAAAAAAAAAvyE8wvrP0wE=
2018-04-09T11:53:23.600 [Info] dequeueCount =  1
2018-04-09T11:53:23.618 [Info] { job_number: 'c58719da-5a90-4a30-a065-d1d4fb8e519e',
  job_type: 'someService_someOpp',
  status: 'created',
  service: 'someService',
  operation: 'someOpp',
  request: 'somePayload',
  total_attempts: 0,
  max_attempts: 0,
  first_attempt_at: '',
  last_attempt_at: '',
  next_attempt_at: '',
  created_at: '4/9/2018 11:39:36 AM',
  updated_at: '4/9/2018 11:39:36 AM',
  callback: '',
  PartitionKey: 'c58719da-5a90-4a30-a065-d1d4fb8e519e',
  RowKey: 'job' }
2018-04-09T11:53:23.618 [Info] { invocationId: 'd3331ceb-dad6-4e53-939e-c354d36611c3',
  executionContext: 
   { invocationId: 'd3331ceb-dad6-4e53-939e-c354d36611c3',
     functionName: 'job_dispatch',
     functionDirectory: 'D:\\home\\site\\wwwroot\\job_dispatch' },
  bindings: 
   { queueMessage: 'c58719da-5a90-4a30-a065-d1d4fb8e519e',
     originalJob: 
      { job_number: 'c58719da-5a90-4a30-a065-d1d4fb8e519e',
        job_type: 'someService_someOpp',
        status: 'created',
        service: 'someService',
        operation: 'someOpp',
        request: 'somePayload',
        total_attempts: 0,
        max_attempts: 0,
        first_attempt_at: '',
        last_attempt_at: '',
        next_attempt_at: '',
        created_at: '4/9/2018 11:39:36 AM',
        updated_at: '4/9/2018 11:39:36 AM',
        callback: '',
        PartitionKey: 'c58719da-5a90-4a30-a065-d1d4fb8e519e',
        RowKey: 'job' } },
  log: 
   { [Function]
     error: [Function],
     warn: [Function],
     info: [Function],
     verbose: [Function],
     metric: [Function] },
  bindingData: 
   { queueTrigger: 'c58719da-5a90-4a30-a065-d1d4fb8e519e',
     dequeueCount: 1,
     expirationTime: '4/16/2018 11:53:22 AM +00:00',
     id: '584b6e1f-c66b-4f1a-951e-16d1a3d1dc27',
     insertionTime: '4/9/2018 11:53:22 AM +00:00',
     nextVisibleTime: '4/9/2018 12:03:23 PM +00:00',
     popReceipt: 'AgAAAAMAAAAAAAAAvyE8wvrP0wE=',
     sys: { methodName: 'job_dispatch', utcNow: 2018-04-09T11:53:23.180Z },
     invocationId: 'd3331ceb-dad6-4e53-939e-c354d36611c3' },
  done: [Function] }
2018-04-09T11:53:23.618 [Info] Function completed (Success, Id=d3331ceb-dad6-4e53-939e-c354d36611c3, Duration=480ms)
