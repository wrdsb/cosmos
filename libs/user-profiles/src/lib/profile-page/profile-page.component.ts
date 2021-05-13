import { Component, OnInit } from '@angular/core';
import { MgtPerson } from '@microsoft/mgt';
import { User } from "@microsoft/microsoft-graph-types";
import { GraphService } from '@cosmos/angular-services/msgraph-service';
import { UserAuthService } from '@cosmos/user-auth';

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
    private userAuthService: UserAuthService,
    private graphService: GraphService
  ) { }

  ngOnInit(): void {
    console.log('Load ProfilePage component.');
    this.getProfile();
    const account = this.userAuthService.getAccount();
    this.roles = this.userAuthService.getRoles();
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
