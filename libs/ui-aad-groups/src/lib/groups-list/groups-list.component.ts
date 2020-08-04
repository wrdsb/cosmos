import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cosmos-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  public groups = [];

  constructor() { }

  ngOnInit(): void {
  }

}
