import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs";

import { DeviceLoan } from "@cosmos/types";
import { DeviceLoansService } from '../device-loans.service';

@Component({
  selector: 'cosmos-device-loan-meta-dialog',
  templateUrl: './device-loan-meta-dialog.component.html',
  styleUrls: ['./device-loan-meta-dialog.component.scss']
})
export class DeviceLoanMetaDialogComponent {
  public selectedLoan$: Observable<DeviceLoan>;

  constructor(
    private deviceLoansService: DeviceLoansService
  ) {
    this.selectedLoan$ = this.deviceLoansService.selectedLoan$;
  }
}
