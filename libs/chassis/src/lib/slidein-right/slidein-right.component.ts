import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-slidein-right',
  templateUrl: './slidein-right.component.html',
  styleUrls: ['./slidein-right.component.scss']
})
export class SlideinRightComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.slideinRightEnabled$;

  visible: boolean;
  visible$ = this.chassisService.slideinRightVisible$

  content: string;
  content$ = this.chassisService.slideinRightContent$;

  constructor(
    private chassisService: ChassisService
  ) { }

  ngOnInit(): void {
    this.getEnabled();
    this.getVisible();
    this.getContent();
  }

  getEnabled(): void {
    this.enabled$.subscribe(enabled => 
      this.enabled = enabled
    );
    console.log(`slidein-right enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`slidein-right visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`slidein-right content: ${this.content}`);
  }
}
