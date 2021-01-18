import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { DeviceLoan, SearchFunctionRequestPayload, SearchFunctionResponse } from "@cosmos/types";
import { DeviceLoansService } from '../device-loans.service';

@Component({
  selector: 'cosmos-device-loans-dashboard',
  templateUrl: './device-loans-dashboard.component.html',
  styleUrls: ['./device-loans-dashboard.component.scss']
})
export class DeviceLoansDashboardComponent implements OnInit {
  displayedColumns$ = new BehaviorSubject<string[]>([
    'school',
    'ipads',
    'chromebooks',
    'otherDevices',
    'total',
    'recordActions'
  ]);

  loansPerSchool = new BehaviorSubject<any[]>([]);
  public loansPerSchool$: Observable<any[]>;

  constructor(
    private deviceLoansService: DeviceLoansService,
    //public dialog: MatDialog
  ) {
    this.loansPerSchool$ = this.loansPerSchool;
  }

  ngOnInit(): void {
    this.searchLoans();
  }

  searchLoans(): void {
    this.loansPerSchool.next(
      [
        {
          school: "BCI",
          ipads: 3,
          chromebooks: 6,
          total: 9
        },
        {
          school: "CHC",
          ipads: 3,
          chromebooks: 6,
          total: 9
        },
        {
          school: "ECI",
          ipads: 3,
          chromebooks: 6,
          total: 9
        }
      ]
    );
  }
}
