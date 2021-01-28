import { Component, OnInit } from '@angular/core';

import { CodexService } from "@cosmos/codex-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-codex-ping',
  templateUrl: './codex-ping.component.html',
  styleUrls: ['./codex-ping.component.scss']
})
export class CodexPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private codexService: CodexService) {
    this.pingState$ = this.codexService.pingState$;
    this.pingRequestState$ = this.codexService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.codexService.doPing();
  }
}
