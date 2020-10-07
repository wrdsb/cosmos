import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Status } from "@cosmos/types";

import { MessagesService } from '@cosmos/messages';
import { ViewfinderService } from "@cosmos/viewfinder-service";

import { GoogleCalendar, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarService {
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

  private calendarsList: BehaviorSubject<GoogleCalendar[]> = new BehaviorSubject([]);
  public readonly calendarsList$: Observable<GoogleCalendar[]> = this.calendarsList.asObservable();

  private calendarSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly calendarSelected$: Observable<boolean> = this.calendarSelected.asObservable();

  private selectedCalendar: BehaviorSubject<GoogleCalendar> = new BehaviorSubject<GoogleCalendar>(null);
  public readonly selectedCalendar$: Observable<GoogleCalendar> = this.selectedCalendar.asObservable();

  constructor(
    private messagesService: MessagesService,
    private viewfinderService: ViewfinderService
  ) {}


  selectCalendar(calendarID: string): void {
    this.findCalendar(calendarID);
  }


  deselectCalendar() {
    this.calendarSelected.next(false);
    this.selectedCalendar.next(null);
  }


  findCalendar(calendarID): void {
    console.log('Google Calendar Service: findCalendar()');

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.viewfinderService.findGoogleCalendar(calendarID)
      .pipe(
        tap(_ => console.log('Google Calendar Service: find request')),
        retry(2),
        catchError(error => {
          console.log('Google Calendar Service: catch find request error');
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
          throw 'Google Calendar Service: error finding Google Calendar';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('Google Calendar Service: success finding Google Calendar');
        })
      )
      .subscribe((response) => {
        this.calendarSelected.next(true);
        this.selectedCalendar.next(response.payload.documents[0] as GoogleCalendar);
      });
  }

  
  searchCalendars(query?: SearchFunctionRequestPayload): void {
    console.log('Google Calendar Service: searchCalendars()');

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

    this.viewfinderService.searchGoogleCalendars(searchRequestOptions)
      .pipe(
        tap(_ => console.log('Google Calendars Service: search request')),
        retry(2),
        catchError(error => {
          console.log('Google Calendars Service: catch search request error');
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
          throw 'Google Calendars Service: error searching Viewfinder';
        }),
        tap(_ => {
          this.searchRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log('Google Calendars Service: success searching Viewfinder');
        })
      )
      .subscribe((response) => {
        this.searchResponse.next(response);
        this.calendarsList.next(response.payload.documents as GoogleCalendar[]);
      });
  }
}
