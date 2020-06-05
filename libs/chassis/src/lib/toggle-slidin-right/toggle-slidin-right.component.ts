import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-toggle-slidin-right',
  templateUrl: './toggle-slidin-right.component.html',
  styleUrls: ['./toggle-slidin-right.component.scss']
})
export class ToggleSlidinRightComponent implements OnInit {
  showSlideinRight: boolean;
  showSlideinRight$ = this.chassisService.slideinRightVisible$;

  constructor(
    private chassisService: ChassisService,
  ) { }

  ngOnInit(): void {
    this.getShowSlideinRight();
  }

  getShowSlideinRight() {
    this.showSlideinRight$.subscribe(showSlideinRight => 
      this.showSlideinRight = showSlideinRight
    );
    console.log(`getShowSlideinRight: ${this.showSlideinRight}`);
  }

  toggleShowSlideinRight(): void {
    console.log(`set showSlideinRight to: ${!this.showSlideinRight}`);
    this.chassisService.showSlideinRight(!this.showSlideinRight);
    console.log(`current showSlideinRight: ${this.showSlideinRight}`);
  }
}
