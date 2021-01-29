import { Component, OnInit } from '@angular/core';

import { SkinnerService } from "@cosmos/skinner-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-skinner-ping',
  templateUrl: './skinner-ping.component.html',
  styleUrls: ['./skinner-ping.component.scss']
})
export class SkinnerPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private skinnerService: SkinnerService) {
    this.pingState$ = this.skinnerService.pingState$;
    this.pingRequestState$ = this.skinnerService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.skinnerService.doPing();
  }
}
