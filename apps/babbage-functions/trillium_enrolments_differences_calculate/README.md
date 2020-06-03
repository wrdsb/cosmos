# Trillium Enrolments Differences Calculate
Calculates differences in enrolment extracts from Trillium.

{
    created_records[enrolment_id] = {
        trillium_enrolment_record
    },
    updated_records[enrolment_id] = {
        previous: {
            trillium_enrolment_record
        },
        now: {
            trillium_enrolment_record
        }
    },
    deleted_records[enrolment_id] = {
        trillium_enrolment_record
    }
}