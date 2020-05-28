import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { CodexPerson } from "./model/codex-person.class";
import { PEOPLE } from "./model/people.mocks";


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people: CodexPerson[] = [];

  constructor() { }

  getGroups(): Observable<CodexPerson[]> {
    return of(PEOPLE);
  }
}
