import { Component, OnInit } from '@angular/core';

import { PanamaService } from "@cosmos/panama-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-panama-ping',
  templateUrl: './panama-ping.component.html',
  styleUrls: ['./panama-ping.component.scss']
})
export class PanamaPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private panamaService: PanamaService) {
    this.pingState$ = this.panamaService.pingState$;
    this.pingRequestState$ = this.panamaService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.panamaService.doPing();
  }
}
