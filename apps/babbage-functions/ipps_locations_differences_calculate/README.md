# IPPS Locations Differences Calculate
Calculates differences in locations extracts from IPPS.

{
    created_records[location_code] = {
        ipps_location_record
    },
    updated_records[location_code] = {
        previous: {
            ipps_location_record
        },
        now: {
            ipps_location_record
        }
    },
    deleted_records[location_code] = {
        ipps_location_record
    }
}