import { Component, OnInit } from '@angular/core';
import '@microsoft/mgt/dist/es6/components/mgt-person/mgt-person';
import { User } from "@microsoft/microsoft-graph-types";
import { GraphService } from '@cosmos/msgraph-service';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'cosmos-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profile: User;
  profile$ = this.graphService.getProfile();
  roles;

  constructor(
    private msalService: MsalService,
    private graphService: GraphService
  ) { }

  ngOnInit(): void {
    this.getProfile();
    const account = this.msalService.getAccount();
    this.roles = account.idToken.roles;
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
