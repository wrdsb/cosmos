import { Component, OnInit } from '@angular/core';

import { HagarService } from '@cosmos/angular-services/hagar-service';
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-hagar-ping',
  templateUrl: './hagar-ping.component.html',
  styleUrls: ['./hagar-ping.component.scss']
})
export class HagarPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private hagarService: HagarService) {
    this.pingState$ = this.hagarService.pingState$;
    this.pingRequestState$ = this.hagarService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.hagarService.doPing();
  }
}
