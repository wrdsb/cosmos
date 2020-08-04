import { Component, OnInit } from '@angular/core';
import { AADGroup } from "@cosmos/types"

import { HagarServiceService } from "@cosmos/hagar-service";

@Component({
  selector: 'cosmos-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  groups: AADGroup[];

  constructor(
    private hagarService: HagarServiceService
  ) {}

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.hagarService.getGroups()
      .subscribe(groups => this.groups = groups);
  }
}
