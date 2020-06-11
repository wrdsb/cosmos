import { Component, OnInit } from '@angular/core';

import { AppSettingsService } from "@cosmos/app-settings";

@Component({
  selector: 'cosmos-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = this.appSettingsService.appName;

  constructor(
    private appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
  }

}
