import { Component, OnInit } from '@angular/core';

import { PingFunctionResponse, PingFunctionResponsePayload } from "@cosmos/types";
import { CodexService } from "@cosmos/codex-service";

@Component({
  selector: 'cosmos-codex-ping',
  templateUrl: './codex-ping.component.html',
  styleUrls: ['./codex-ping.component.scss']
})
export class CodexPingComponent implements OnInit {
  ping: PingFunctionResponse;

  constructor(private codexService: CodexService) { }

  ngOnInit(): void {
    this.getPing();
  }

  getPing() {
    this.codexService.getPing().subscribe(ping => (this.ping = ping));
  }
}
