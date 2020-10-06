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
  private groups: GoogleGroup[] = [];

  private searchResponse: BehaviorSubject<SearchFunctionResponse> = new BehaviorSubject({
    header: {
      message: "",
      chatter: "",
      status: 0,
      timestamp: ""
    },
    payload: {}
  });
  private searchRequestState: BehaviorSubject<SearchRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly searchResponse$: Observable<SearchFunctionResponse> = this.searchResponse.asObservable();
  public readonly searchRequestState$: Observable<SearchRequestState> = this.searchRequestState.asObservable();
  //private groupsList: BehaviorSubject<GoogleGroup[]> = new BehaviorSubject([]);

  private groupSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private selectedGroup: BehaviorSubject<GoogleGroup> = new BehaviorSubject<GoogleGroup>(null);

  public readonly groupSelected$: Observable<boolean> = this.groupSelected.asObservable();
  public readonly selectedGroup$: Observable<GoogleGroup> = this.selectedGroup.asObservable();

  constructor(
    private messagesService: MessagesService,
    private viewfinderService: ViewfinderService
  ) {}

  findGroup(options?: SearchFunctionRequestPayload): void {
    console.log('Google Groups Service: doSearch()');
    this.viewfinderService.doSearch(options);
  }
  
  selectGroup(group: GoogleGroup) {
    group.owners = (group.owners) ? group.owners : []
    group.managers = (group.managers) ? group.managers : []

    this.groupSelected.next(true);
    this.selectedGroup.next(group);
    console.log(`${this.selectedGroup.value.email} selected`);
  }

  deselectGroup() {
    this.groupSelected.next(false);
    this.selectedGroup.next(null);
  }

  searchGroups(query?: SearchFunctionRequestPayload): void {
    console.log('Google Groups Service: doSearch()');

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
        tap(_ => console.log('searh request')),
        retry(2),
        catchError(error => {
          console.log('catch search request error');
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
          throw 'error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('success searching Viewfinder');
        })
      )
      .subscribe(response => this.searchResponse.next(response));
  }
}
