import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { CodexPerson } from "@cosmos/types";
import { PEOPLE } from "@cosmos/types";


@Injectable({
  providedIn: 'root'
})
export class CodexPeopleService {
  private people: CodexPerson[] = [];

  constructor() { }

  getGroups(): Observable<CodexPerson[]> {
    return of(PEOPLE);
  }
}
