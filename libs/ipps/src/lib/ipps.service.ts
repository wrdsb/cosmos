import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/viewfinder-service";

import { IPPSPerson, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class IPPSService {
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

  private peopleList: BehaviorSubject<IPPSPerson[]> = new BehaviorSubject([]);
  public readonly peopleList$: Observable<IPPSPerson[]> = this.peopleList.asObservable();

  private personSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly personSelected$: Observable<boolean> = this.personSelected.asObservable();

  private selectedPerson: BehaviorSubject<IPPSPerson> = new BehaviorSubject<IPPSPerson>(null);
  public readonly selectedPerson$: Observable<IPPSPerson> = this.selectedPerson.asObservable();

  constructor(
    private messagesService: MessagesService,
    private viewfinderService: ViewfinderService
  ) {}


  selectPerson(personID: string): void {
    this.findPerson(personID);
  }


  deselectPerson() {
    this.personSelected.next(false);
    this.selectedPerson.next(null);
  }


  findPerson(personID): void {
    console.log('IPPS Service: findPerson()');

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.viewfinderService.findIPPSPerson(personID)
      .pipe(
        tap(_ => console.log('IPPS Service: find request')),
        retry(2),
        catchError(error => {
          console.log('IPPS Service: catch find request error');
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
          throw 'IPPS Service: error finding IPPS Person';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('IPPS Service: success finding IPPS Person');
        })
      )
      .subscribe((response) => {
        this.personSelected.next(true);
        this.selectedPerson.next(response.payload.documents[0] as IPPSPerson);
      });
  }

  
  searchPeople(query?: SearchFunctionRequestPayload): void {
    console.log('IPPS Service: searchPeople()');

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

    this.viewfinderService.searchIPPSPeople(searchRequestOptions)
      .pipe(
        tap(_ => console.log('IPPS Service: search request')),
        retry(2),
        catchError(error => {
          console.log('IPPS Service: catch search request error');
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
          throw 'IPPS Service: error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('IPPS Service: success searching Viewfinder');
        })
      )
      .subscribe((response) => {
        this.searchResponse.next(response);
        this.peopleList.next(response.payload.documents as IPPSPerson[]);
      });
  }
}
