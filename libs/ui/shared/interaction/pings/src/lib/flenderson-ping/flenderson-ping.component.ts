import { Component, OnInit } from '@angular/core';

import { FlendersonService } from "@cosmos/angular-services/flenderson-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-flenderson-ping',
  templateUrl: './flenderson-ping.component.html',
  styleUrls: ['./flenderson-ping.component.scss']
})
export class FlendersonPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private flendersonService: FlendersonService) {
    this.pingState$ = this.flendersonService.pingState$;
    this.pingRequestState$ = this.flendersonService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.flendersonService.doPing();
  }
}
