import { Component, OnInit } from '@angular/core';

import { EnvironmentService } from "@cosmos/environment";

@Component({
  selector: 'cosmos-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = this.environmentService.appName;

  constructor(
    private environmentService: EnvironmentService
  ) { }

  ngOnInit(): void {
  }

}
