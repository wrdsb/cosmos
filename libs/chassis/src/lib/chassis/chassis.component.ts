import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { ChassisService } from "../chassis.service";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'cosmos-chassis',
  templateUrl: './chassis.component.html',
  styleUrls: ['./chassis.component.scss']
})
export class ChassisComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebarOuterLeft') public sidebarOuterLeft: MatSidenav;
  @ViewChild('sidebarOuterRight') public sidebarOuterRight: MatSidenav;
  @ViewChild('sidebarInnerLeft') public sidebarInnerLeft: MatSidenav;
  @ViewChild('sidebarInnerRight') public sidebarInnerRight: MatSidenav;

  loggedIn = false;

  constructor(
    private authService: MsalService,
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    console.log('init chassis');
    this.checkoutAccount();
  }

  ngAfterViewInit(): void {
    this.chassisService.setSidebarOuterLeft(this.sidebarOuterLeft);
    this.chassisService.setSidebarOuterRight(this.sidebarOuterRight);
    this.chassisService.setSidebarInnerLeft(this.sidebarInnerLeft);
    this.chassisService.setSidebarInnerRight(this.sidebarInnerRight);
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }

  login() {
    this.authService.loginRedirect();
  }

  logout() {
    this.authService.logout();
  }
}
