import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { combineLatest, Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, filter, map, mergeMap, shareReplay, switchMap, tap } from 'rxjs/operators';

import {
  PeopleSetType,
  PeopleSetsCollection,
  PeopleSetDefinition,
  PeopleSetDefinitionQuery }
  from "@cosmos/types";

import { MessageService } from "../shared/message.service";

@Injectable({
  providedIn: 'root'
})
export class PeopleSetDefinitionsService {
  private apiURL = 'api/definitions';  // URL to web api

  definitions$ = this.http.get<PeopleSetDefinition[]>(this.apiURL).pipe(
    tap(data => console.log('getDefinitions: ', JSON.stringify(data))),
    shareReplay(),
    catchError(this.handleError)
  );

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

/** GET definition by id. Will 404 if id not found */
//getDefinition(id: number): Observable<PeopleSetDefinition> {
  //const url = `${this.apiURL}/${id}`;
  //return this.http.get<PeopleSetDefinition>(url).pipe(
    //tap(_ => console.log(`fetched People Set Definition id=${id}`)),
    //catchError(this.handleError<PeopleSetDefinition>(`getDefinition id=${id}`))
  //);
//}

/* GET definitions whose name contains search term */
//searchDefinitions(term: string): Observable<PeopleSetDefinition[]> {
  //if (!term.trim()) {
    // if not search term, return empty array.
    //return of([]);
  //}
  //return this.http.get<PeopleSetDefinition[]>(`${this.apiURL}/?name=${term}`).pipe(
    //tap(x => x.length ?
      //this.log(`found definitions matching "${term}"`) :
      //this.log(`no definitions matching "${term}"`)),
    //catchError(this.handleError<PeopleSetDefinition[]>('searchDefinitions', []))
  //);
//}

  createDefinition(definition: PeopleSetDefinition) {}

  updateDefinition(definition: PeopleSetDefinition) {}

  deleteDefinition(definitionID: string) {}

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  // 
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  // 
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  // 
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  /** Log a PeopleSetDefinitionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PeopleSetDefinitionService: ${message}`);
  }
}
