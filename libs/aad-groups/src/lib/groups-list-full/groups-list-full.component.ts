import { Component, OnInit } from '@angular/core';
import { AADGroup } from "@cosmos/types"

import { HagarServiceService } from "@cosmos/hagar-service";


@Component({
  selector: 'cosmos-groups-list-full',
  templateUrl: './groups-list-full.component.html',
  styleUrls: ['./groups-list-full.component.scss']
})
export class GroupsListFullComponent implements OnInit {
  displayedColumns: string[] = ['displayName'];
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
