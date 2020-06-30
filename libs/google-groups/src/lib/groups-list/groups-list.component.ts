import { Component, OnInit } from '@angular/core';

import { IGORGroup } from "@cosmos/types";
import { GoogleGroupsService } from '../google-groups.service';

@Component({
  selector: 'cosmos-google-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  private groups: IGORGroup[] = [];
  private selectedGroup: IGORGroup;

  constructor(private groupsService: GoogleGroupsService) { }

  ngOnInit() {
    this.getGroups();
  }

  onSelect(group: IGORGroup): void {
    this.selectedGroup = group;
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }
}
