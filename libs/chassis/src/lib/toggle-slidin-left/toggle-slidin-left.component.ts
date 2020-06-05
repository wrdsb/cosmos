import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-toggle-slidin-left',
  templateUrl: './toggle-slidin-left.component.html',
  styleUrls: ['./toggle-slidin-left.component.scss']
})
export class ToggleSlidinLeftComponent implements OnInit {
  showSlideinLeft: boolean;
  showSlideinLeft$ = this.chassisService.slideinLeftVisible$;

  constructor(
    private chassisService: ChassisService,
  ) { }

  ngOnInit(): void {
    this.getShowSlideinLeft();
  }

  getShowSlideinLeft() {
    this.showSlideinLeft$.subscribe(showSlideinLeft => 
      this.showSlideinLeft = showSlideinLeft
    );
    console.log(`getShowSlideinLeft: ${this.showSlideinLeft}`);
  }

  toggleShowSlideinLeft(): void {
    console.log(`set showSlideinLeft to: ${!this.showSlideinLeft}`);
    this.chassisService.showSlideinLeft(!this.showSlideinLeft);
    console.log(`current showSlideinLeft: ${this.showSlideinLeft}`);
  }
}
