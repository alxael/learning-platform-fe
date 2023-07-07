import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EditProfileDialogComponent } from './components/profile-page/edit-profile-dialog/edit-profile-dialog.component';
import { AdminSectionsPageComponent } from './components/admin-page/admin-sections-page/admin-sections-page.component';
import { AdminSectionsListItemComponent } from './components/admin-page/admin-sections-page/admin-sections-list-item/admin-sections-list-item.component';
import { AdminSectionPageComponent } from './components/admin-page/admin-sections-page/admin-section-page/admin-section-page.component';
import { AdminSectionAddDialogComponent } from './components/admin-page/admin-sections-page/admin-section-add-dialog/admin-section-add-dialog.component';

@NgModule({
  declarations: [
    PresentationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    EditProfileDialogComponent,
    AdminSectionsPageComponent,
    AdminSectionsListItemComponent,
    AdminSectionPageComponent,
    AdminSectionAddDialogComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PresentationPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    AdminSectionsPageComponent,
    AdminSectionPageComponent
  ],
})
export class ContentModule {}
