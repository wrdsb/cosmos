import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/angular-services/viewfinder-service";

import { DeviceLoan, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class DeviceLoansService {
  private searchRequestState: BehaviorSubject<SearchRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly searchRequestState$: Observable<SearchRequestState> = this.searchRequestState.asObservable();

  private searchResponse: BehaviorSubject<SearchFunctionResponse> = new BehaviorSubject({
    header: {
      message: "",
      chatter: "",
      status: 0,
      timestamp: ""
    },
    payload: {}
  });
  public readonly searchResponse$: Observable<SearchFunctionResponse> = this.searchResponse.asObservable();

  private loansList: BehaviorSubject<DeviceLoan[]> = new BehaviorSubject([]);
  public readonly loansList$: Observable<DeviceLoan[]> = this.loansList.asObservable();

  private loanSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly loanSelected$: Observable<boolean> = this.loanSelected.asObservable();

  private selectedLoan: BehaviorSubject<DeviceLoan> = new BehaviorSubject<DeviceLoan>(null);
  public readonly selectedLoan$: Observable<DeviceLoan> = this.selectedLoan.asObservable();

  constructor(
    private messagesService: MessagesService,
    private viewfinderService: ViewfinderService
  ) {}


  selectLoan(loanID: string): void {
    this.findLoan(loanID);
  }


  deselectLoan() {
    this.loanSelected.next(false);
    this.selectedLoan.next(null);
  }


  findLoan(loanID): void {
    console.log('Quartermaster Device Loans Service: findLoan()');

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.viewfinderService.findQuartermasterDeviceLoan(loanID)
      .pipe(
        tap(_ => console.log('Quartermastaer Device Loans Service: find request')),
        retry(2),
        catchError(error => {
          console.log('Quartermaster Device Loans Service: catch find request error');
          this.searchRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          this.searchResponse.next({
            header: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            },
            payload: {}
          });
          throw 'Quartermaster Device Loans Service: error finding Device Loan';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('Quartermaster Device Loans Service: success finding Device Loan');
        })
      )
      .subscribe((response) => {
        this.loanSelected.next(true);
        this.selectedLoan.next(response.payload.documents[0] as DeviceLoan);
      });
  }

  
  searchLoans(query?: SearchFunctionRequestPayload): void {
    console.log('Quartermaster Device Loans Service: searchLoans()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["assetID asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.viewfinderService.searchQuartermasterDeviceLoans(searchRequestOptions)
      .pipe(
        tap(_ => console.log('Quartermaster Device Loans Service: search request')),
        retry(2),
        catchError(error => {
          console.log('Quartermaster Device Loans Service: catch search request error');
          this.searchRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          this.searchResponse.next({
            header: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            },
            payload: {}
          });
          throw 'Quartermaster Device Loans Service: error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('Quartermaster Device Loans Service: success searching Viewfinder');
        })
      )
      .subscribe((response) => {
        this.searchResponse.next(response);
        this.loansList.next(response.payload.documents as DeviceLoan[]);
      });
  }
}
