import { Component, OnInit } from '@angular/core';
import { AADGroup } from "@cosmos/types"

import { HagarService } from "@cosmos/angular-services/hagar-service";

@Component({
  selector: 'cosmos-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  groups: AADGroup[];

  constructor(
    private hagarService: HagarService
  ) {}

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.hagarService.listGroups()
      .subscribe(groups => this.groups = groups);
  }
}
