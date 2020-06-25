import { Component, OnInit } from '@angular/core';

import { User } from "@microsoft/microsoft-graph-types";
import { GraphService } from '@cosmos/msgraph-service';

import '@microsoft/mgt/dist/es6/components/mgt-person/mgt-person';

@Component({
  selector: 'cosmos-profile-badge',
  templateUrl: './profile-badge.component.html',
  styleUrls: ['./profile-badge.component.scss']
})
export class ProfileBadgeComponent implements OnInit {
  profile: User;
  profile$ = this.graphService.getProfile();

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profile$.subscribe(profile => 
      this.profile = profile
    );
  }
}
