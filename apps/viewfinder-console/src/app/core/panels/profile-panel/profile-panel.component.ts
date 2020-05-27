import { Component, OnInit } from '@angular/core';
import '@microsoft/mgt/dist/es6/components/mgt-person/mgt-person';
import { User } from "@microsoft/microsoft-graph-types";
import { GraphService } from '../../../graph.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.css']
})
export class ProfilePanelComponent implements OnInit {
  profile: User;
  profile$ = this.graphService.getProfile();

  profileString() {
    return JSON.stringify(this.profile);
  }

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profile$.subscribe(profile => 
      this.profile = profile
    );
  }
}
