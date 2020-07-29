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

  constructor(
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    console.log('init chassis');
  }

  ngAfterViewInit(): void {
    this.chassisService.setSidebarOuterLeft(this.sidebarOuterLeft);

    console.log(`chassis component sidebarOuterLeft: ${this.sidebarOuterLeft}`);
    console.log(`chassis service sidebarOuterLeft: ${this.chassisService.getSidebarOuterLeft()}`);

    this.chassisService.setSidebarOuterRight(this.sidebarOuterRight);

    console.log(`chassis component sidebarOuterRight: ${this.sidebarOuterRight}`);
    console.log(`chassis service sidebarOuterRight: ${this.chassisService.getSidebarOuterRight()}`);
  }

}
