import { Component, OnInit } from '@angular/core';

import { ChassisService } from '../chassis.service';

@Component({
  selector: 'cosmos-slidein-left',
  templateUrl: './slidein-left.component.html',
  styleUrls: ['./slidein-left.component.scss']
})
export class SlideinLeftComponent implements OnInit {
  enabled: boolean;
  enabled$ = this.chassisService.slideinLeftEnabled$;

  visible: boolean;
  visible$ = this.chassisService.slideinLeftVisible$;

  content: string;
  content$ = this.chassisService.slideinLeftContent$;

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
    console.log(`slidein-left enabled: ${this.enabled}`);
  }

  getVisible(): void {
    this.visible$.subscribe(visible => 
      this.visible = visible
    );
    console.log(`slidein-left visible: ${this.visible}`);
  }

  getContent(): void {
    this.content$.subscribe(content => 
      this.content = content
    );
    console.log(`slidein-left content: ${this.content}`);
  }
}
