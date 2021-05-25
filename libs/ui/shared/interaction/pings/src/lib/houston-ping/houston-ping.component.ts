import { Component, OnInit } from '@angular/core';

import { HoustonService } from "@cosmos/angular-services/houston-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-houston-ping',
  templateUrl: './houston-ping.component.html',
  styleUrls: ['./houston-ping.component.scss']
})
export class HoustonPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private houstonService: HoustonService) {
    this.pingState$ = this.houstonService.pingState$;
    this.pingRequestState$ = this.houstonService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.houstonService.doPing();
  }
}
