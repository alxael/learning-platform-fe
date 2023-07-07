import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import IdentityService from './identity.service';

@Injectable({ providedIn: 'root' })
export default class AuthInterceptorService {
  constructor(
    private identityService: IdentityService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: string | null = null;
    this.identityService.refreshToken();
    this.identityService.token.subscribe((value) => {
      token = value;
    });
    let request = req;
    if (token !== null) {
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    return next.handle(request).pipe(
      tap({
        error: (error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.identityService.removeToken();
              this.router.navigateByUrl('/signin');
            }
            return;
          }
        },
      })
    );
  }
}
