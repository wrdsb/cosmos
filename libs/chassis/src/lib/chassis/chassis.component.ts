import { Component, OnInit } from '@angular/core';
import { ChassisService } from "../chassis.service";

@Component({
  selector: 'cosmos-chassis',
  templateUrl: './chassis.component.html',
  styleUrls: ['./chassis.component.scss']
})
export class ChassisComponent implements OnInit {

  constructor(
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
  }

}
