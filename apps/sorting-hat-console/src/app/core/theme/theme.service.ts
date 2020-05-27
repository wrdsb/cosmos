import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Theme } from "./theme.model";
import { THEME } from "./theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() { }

  getTheme(): Observable<Theme> {
    return of(THEME);
  }
}
