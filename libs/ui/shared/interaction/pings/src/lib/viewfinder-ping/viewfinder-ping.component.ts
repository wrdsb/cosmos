import { Component, OnInit } from '@angular/core';

import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-viewfinder-ping',
  templateUrl: './viewfinder-ping.component.html',
  styleUrls: ['./viewfinder-ping.component.scss']
})
export class ViewfinderPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private viewfinderService: ViewfinderService) {
    this.pingState$ = this.viewfinderService.pingState$;
    this.pingRequestState$ = this.viewfinderService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.viewfinderService.doPing();
  }
}
