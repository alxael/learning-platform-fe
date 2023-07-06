import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '../api/api.module';

import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import AuthInterceptorService from './services/auth-interceptor.service';

@NgModule({
  declarations: [SignInPageComponent, SignUpPageComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ApiModule],
  exports: [SignInPageComponent, SignUpPageComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class AuthModule {}
