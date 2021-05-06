import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { Status } from "@cosmos/types";
import { PingFunctionResponse, PingRequestState } from "@cosmos/types";
import { SearchFunctionRequest, SearchFunctionRequestPayload, SearchFunctionResponse, SearchRequestState } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class ViewfinderService {
  private apiTargetAppName = 'Viewfinder';
  private serviceName = `${this.apiTargetAppName} Service`;

  private pingURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ping';
  
  private googleGroupsFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-group-find';
  private googleGroupsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-groups-search';

  private googleCalendarFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-calendar-find';
  private googleCalendarsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/google-calendars-search';

  private ippsPersonFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ipps-person-find';
  private ippsPeopleSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ipps-people-search';

  private quartermasterDeviceLoanFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/device-loan-find';
  private quartermasterDeviceLoansSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/device-loans-search';

  private atsAssetFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ats-asset-find';
  private atsAssetsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/ats-assets-search';

  private quartermasterAssetFindURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-asset-find';
  private quartermasterAssetsSearchURL = 'https://wrdsb-viewfinder.azurewebsites.net/api/quartermaster-assets-search';

  private pingState: BehaviorSubject<PingFunctionResponse> = new BehaviorSubject({
    header: {
      status: 0,
      message: "",
      chatter: "",
      timestamp: "",
      authenticated: false,
      authorized: false,
      userName: "",
      userEmail: "",
      userRoles: []
    },
    payload: {
      status: 0,
      message: "",
      chatter: "",
      timestamp: ""
    }
  });
  private pingRequestState: BehaviorSubject<PingRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly pingState$: Observable<PingFunctionResponse> = this.pingState.asObservable();
  public readonly pingRequestState$: Observable<PingRequestState> = this.pingRequestState.asObservable();

  private searchRequestState: BehaviorSubject<SearchRequestState> = new BehaviorSubject({
    status: Status.UNKNOWN,
    response: 'response',
    error: 'error'
  });
  public readonly searchRequestState$: Observable<SearchRequestState> = this.searchRequestState.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) {}


  doPing(): void {
    console.log(`${this.serviceName}: doPing()`);
    console.log(`Pinging ${this.apiTargetAppName}...`);

    this.pingRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    this.http.get<PingFunctionResponse>(this.pingURL, this.httpOptions)
      .pipe(
        tap(_ => console.log('ping request')),
        retry(2),
        catchError(error => {
          console.log('catch ping request error');
          this.pingRequestState.next({
            status: Status.ERROR,
            response: '',
            error: error
          });
          this.pingState.next({
            header: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            },
            payload: {
              status: 200,
              message: "error",
              chatter: "error",
              timestamp: "timestamp"
            }
          });
          throw `error pinging ${this.apiTargetAppName}`;
        }),
        tap(_ => {
          this.pingRequestState.next({
            status: Status.SUCCESS,
            response: 'success',
            error: ''
          });
          console.log(`success pinging ${this.apiTargetAppName}`);
        })
      )
      .subscribe(response => this.pingState.next(response));
  }

  findGoogleGroup(groupID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findGoogleGroup()');

    let searchFunctionRequest = {
      payload: {
        id: groupID
      }
    };

    return this.http.post<SearchFunctionResponse>(this.googleGroupsFindURL, searchFunctionRequest, this.httpOptions)
    .pipe(
      tap(_ => console.log('Viewfinder Service: Google Group find request')),
      retry(2),
      catchError(error => {
        console.log('Viewfinder Service: catch find request error');
        this.searchRequestState.next({
          status: Status.ERROR,
          response: '',
          error: error
        });
        throw 'Viewfinder Service: error finding via Viewfinder';
      }),
      tap(_ => {
        this.searchRequestState.next({
          status: Status.SUCCESS,
          response: 'success',
          error: ''
        });
        console.log('Viewfinder Service: success finding via Viewfinder');
      })
    );
  }

  searchGoogleGroups(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchGoogleGroups()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.googleGroupsSearchURL, searchFunctionRequest, this.httpOptions)
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
      );
  }


  findGoogleCalendar(calendarID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findGoogleCalendar()');

    let searchFunctionRequest = {
      payload: {
        id: calendarID
      }
    };

    return this.http.post<SearchFunctionResponse>(this.googleCalendarFindURL, searchFunctionRequest, this.httpOptions)
    .pipe(
      tap(_ => console.log('Viewfinder Service: Google Calendar find request')),
      retry(2),
      catchError(error => {
        console.log('Viewfinder Service: catch find request error');
        this.searchRequestState.next({
          status: Status.ERROR,
          response: '',
          error: error
        });
        throw 'Viewfinder Service: error finding via Viewfinder';
      }),
      tap(_ => {
        this.searchRequestState.next({
          status: Status.SUCCESS,
          response: 'success',
          error: ''
        });
        console.log('Viewfinder Service: success finding via Viewfinder');
      })
    );
  }


  searchGoogleCalendars(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchGoogleCalendars()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["summary asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.googleCalendarsSearchURL, searchFunctionRequest, this.httpOptions)
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
      );
  }


  findIPPSPerson(personID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findIPPSPerson()');

    let searchFunctionRequest = {
      payload: {
        id: personID
      }
    };

    return this.http.post<SearchFunctionResponse>(this.ippsPersonFindURL, searchFunctionRequest, this.httpOptions)
    .pipe(
      tap(_ => console.log('Viewfinder Service: IPPS Person find request')),
      retry(2),
      catchError(error => {
        console.log('Viewfinder Service: catch find request error');
        this.searchRequestState.next({
          status: Status.ERROR,
          response: '',
          error: error
        });
        throw 'Viewfinder Service: error finding via Viewfinder';
      }),
      tap(_ => {
        this.searchRequestState.next({
          status: Status.SUCCESS,
          response: 'success',
          error: ''
        });
        console.log('Viewfinder Service: success finding via Viewfinder');
      })
    );
  }


  searchIPPSPeople(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchIPPSPeople()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      orderBy: ["summary asc"],
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.ippsPeopleSearchURL, searchFunctionRequest, this.httpOptions)
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
      );
  }


  findQuartermasterDeviceLoan(loanID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findQuartermasterDeviceLoan()');

    let searchFunctionRequest = {
      payload: {
        id: loanID
      }
    };

    return this.http.post<SearchFunctionResponse>(this.quartermasterDeviceLoanFindURL, searchFunctionRequest, this.httpOptions)
    .pipe(
      tap(_ => console.log('Viewfinder Service: Quartermaster Device Loan find request')),
      retry(2),
      catchError(error => {
        console.log('Viewfinder Service: catch find request error');
        this.searchRequestState.next({
          status: Status.ERROR,
          response: '',
          error: error
        });
        throw 'Viewfinder Service: error finding via Viewfinder';
      }),
      tap(_ => {
        this.searchRequestState.next({
          status: Status.SUCCESS,
          response: 'success',
          error: ''
        });
        console.log('Viewfinder Service: success finding via Viewfinder');
      })
    );
  }


  searchQuartermasterDeviceLoans(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchQuartermasterDeviceLoans()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.quartermasterDeviceLoansSearchURL, searchFunctionRequest, this.httpOptions)
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
      );
  }


  findATSAsset(assetID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findATSAsset()');

    let searchFunctionRequest = {
      payload: {
        id: assetID
      }
    };

    return this.http.post<SearchFunctionResponse>(this.atsAssetFindURL, searchFunctionRequest, this.httpOptions)
    .pipe(
      tap(_ => console.log('Viewfinder Service: ATS Asset find request')),
      retry(2),
      catchError(error => {
        console.log('Viewfinder Service: catch find request error');
        this.searchRequestState.next({
          status: Status.ERROR,
          response: '',
          error: error
        });
        throw 'Viewfinder Service: error finding via Viewfinder';
      }),
      tap(_ => {
        this.searchRequestState.next({
          status: Status.SUCCESS,
          response: 'success',
          error: ''
        });
        console.log('Viewfinder Service: success finding via Viewfinder');
      })
    );
  }


  searchATSAssets(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchATSAssets()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.atsAssetsSearchURL, searchFunctionRequest, this.httpOptions)
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
      );
  }


  findQuartermasterAsset(assetID: string): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: findQuartermasterAsset()');

    let searchFunctionRequest = {
      payload: {
        id: assetID
      }
    };

    return this.http.post<SearchFunctionResponse>(this.quartermasterAssetFindURL, searchFunctionRequest, this.httpOptions)
    .pipe(
      tap(_ => console.log('Viewfinder Service: Quartermaster Asset find request')),
      retry(2),
      catchError(error => {
        console.log('Viewfinder Service: catch find request error');
        this.searchRequestState.next({
          status: Status.ERROR,
          response: '',
          error: error
        });
        throw 'Viewfinder Service: error finding via Viewfinder';
      }),
      tap(_ => {
        this.searchRequestState.next({
          status: Status.SUCCESS,
          response: 'success',
          error: ''
        });
        console.log('Viewfinder Service: success finding via Viewfinder');
      })
    );
  }


  searchQuartermasterAssets(query?: SearchFunctionRequestPayload): Observable<SearchFunctionResponse> {
    console.log('Viewfinder Service: searchQuartermasterAssets()');
    console.log('Searching Viewfinder...');

    let defaultSearchRequestOptions = {
      includeTotalCount: true,
      skip: 0,
      top: 20,
    } as SearchFunctionRequestPayload;

    let searchRequestOptions = Object.assign(defaultSearchRequestOptions, query);
    
    let searchFunctionRequest = {
      payload: searchRequestOptions
    };

    this.searchRequestState.next({
      status: Status.LOADING,
      response: 'unknown',
      error: 'unknown'
    });

    return this.http.post<SearchFunctionResponse>(this.quartermasterAssetsSearchURL, searchFunctionRequest, this.httpOptions)
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
      );
  }
}
