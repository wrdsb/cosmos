import { Component, OnInit } from '@angular/core';

import { IGORGroup } from "@cosmos/types";
import { GoogleGroupsService } from '../google-groups.service';

@Component({
  selector: 'cosmos-google-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'description',
    'adminCreated',
    'membership_automation_active',
    //'owners',
    //'managers'
  ];

  groups: IGORGroup[];
  selectedGroup: IGORGroup;

  constructor(private groupsService: GoogleGroupsService) { }

  ngOnInit() {
    this.getGroups();
  }

  onSelect(group: IGORGroup): void {
    this.selectedGroup = group;
  }

  getGroups(): void {
    this.groupsService.listGroups('admin_created')
      .subscribe(groups => this.groups = groups);
  }
}
