import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from "@cosmos/types";
import { FOOTER } from "./navigation";
import { HEADER } from "./navigation";
import { SIDE } from "./navigation";

@Injectable({
  providedIn: 'root'
})
export class UINavigationService {
  constructor() { }

  getFooter(): Observable<Menu> {
    return of(FOOTER);
  }

  getHeader(): Observable<Menu> {
    return of(HEADER);
  }

  getSide(): Observable<Menu> {
    return of(SIDE);
  }
}
