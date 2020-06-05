import { Component, OnInit } from '@angular/core';
import { ChassisService } from "../chassis.service";

@Component({
  selector: 'cosmos-layout',
  templateUrl: './chassis.component.html',
  styleUrls: ['./chassis.component.scss']
})
export class ChassisComponent implements OnInit {
  showNav = false;

  constructor(
    private layoutService: ChassisService
  ) { }

  ngOnInit(): void {
  }

}
