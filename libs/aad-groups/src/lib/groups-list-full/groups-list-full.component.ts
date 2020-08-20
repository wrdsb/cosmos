import { Component, OnInit } from '@angular/core';
import { AADGroup } from '@cosmos/types';
import { HagarService } from '@cosmos/hagar-service';

@Component({
  selector: 'cosmos-groups-list-full',
  templateUrl: './groups-list-full.component.html',
  styleUrls: ['./groups-list-full.component.scss']
})
export class GroupsListFullComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'displayName',
    'description',
    //'createdDateTime',
    //'deletedDateTime',
    //'visibility',
    //'onPremisesLastSyncDateTime',
    //'onPremisesSamAccountName',
    //'onPremisesSyncEnabled',
    //'securityEnabled',
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
