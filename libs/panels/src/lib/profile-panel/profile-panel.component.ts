import { Component, OnInit } from '@angular/core';
import '@microsoft/mgt/dist/es6/components/mgt-person/mgt-person';
import { User } from "@microsoft/microsoft-graph-types";
import { GraphService } from '@cosmos/msgraph-service';

@Component({
  selector: 'cosmos-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent implements OnInit {
  profile: User;
  profile$ = this.graphService.getProfile();

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  profileString() {
    return JSON.stringify(this.profile);
  }

  getProfile() {
    this.profile$.subscribe(profile => 
      this.profile = profile
    );
  }
}