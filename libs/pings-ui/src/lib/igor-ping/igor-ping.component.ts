import { Component, OnInit } from '@angular/core';

import { IGORService } from "@cosmos/igor-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-igor-ping',
  templateUrl: './igor-ping.component.html',
  styleUrls: ['./igor-ping.component.scss']
})
export class IgorPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private igorService: IGORService) {
    this.pingState$ = this.igorService.pingState$;
    this.pingRequestState$ = this.igorService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.igorService.doPing();
  }
}
