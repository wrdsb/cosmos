import { Component, OnInit } from '@angular/core';
import { AADGroup } from '@cosmos/types';

import { HagarService } from '@cosmos/angular-services/hagar-service';

@Component({
  selector: 'cosmos-groups-list-brief',
  templateUrl: './groups-list-brief.component.html',
  styleUrls: ['./groups-list-brief.component.scss']
})
export class GroupsListBriefComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'displayName'
  ];

  groups: AADGroup[];

  constructor(private hagarService: HagarService) {}

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.hagarService.listGroups().subscribe(groups => (this.groups = groups));
  }
}
