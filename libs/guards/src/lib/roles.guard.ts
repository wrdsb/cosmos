import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MsalService } from "@azure/msal-angular";

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private msalService: MsalService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRoles = (this.msalService.getAccount().idToken as any).roles;
    const allowedRoles = next.data["roles"];
    const matchingRoles = userRoles.filter(x => allowedRoles.includes(x));
    return matchingRoles.length > 0;
  }
}
