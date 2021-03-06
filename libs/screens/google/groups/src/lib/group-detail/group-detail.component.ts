import { Component, OnInit } from '@angular/core';

import { IGORGroup } from "@cosmos/types";
import { GoogleGroupsService } from '@cosmos/search-services';

@Component({
  selector: 'cosmos-google-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group: IGORGroup;

  constructor(private groupsService: GoogleGroupsService) { }

  ngOnInit() {
  }

}
