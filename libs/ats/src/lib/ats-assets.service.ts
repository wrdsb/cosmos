import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/viewfinder-service";

import { ATSAsset, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class ATSAssetsService {
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

  private assetsList: BehaviorSubject<ATSAsset[]> = new BehaviorSubject([]);
  public readonly assetsList$: Observable<ATSAsset[]> = this.assetsList.asObservable();

  private assetSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly assetSelected$: Observable<boolean> = this.assetSelected.asObservable();

  private selectedAsset: BehaviorSubject<ATSAsset> = new BehaviorSubject<ATSAsset>(null);
  public readonly selectedAsset$: Observable<ATSAsset> = this.selectedAsset.asObservable();

  constructor(
    private messagesService: MessagesService,
    private viewfinderService: ViewfinderService
  ) {}


  selectAsset(assetID: string): void {
    this.findAsset(assetID);
  }


  deselectAsset() {
    this.assetSelected.next(false);
    this.selectedAsset.next(null);
  }


  findAsset(assetID): void {
    console.log('ATS Assets Service: findAsset()');

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.viewfinderService.findATSAsset(assetID)
      .pipe(
        tap(_ => console.log('ATS Assets Service: find request')),
        retry(2),
        catchError(error => {
          console.log('ATS Assets Service: catch find request error');
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
          throw 'ATS Assets Service: error finding Asset';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('ATS Assets Service: success finding Asset');
        })
      )
      .subscribe((response) => {
        this.assetSelected.next(true);
        this.selectedAsset.next(response.payload.documents[0] as ATSAsset);
      });
  }

  
  searchAssets(query?: SearchFunctionRequestPayload): void {
    console.log('ATS Assets Service: searchAssets()');

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

    this.viewfinderService.searchATSAssets(searchRequestOptions)
      .pipe(
        tap(_ => console.log('ATS Assets Service: search request')),
        retry(2),
        catchError(error => {
          console.log('ATS Assets Service: catch search request error');
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
          throw 'ATS Assets Service: error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('ATS Assets Service: success searching Viewfinder');
        })
      )
      .subscribe((response) => {
        this.searchResponse.next(response);
        this.assetsList.next(response.payload.documents as ATSAsset[]);
      });
  }
}
