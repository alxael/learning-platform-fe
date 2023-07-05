import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationPageComponent } from './modules/content/components/presentation-page/presentation-page.component';
import { SignInPageComponent } from './modules/auth/components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './modules/auth/components/sign-up-page/sign-up-page.component';
import { EmailConfirmationPageComponent } from './modules/auth/components/email-confirmation-page/email-confirmation-page.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationPageComponent,
  },
  {
    path: 'signin',
    component: SignInPageComponent,
  },
  {
    path: 'signup',
    component: SignUpPageComponent,
  },
  {
    path: 'signup/:email/:token',
    pathMatch: 'prefix',
    component: EmailConfirmationPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
