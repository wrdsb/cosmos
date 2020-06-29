import { Component, OnInit } from '@angular/core';
import { GoogleGroup } from "../google-group.model";
import { GoogleGroupsService } from '../google-groups.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  private groups: GoogleGroup[] = [];
  private selectedGroup: GoogleGroup;

  constructor(private groupsService: GoogleGroupsService) { }

  ngOnInit() {
    this.getGroups();
  }

  onSelect(group: GoogleGroup): void {
    this.selectedGroup = group;
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

}
