# Job Create
Creates jobs from inbound HTTP requests.

## Request
data.service
data.operation
data.request

### Optional
data.callback

## Response


## Job
{ job_number: '93c41524-4ec1-4c84-b691-b12f6d58f6ca',
  job_type: 'wrdsb-igor:group_read',
  status: 'created',
  service: 'wrdsb-igor',
  operation: 'group_read',
  payload: { group: 'something@wrdsb.ca' },
  total_attempts: 0,
  max_attempts: 0,
  first_attempt_at: null,
  last_attempt_at: null,
  next_attempt_at: null,
  created_at: '2018-04-09T17:18:08.372Z',
  updated_at: '2018-04-09T17:18:08.372Z',
  PartitionKey: '93c41524-4ec1-4c84-b691-b12f6d58f6ca',
  RowKey: 'job',
  callback: null }