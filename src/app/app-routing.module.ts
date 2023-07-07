import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationPageComponent } from './modules/content/components/presentation-page/presentation-page.component';
import { SignInPageComponent } from './modules/auth/components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './modules/auth/components/sign-up-page/sign-up-page.component';
import { EmailConfirmationPageComponent } from './modules/auth/components/email-confirmation-page/email-confirmation-page.component';
import { FeedPageComponent } from './modules/content/components/feed-page/feed-page.component';
import { ProfilePageComponent } from './modules/content/components/profile-page/profile-page.component';

import { AuthGuard } from './modules/auth/guards/auth.guard';
import { AdminPageComponent } from './modules/content/components/admin-page/admin-page.component';

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
    component: EmailConfirmationPageComponent,
  },
  {
    path: 'feed',
    component: FeedPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
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
