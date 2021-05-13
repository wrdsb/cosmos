import { Component, OnInit } from '@angular/core';

import { SortingHatService } from "@cosmos/angular-services/sorting-hat-service";
import { PingFunctionResponse, PingRequestState, Status } from "@cosmos/types";

@Component({
  selector: 'cosmos-sorting-hat-ping',
  templateUrl: './sorting-hat-ping.component.html',
  styleUrls: ['./sorting-hat-ping.component.scss']
})
export class SortingHatPingComponent implements OnInit {
  readonly Status = Status;
  readonly pingState$;
  readonly pingRequestState$;

  constructor(private sortingHatService: SortingHatService) {
    this.pingState$ = this.sortingHatService.pingState$;
    this.pingRequestState$ = this.sortingHatService.pingRequestState$;
  }

  ngOnInit(): void {
    //this.doPing();
  }

  doPing() {
    this.sortingHatService.doPing();
  }
}
