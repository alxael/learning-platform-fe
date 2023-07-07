import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EditProfileDialogComponent } from './components/profile-page/edit-profile-dialog/edit-profile-dialog.component';

@NgModule({
  declarations: [
    PresentationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    EditProfileDialogComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    PresentationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
  ],
})
export class ContentModule {}
