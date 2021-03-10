import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '@cosmos/user-auth';
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

  isIframe = false;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private userAuthService: UserAuthService,
    private chassisService: ChassisService
  ) {
    this.isLoggedIn$ = this.userAuthService.isLoggedIn$;
  }

  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal
    console.log('init chassis');
    this.userAuthService.setIsLoggedIn();
  }

  ngAfterViewInit(): void {
    this.chassisService.setSidebarOuterLeft(this.sidebarOuterLeft);
    this.chassisService.setSidebarOuterRight(this.sidebarOuterRight);
    this.chassisService.setSidebarInnerLeft(this.sidebarInnerLeft);
    this.chassisService.setSidebarInnerRight(this.sidebarInnerRight);
  }

  login() {
    this.userAuthService.login();
  }

  logout() {
    this.userAuthService.logout();
  }
}
