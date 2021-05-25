import { Component, OnInit } from '@angular/core';

import { QuartermasterService } from "@cosmos/angular-services/quartermaster-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-quartermaster-ping',
  templateUrl: './quartermaster-ping.component.html',
  styleUrls: ['./quartermaster-ping.component.scss']
})
export class QuartermasterPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private quartermasterService: QuartermasterService) {
    this.pingState$ = this.quartermasterService.pingState$;
    this.pingRequestState$ = this.quartermasterService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.quartermasterService.doPing();
  }
}
