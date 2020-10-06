import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/viewfinder-service";

import { GoogleGroup, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class GoogleGroupsService {
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

  private groupsList: BehaviorSubject<GoogleGroup[]> = new BehaviorSubject([]);
  public readonly groupsList$: Observable<GoogleGroup[]> = this.groupsList.asObservable();

  private groupSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly groupSelected$: Observable<boolean> = this.groupSelected.asObservable();

  private selectedGroup: BehaviorSubject<GoogleGroup> = new BehaviorSubject<GoogleGroup>(null);
  public readonly selectedGroup$: Observable<GoogleGroup> = this.selectedGroup.asObservable();

  constructor(
    private messagesService: MessagesService,
    private viewfinderService: ViewfinderService
  ) {}


  selectGroup(groupID: string): void {
    this.findGroup(groupID);
  }


  deselectGroup() {
    this.groupSelected.next(false);
    this.selectedGroup.next(null);
  }


  findGroup(groupID): void {
    console.log('Google Groups Service: findGroup()');

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.viewfinderService.findGoogleGroup(groupID)
      .pipe(
        tap(_ => console.log('Google Groups Service: find request')),
        retry(2),
        catchError(error => {
          console.log('Google Groups Service: catch find request error');
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
          throw 'Google Groups Service: error finding Google Group';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('Google Groups Service: success finding Google Group');
        })
      )
      .subscribe((response) => {
        this.groupSelected.next(true);
        this.selectedGroup.next(response.payload.documents[0] as GoogleGroup);
      });
  }

  
  searchGroups(query?: SearchFunctionRequestPayload): void {
    console.log('Google Groups Service: searchGroups()');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["email asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.viewfinderService.searchGoogleGroups(searchRequestOptions)
      .pipe(
        tap(_ => console.log('Google Groups Service: search request')),
        retry(2),
        catchError(error => {
          console.log('Google Groups Service: catch search request error');
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
          throw 'Google Groups Service: error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('Google Groups Service: success searching Viewfinder');
        })
      )
      .subscribe((response) => {
        this.searchResponse.next(response);
        this.groupsList.next(response.payload.documents as GoogleGroup[]);
      });
  }
}
