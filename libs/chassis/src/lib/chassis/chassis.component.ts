import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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

  constructor(
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    console.log('init chassis');
  }

  ngAfterViewInit(): void {
    this.chassisService.setSidebarOuterLeft(this.sidebarOuterLeft);
    this.chassisService.setSidebarOuterRight(this.sidebarOuterRight);
    this.chassisService.setSidebarInnerLeft(this.sidebarInnerLeft);
    this.chassisService.setSidebarInnerRight(this.sidebarInnerRight);
  }

}
