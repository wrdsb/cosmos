import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { UserAuthService } from '@cosmos/user-auth';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private userAuthService: UserAuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const userRoles = this.userAuthService.getRoles();
      const allowedRoles = next.data["roles"];
      const matchingRoles = userRoles.filter(x => allowedRoles.includes(x));
  
      return matchingRoles.length > 0;
  }
}
