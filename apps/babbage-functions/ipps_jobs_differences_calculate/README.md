# IPPS Jobs Differences Calculate
Calculates differences in jobs extracts from IPPS.

{
    created_records[job_code] = {
        ipps_job_record
    },
    updated_records[job_code] = {
        previous: {
            ipps_job_record
        },
        now: {
            ipps_job_record
        }
    },
    deleted_records[job_code] = {
        ipps_job_record
    }
}