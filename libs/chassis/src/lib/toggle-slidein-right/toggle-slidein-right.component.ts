import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-toggle-slidein-right',
  templateUrl: './toggle-slidein-right.component.html',
  styleUrls: ['./toggle-slidein-right.component.scss']
})
export class ToggleSidebarInnerRightComponent implements OnInit {
  showSlideinRight: boolean;
  showSlideinRight$ = this.chassisService.sidebarInnerRightVisible$;

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
