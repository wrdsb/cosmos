import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Theme } from "@cosmos/ui";
import { THEME } from "./theme";

@Injectable({
  providedIn: 'root'
})
export class PowderCoatService {
  constructor() { }

  getTheme(): Observable<Theme> {
    return of(THEME);
  }
}
