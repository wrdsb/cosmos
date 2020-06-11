import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Theme } from "@cosmos/ui";
import { THEME } from "./theme";
import { PowderCoatModule } from './powder-coat.module';

@Injectable({
  providedIn: PowderCoatModule
})
export class PowderCoatService {
  constructor() { }

  getTheme(): Observable<Theme> {
    return of(THEME);
  }
}
