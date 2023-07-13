import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import IdentityService from '../services/identity.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
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
    let ok: boolean | null = null;
    this.identityService.profileData.subscribe((value) => {
      if (!!value && !!value.roles && value?.roles.includes('Admin')) {
        ok = true;
      } else {
        ok = false;
      }
    });
    if (ok === null || ok === false) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}
