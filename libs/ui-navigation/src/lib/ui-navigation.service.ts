import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from "@cosmos/ui";
import { FOOTER } from "./navigation";
import { HEADER } from "./navigation";
import { SIDE } from "./navigation";
import { UINavigationModule } from './ui-navigation.module';

@Injectable({
  providedIn: UINavigationModule
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
