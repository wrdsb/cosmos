import { Component, OnInit } from '@angular/core';

import { IGORService } from "@cosmos/igor-service";

@Component({
  selector: 'cosmos-igor-ping',
  templateUrl: './igor-ping.component.html',
  styleUrls: ['./igor-ping.component.scss']
})
export class IgorPingComponent implements OnInit {
  ping: string;

  constructor(private igorService: IGORService) { }

  ngOnInit(): void {
    this.getPing();
  }

  getPing() {
    this.igorService.getPing().subscribe(ping => (this.ping = ping));
  }
}
