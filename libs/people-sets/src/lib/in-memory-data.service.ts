import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PeopleSetDefinition } from '@cosmos/types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const definitions = [
      {
        "created_at": "2020-03-06T00:00:00.000Z",
        "updated_at": "2020-03-06T00:00:00.000Z",
        "deleted_at": "",
        "deleted": false,
        "id": "planning-website-editors",
        "atomic": false,
        "type": "manual",
        "name": "Planning Website Editors",
        "short_name": "Planning Editors",
        "aliases": [],
        "categories": [
          "website-editors"
        ],
        "tags": [
          "websites",
          "roles",
          "editors"
        ],
        "definition": [
          [
            "emily_bumbaco@wrdsb.ca",
            "sarah_galliher@wrdsb.ca",
            "carrie_hamilton@wrdsb.ca",
            "andrea_kean@wrdsb.ca",
            "lauren_agar@wrdsb.ca",
            "shelby_fried@wrdsb.ca"
          ]
        ],
        "constituent_sets": [
          "emily_bumbaco@wrdsb.ca",
          "sarah_galliher@wrdsb.ca",
          "carrie_hamilton@wrdsb.ca",
          "andrea_kean@wrdsb.ca",
          "lauren_agar@wrdsb.ca",
          "shelby_fried@wrdsb.ca"
        ]
      },
      {
        "created_at": "2020-02-13T13:59:22.967Z",
        "updated_at": "2020-02-13T13:59:22.967Z",
        "deleted_at": "",
        "deleted": false,
        "id": "JC-8128EL",
        "atomic": true,
        "type": "ipps-job",
        "name": "LTO - Elem EL",
        "short_name": "LTO - Elem EL",
        "aliases": [],
        "categories": [
          "IPPS",
          "ipps-jobs",
          "job-codes"
        ],
        "tags": [],
        "constituent_sets": [
          "JC-8128EL"
        ]
      },
      {
        "created_at": "2020-02-03T18:44:15.171Z",
        "updated_at": "2020-02-13T13:56:21.833Z",
        "deleted_at": "",
        "deleted": false,
        "id": "GC-PRINSUPE",
        "atomic": true,
        "type": "ipps-group",
        "name": "Principal/VP Supply Secondary",
        "short_name": "Principal/VP Supply Secondary",
        "aliases": [
          "OCC-ADMIN"
        ],
        "categories": [
          "IPPS",
          "ipps-groups",
          "group-codes"
        ],
        "tags": [],
        "constituent_sets": [
          "GC-PRINSUPE"
        ]
      },
      {
        "created_at": "2020-02-03T15:14:12.369Z",
        "updated_at": "2020-02-13T14:00:28.712Z",
        "deleted_at": "",
        "deleted": false,
        "id": "elementary-head-secretaries-job-codes",
        "atomic": false,
        "type": "igor-legacy",
        "name": "elementary-head-secretaries-job-codes",
        "short_name": "elementary-head-secretaries-job-codes",
        "aliases": [],
        "categories": [],
        "tags": [],
        "definition": [
          [
            "JC-1533",
            "JC-1500"
          ]
        ],
        "constituent_sets": [
          "JC-1533",
          "JC-1500"
        ]
      },
      {
        "created_at": "2020-02-03T15:14:12.369Z",
        "updated_at": "2020-02-13T14:00:28.712Z",
        "deleted_at": "",
        "deleted": false,
        "id": "elementary-c-secretaries-job-codes",
        "atomic": false,
        "type": "igor-legacy",
        "name": "elementary-c-secretaries-job-codes",
        "short_name": "elementary-c-secretaries-job-codes",
        "aliases": [],
        "categories": [],
        "tags": [],
        "definition": [
          [
            "JC-1340",
            "JC-6123LTHR"
          ]
        ],
        "constituent_sets": [
          "JC-1340",
          "JC-6123LTHR"
        ]
      }
    ];
    return { definitions };
  }
}