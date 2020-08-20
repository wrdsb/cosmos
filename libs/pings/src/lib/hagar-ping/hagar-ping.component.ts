import { Component, OnInit } from '@angular/core';

import { HagarService } from '@cosmos/hagar-service';

@Component({
  selector: 'cosmos-hagar-ping',
  templateUrl: './hagar-ping.component.html',
  styleUrls: ['./hagar-ping.component.scss']
})
export class HagarPingComponent implements OnInit {
  ping: string;

  constructor(private hagarService: HagarService) {}

  ngOnInit(): void {
    this.getPing();
  }

  getPing() {
    this.hagarService.getPing().subscribe(ping => (this.ping = ping));
  }
}
