import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { AADGroup } from "@cosmos/types";
import { AADUser } from "@cosmos/types";

import { GROUPS } from "./mocks/aad-groups";
import { USERS } from "./mocks/aad-users";

@Injectable({
  providedIn: 'root'
})
export class HagarService {

  constructor() { }

  getGroups(): Observable<AADGroup[]> {
    return of(GROUPS);
  }

  getUsers(): Observable<AADUser[]>  {
    return of(USERS);
  }
}
