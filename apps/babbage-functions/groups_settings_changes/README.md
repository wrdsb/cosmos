# Groups Settings Changes
Calculates changes in settings for a group.

## Request
Accepts a POST request with the following body:

    {
        "group": "group-address@wrdsb.ca"
    }

The suffix '.json' will be applied to the group name, and the resulting
string must match the name of a group settings file in the groups-settings/
container in Codex.

## Response
This function returns a JSON object with the following schema:

    {
        "setting_name": {
            "changed": {
                "from": string
                "to": string
            },
            "unchanged": false
        },
        "setting_name": {
            "changed": null,
            "unchanged": true
        }
    }

* Each setting will always be present as an attribute of the response object.
* Each setting will itself always be an object with the attributes "changed" and "unchanged".
* "changed" will hold either the previous and current values of the setting, or null.
* "unchanged" will be a boolean which can be used to test whether or not the setting was changed.
