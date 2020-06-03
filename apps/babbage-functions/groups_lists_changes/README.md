# Groups Lists Changes
Calculates changes in a list of groups.

## Request
Accepts a POST request with the following body:

    {
        "list": "name_of_list"
    }

The suffix '-object.json' will be applied to the list name, and the resulting
string must match the name of a groups list file in the groups-lists/
container in Codex.

## Response
This function returns a JSON object with the following schema:

    {
        "created_groups": {
            "group-name@wrdsb.ca": {
                "kind": "admin#directory#group",
                "id": string,
                "etag": etag,
                "email": string,
                "name": string,
                "directMembersCount": long,
                "description": string,
                "adminCreated": boolean,
                "aliases": [
                    string
                ],
                "nonEditableAliases": [
                    string
                ]
            },
            "group-name@wrdsb.ca": {
                "kind": "admin#directory#group",
                "id": string,
                "etag": etag,
                "email": string,
                "name": string,
                "directMembersCount": long,
                "description": string,
                "adminCreated": boolean,
                "aliases": [
                    string
                ],
                "nonEditableAliases": [
                    string
                ]
            }
        }
        "deleted_groups": {
            "group-name@wrdsb.ca": {
                "kind": "admin#directory#group",
                "id": string,
                "etag": etag,
                "email": string,
                "name": string,
                "directMembersCount": long,
                "description": string,
                "adminCreated": boolean,
                "aliases": [
                    string
                ],
                "nonEditableAliases": [
                    string
                ]
            },
            "group-name@wrdsb.ca": {
                "kind": "admin#directory#group",
                "id": string,
                "etag": etag,
                "email": string,
                "name": string,
                "directMembersCount": long,
                "description": string,
                "adminCreated": boolean,
                "aliases": [
                    string
                ],
                "nonEditableAliases": [
                    string
                ]
            }
        }
    }

The response object will always have both a created_groups attribute and a
deleted_groups attribute, each of which always holds an object.

In cases where there are no created or deleted groups to return,
the corresponding object will be empty (ie it will have no attributes).
