import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { User } from "@microsoft/microsoft-graph-types";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MSGraphServiceModule } from './msgraph-service.module';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(
    private authService: MsalService,
    private http: HttpClient
  ) { }

  getProfile(): Observable<User> {
    this.log('getProfile()');
    const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

    return this.http.get<User>(GRAPH_ENDPOINT)
      .pipe(
        tap(_ => this.log('fetched profile')),
        catchError(this.handleError<User>('getProfile'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`GraphService: ${message}`);
  }
}