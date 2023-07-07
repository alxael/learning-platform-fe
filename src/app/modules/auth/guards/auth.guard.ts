import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import IdentityService from '../services/identity.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private router: Router,
    private identityService: IdentityService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token: string | null = null;
    this.identityService.refreshToken();
    this.identityService.token.subscribe((tokenValue) => {
      token = tokenValue;
    });
    if (token === null) {
      this.router.navigateByUrl('/signin');
      return false;
    }
    return true;
  }
}
